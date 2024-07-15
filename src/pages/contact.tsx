import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ContactPage: React.FC = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
            // Local development - simulate successful submission
            console.log("Form data (local):", { name, email });
            navigate("/thank-you");
        } else {
            // Production - submit to Netlify
            const form = e.target as HTMLFormElement;
            try {
                const response = await fetch("/", {
                    method: "POST",
                    headers: { "Content-Type": "application/x-www-form-urlencoded" },
                    body: new URLSearchParams(new FormData(form) as any).toString()
                });
                
                if (response.ok) {
                    console.log("Form successfully submitted to Netlify");
                    navigate("/thank-you");
                } else {
                    console.error("Netlify form submission failed");
                    // Handle error (e.g., show error message to user)
                }
            } catch (error) {
                console.error("Error submitting form to Netlify:", error);
                // Handle error (e.g., show error message to user)
            }
        }
    };

    return (
        <>
            <h3 style={{ color: "red" }}>Under Construction</h3>
            <form name="contact" method="POST" onSubmit={handleSubmit} data-netlify="true">
                <input type="hidden" name="form-name" value="contact" />
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