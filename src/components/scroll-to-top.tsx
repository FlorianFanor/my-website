import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Set the scroll event listener
    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    // Scroll to top smoothly
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-6 z-50 md:hidden glass bg-white/90 backdrop-blur-sm border border-white/20 p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 animate-bounce"
                    aria-label="Scroll to top"
                >
                    <FaArrowUp size={20} className="text-slate-700" />
                </button>
            )}
        </>
    );
};

export default ScrollToTop;
