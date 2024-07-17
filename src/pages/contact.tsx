import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ContactPage: React.FC = () => {
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSubmitting(true);

        const form = event.target as HTMLFormElement;
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
                // Handle error (e.g., show error message to user)
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            // Handle error (e.g., show error message to user)
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
            <input type="hidden" name="form-name" value="contact" />
            <p>
                <label>Your Name: <input type="text" name="name" required /></label>
            </p>
            <p>
                <label>Your Email: <input type="email" name="email" required /></label>
            </p>
            <p>
                <label>Your Role: <select name="role[]" multiple>
                <option value="leader">Leader</option>
                <option value="follower">Follower</option>
                </select></label>
            </p>
            <p>
                <label>Message: <textarea name="message" required></textarea></label>
            </p>
            <p>
                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send"}
                </button>
            </p>
        </form>
    );
};

export default ContactPage;