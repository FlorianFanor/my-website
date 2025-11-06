import { useEffect } from "react";
import { Contact } from "../components/contact/Contact";

export const ContactPage = () => {
  useEffect(() => {
    document.title = "Contact - Florian Fanor";
  }, []);

  return <Contact />;
};
