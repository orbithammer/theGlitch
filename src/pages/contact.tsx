import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ContactPage: React.FC = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);

        try {
            const response = await fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(formData as any).toString()
            });
            
            if (response.ok) {
                console.log("Form successfully submitted");
                navigate("/thank-you");
            } else {
                console.error("Form submission failed");
                // Handle error (e.g., show error message to user)
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            // Handle error (e.g., show error message to user)
        }
    };

    return (
        <>
            <h3 style={{ color: "red" }}>Under Construction</h3>
            <form 
                name="contact" 
                method="POST" 
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
            >
                <input type="hidden" name="form-name" value="contact" />
                <div hidden>
                    <input name="bot-field" />
                </div>
                <p>
                    <label>Name <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} /></label>
                </p>
                <p>
                    <label>Email <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} /></label>
                </p>
                <p>
                    <button type="submit">Send</button>
                </p>
            </form>
        </>
    );
};

export default ContactPage;