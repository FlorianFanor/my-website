import { useEffect, useRef, useState } from 'react';
import * as monaco from 'monaco-editor';
import 'monaco-editor/min/vs/editor/editor.main.css';


export default function ExecutionVisualizer() {
    const editorRef = useRef(null);
    const editorContainerRef = useRef(null);
    const interpreterRef = useRef(null);
    const [output, setOutput] = useState([]);
    const [stack, setStack] = useState([]);
    const [heap, setHeap] = useState([]);
    const [running, setRunning] = useState(false);
    const [callbackQueue, setCallbackQueue] = useState([]);



    useEffect(() => {
        if (editorContainerRef.current) {
            editorRef.current = monaco.editor.create(editorContainerRef.current, {
                value: `function greet(name) {
    console.log("Hello, " + name);
    }
    greet("Flo");`,
                language: 'javascript',
                theme: 'vs-dark',
                fontSize: 14,
                minimap: { enabled: false },
            });
        }
        return () => editorRef.current?.dispose();
    }, []);

    const appendOutput = (msg) => {
        setOutput((prev) => [...prev, String(msg)]);
    };

    const initInterpreter = () => {
        setOutput([]);
        setStack([]);
        setHeap([]);
        setCallbackQueue([]);
        setRunning(false);

        const code = editorRef.current.getValue();
        const Interpreter = window.Interpreter;

        const myInterpreter = new Interpreter(code, (interpreter, globalObject) => {
            // Setup console.log
            const consoleObject = interpreter.createObject(interpreter.OBJECT);
            interpreter.setProperty(globalObject, 'console', consoleObject);

            interpreter.setProperty(
                consoleObject,
                'log',
                interpreter.createNativeFunction((...args) => {
                    const outputMsg = args.map(arg => arg.toString()).join(' ');
                    appendOutput(outputMsg);
                })
            );

            // Setup setTimeout
            const setTimeoutFn = interpreter.createAsyncFunction((cb, delay, done) => {
                const id = Math.random().toString(36).slice(2);
                setCallbackQueue(prev => [...prev, { id, callback: cb }]);
                done(); // finish the async function
            });

            interpreter.setProperty(globalObject, 'setTimeout', setTimeoutFn);
        });

        interpreterRef.current = myInterpreter;
    };


    const step = () => {
        const interpreter = interpreterRef.current;
        if (interpreter && interpreter.step()) {
            const currentStack = interpreter.stateStack.map(s => s.node.type);
            setStack(currentStack);
            setRunning(true);
        } else {
            setRunning(false);
        }
    };

    const processCallbackQueue = () => {
        const interpreter = interpreterRef.current;

        if (!interpreter || callbackQueue.length === 0) return;

        const nextCallback = callbackQueue[0];
        setCallbackQueue(prev => prev.slice(1)); // Remove from queue

        interpreter.queueCall(nextCallback.callback); // Insert into stack

        const interval = setInterval(() => {
            if (interpreter.step()) {
                setStack(interpreter.stateStack.map(s => s.node.type));
            } else {
                clearInterval(interval);
                setRunning(false);
                // Recursively process next callback
                setTimeout(processCallbackQueue, 100);
            }
        }, 50);
    };



    const run = () => {
        setRunning(true);
        const interval = setInterval(() => {
            const interpreter = interpreterRef.current;
            if (interpreter && interpreter.step()) {
                const currentStack = interpreter.stateStack.map(s => s.node.type);
                setStack(currentStack);
            } else {
                clearInterval(interval);
                setRunning(false);
                setTimeout(() => processCallbackQueue(), 300);
            }
        }, 100);
    };

    const reset = () => {
        initInterpreter();
    };

    // Init interpreter on first load
    useEffect(() => {
        const waitForInterpreter = () => {
            if (window.Interpreter) {
                initInterpreter();
            } else {
                setTimeout(waitForInterpreter, 500);
            }
        };
        waitForInterpreter();
    }, []);

    return (
        <div className="p-4 space-y-6 max-w-6xl mx-auto">
            <h1 className="text-2xl font-bold">JavaScript Execution Visualizer</h1>

            <div ref={editorContainerRef} style={{ height: '200px', border: '1px solid #ccc' }} />

            <div className="flex space-x-3 mt-4">
                <button onClick={reset} className="bg-gray-700 text-white px-3 py-1 rounded">Reset</button>
                <button onClick={step} className="bg-blue-600 text-white px-3 py-1 rounded">Step</button>
                <button onClick={run} disabled={running} className="bg-green-600 text-white px-3 py-1 rounded">
                    {running ? "Running..." : "Run All"}
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                    <h2 className="font-semibold mb-1">🧠 Call Stack</h2>
                    <div className="bg-white p-3 border h-40 overflow-y-auto">
                        {stack.length > 0
                            ? stack.map((fn, i) => <div key={i} className="border p-1 rounded mb-1 bg-gray-100">{fn}</div>)
                            : <p className="text-gray-500 italic">Stack is empty</p>}
                    </div>
                </div>

                <div>
                    <h2 className="font-semibold mb-1">💾 Heap (Preview)</h2>
                    <div className="bg-white p-3 border h-40 overflow-y-auto">
                        <p className="text-gray-500 italic">Heap simulation coming soon...</p>
                    </div>
                </div>
            </div>

            <div>
                <h2 className="font-semibold mb-1">📬 Callback Queue</h2>
                <div className="bg-white p-3 border h-40 overflow-y-auto">
                    {callbackQueue.length > 0
                        ? callbackQueue.map((cb, i) => (
                            <div key={i} className="border p-1 rounded mb-1 bg-yellow-100">
                                Callback {i + 1}
                            </div>
                        ))
                        : <p className="text-gray-500 italic">Queue is empty</p>}
                </div>
            </div>


            <div>
                <h2 className="font-semibold mt-4">📤 Console Output</h2>
                <div className="bg-black text-green-400 font-mono p-3 h-32 overflow-y-auto border">
                    {output.length > 0
                        ? output.map((line, idx) => <div key={idx}>{line}</div>)
                        : <p className="text-gray-400 italic">No output yet.</p>}
                </div>
            </div>
        </div>
    );
}


