import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-gradient-to-b from-blue-50 to-slate-100">
            <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
                <div className="animate-fade-in-up">
                    <h2 className="text-5xl md:text-6xl font-black text-gradient mb-8">Let's Connect</h2>

                    <div className="glass rounded-3xl p-8 md:p-12 bg-white/80 backdrop-blur-sm space-y-6">
                        <div className="space-y-4">
                            <p className="text-xl text-slate-600 leading-relaxed">
                                Want to reach out? Great! But since this site is still a work in progress
                                <span className="italic text-slate-500">(just like perfect CSS grid alignment)</span>,
                                the best way to contact me is on LinkedIn.
                            </p>
                            <p className="text-lg text-slate-600">
                                No contact forms, no carrier pigeons, just a simple LinkedIn message will do.
                            </p>
                        </div>

                        <div className="pt-8">
                            <p className="text-lg text-slate-600 mb-6">
                                Catch me there!
                            </p>

                            <a
                                href="https://www.linkedin.com/in/florian-fanor-704a18132"
                                target="_blank"
                                aria-label="Connect with me on LinkedIn - opens in new tab"
                                className="inline-flex items-center space-x-4 gradient-primary text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-pulse-glow"
                            >
                                <FaLinkedin size="32" />
                                <span>Connect on LinkedIn</span>
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                        </div>

                        <div className="pt-8 border-t border-slate-200">
                            <p className="text-sm text-slate-500">
                                Looking forward to hearing from you and discussing potential collaborations!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Contact;