import React from 'react';
import { Link, NavLink, } from 'react-router-dom';
import styled from "styled-components"

type PaginationProps = {
    currentPage: number;
    totalPages: number;
    onOlderPage: () => void;
    onNewerPage: () => void;
  }

const StyledLinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0;
`

const StyledLink = styled(Link)`
  margin: 0 0.25rem;
  text-decoration: none;
  /* Styles for inactive links */
  &.disabled {
    pointer-events: none;
    opacity: 0.5;
  }
`
const Pagination: React.FC<PaginationProps> = ({
    currentPage,
    totalPages,
    onOlderPage,
    onNewerPage,
}) => {
    const activeStyles: React.CSSProperties = {
        fontWeight: "bold",
        textDecoration: "none",
        color: "#9CE00C"
    }
return (
        <StyledLinkWrapper>
          <StyledLink
            to={`/1`}
            onClick={currentPage === 1 ? undefined : onOlderPage}
            className={currentPage === 1 ? 'disabled' : ''}
          >&lt;&lt;</StyledLink>
          <StyledLink
            to={currentPage === 1 ? `/` : `/${currentPage - 1}`}
            onClick={currentPage === totalPages ? undefined : onNewerPage}
            className={currentPage === 1 ? 'disabled' : ''}
          >&lt;</StyledLink>
          {currentPage > 4 && (
            <StyledLink to={`/${currentPage - 4}`}>
                {currentPage - 4}
            </StyledLink>
          )}
          {currentPage > 3 && (
            <StyledLink to={`/${currentPage - 3}`}>
                {currentPage - 3}
            </StyledLink>
          )}
          {currentPage > 2 && (
            <StyledLink to={`/${currentPage - 2}`}>
                {currentPage - 2}
            </StyledLink>
          )}
          {currentPage > 1 && (
            <StyledLink to={`/${currentPage - 1}`}>
                {currentPage - 1}
            </StyledLink>
          )}
          <StyledLink
            to={`/${currentPage}`}
            style={activeStyles}
          >
            {currentPage}
          </StyledLink>
          {currentPage < totalPages  && (
            <StyledLink to={`/${currentPage + 1}`}>
                {currentPage + 1}
            </StyledLink>
          )}
          {currentPage < totalPages - 1 && (
            <StyledLink to={`/${currentPage + 2}`}>
                {currentPage + 2}
            </StyledLink>
          )}
          <StyledLink
            to={`/${currentPage === totalPages ? totalPages : currentPage + 1}`}
            onClick={currentPage === 1 ? undefined : onOlderPage}
            className={currentPage === totalPages ? 'disabled' : ''}
          >&gt;</StyledLink>
          <StyledLink
            to={`/${totalPages}`}
            onClick={currentPage === totalPages ? undefined : onNewerPage}
            className={currentPage === totalPages ? 'disabled' : ''}
          >&gt;&gt;</StyledLink>
      </StyledLinkWrapper>
    )
}

export default Pagination