import React from "react";
import { useNavigate } from "react-router-dom";

const ContactPage: React.FC = () => {
    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        navigate("/thank-you")
    };
    
    return (
        <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
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
    )
}

export default ContactPage