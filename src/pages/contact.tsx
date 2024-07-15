import React from "react";

const ContactPage: React.FC = () => {
    return (
        <form name="contact" data-netlify={true}>
        <p>
            <label>Name <input type="text" name="name" /></label>
        </p>
        <p>
            <label>Email <input type="email" name="email" /></label>
        </p>
        <p>
            <button type="submit">Send</button>
        </p>
    </form>
    );
};

export default ContactPage;