import React from "react";
import { Link } from "react-router-dom"
import { styled } from "styled-components"
import notFound from "/images/notFound.webp"

const StyledLink = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
`

const NotFoundPage: React.FC = () => {
    return (
        <main>
            <StyledLink to="/">
                <img src={notFound} alt="man with face half hidden behind a desk with 404 written underneath" />
                <p>Click the image to go back home</p>
            </StyledLink>
        </main>
    )
}

export default NotFoundPage