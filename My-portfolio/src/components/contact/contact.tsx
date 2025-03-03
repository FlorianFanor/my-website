import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
    return (
        <div id="contact" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h2 className="text-4xl font-bold text-center text-gray-800">Contact me</h2>
            <p className="text-center py-3">
                Want to reach out? Great! But since this site is still a work in progress (just like perfect CSS grid alignment), the best way to contact me is on LinkedIn.    
            </p>
            <p className="flex justify-center items-center">
                No contact forms, no carrier pigeons, just a simple LinkedIn message will do.
            </p>
            <p className="flex justify-center items-center">
            Catch me there! 🚀 
            👉 <a href="https://www.linkedin.com/in/florian-fanor-704a18132" target="_blank" aria-label="LinkedIn - new page" >
                <FaLinkedin size="30" className="text-gray-800 m-4" />
            </a>
            </p>
        </div>
    );
}
export default Contact;