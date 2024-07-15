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