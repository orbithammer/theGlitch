import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ContactPage: React.FC = () => {
    const navigate = useNavigate();
    const [submitError, setSubmitError] = useState<string | null>(null);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);

        try {
            const response = await fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(formData as any).toString()
            });
            
            if (response.ok) {
                navigate("/thank-you");
            } else {
                console.error("Form submission failed");
                setSubmitError("Form submission failed. Please try again.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setSubmitError("An error occurred. Please try again.");
        }
    };

    return (
        <div>
            <p>sfda</p>
            <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
                <input type="hidden" name="form-name" value="contact" />
                <p>
                    <label>Your Name: <input type="text" name="name" /></label>
                </p>
                <p>
                    <label>Your Email: <input type="email" name="email" /></label>
                </p>
                <p>
                    <label>Your Role: <select name="role[]" multiple>
                    <option value="leader">Leader</option>
                    <option value="follower">Follower</option>
                    </select></label>
                </p>
                <p>
                    <label>Message: <textarea name="message"></textarea></label>
                </p>
                <p>
                    <button type="submit">Send</button>
                </p>
            </form>
            {submitError && <p style={{ color: 'red' }}>{submitError}</p>}
        </div>
    );
};

export default ContactPage;