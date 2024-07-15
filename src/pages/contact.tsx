import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import PageMetaTags from "../utils/PagesMetaTags.tsx"

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 500px;
    margin: 0 auto;
`;

const StyledInput = styled.input`
    margin-bottom: 1rem;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

const StyledTextarea = styled.textarea`
    margin-bottom: 1rem;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    min-height: 100px;
`;

const StyledButton = styled.button`
    padding: 0.5rem 1rem;
    background-color: #333;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
`;

const ContactPage: React.FC = () => {
    const navigate = useNavigate();
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        try {
            await fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams({
                    "form-name": form.getAttribute("name") || "",
                    ...formState
                }).toString()
            });
            navigate("/thank-you");
        } catch (error) {
            console.error("Error submitting form:", error);
            // Handle error (e.g., show error message to user)
        }
    };

    return (
        <>
            <PageMetaTags />
            <main>
                <h1>Contact Us</h1>
                <StyledForm name="contact" onSubmit={handleSubmit} data-netlify="true">
                    <input type="hidden" name="form-name" value="contact" />
                    <StyledInput
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                    />
                    <StyledInput
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                    />
                    <StyledTextarea
                        name="message"
                        placeholder="Your Message"
                        value={formState.message}
                        onChange={handleChange}
                        required
                    />
                    <StyledButton type="submit">Send</StyledButton>
                </StyledForm>
            </main>
        </>
    );
};

export default ContactPage;