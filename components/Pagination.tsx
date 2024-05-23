import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components"

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  currentSubPagePath: string;
  onOlderPage: () => void;
  onNewerPage: () => void;
}

const StyledLinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 2rem 2rem;
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
    currentSubPagePath,
    onOlderPage,
    onNewerPage,
}) => {
    const activeStyles: React.CSSProperties = {
        fontWeight: "bold",
        textDecoration: "none",
        color: "#9CE00C"
    }
    // console.log("currentSubPagePath",currentSubPagePath);
    // console.log("currentPage", currentPage)
    
return (
        <StyledLinkWrapper>
          <StyledLink
            to={`${currentSubPagePath}/1`}
            className={currentPage === 1 ? 'disabled' : ''}
          >&lt;&lt;</StyledLink>
          <StyledLink
            to={currentPage === 1 ? `${currentSubPagePath}` : `${currentSubPagePath}/${currentPage - 1}`}
            onClick={currentPage === 1 ? undefined : onNewerPage}
            className={currentPage === 1 ? 'disabled' : ''}
          >&lt;</StyledLink>
          {currentPage > 2 && (
            <StyledLink to={`${currentSubPagePath}/${currentPage - 2}`}>
                {currentPage - 2}
            </StyledLink>
          )}
          {currentPage > 1 && (
            <StyledLink to={`${currentSubPagePath}/${currentPage - 1}`}>
                {currentPage - 1}
            </StyledLink>
          )}
          <StyledLink
            to={`${currentSubPagePath}/${currentPage}`}
            style={activeStyles}
          >
            {currentPage}
          </StyledLink>
          {currentPage < totalPages  && (
            <StyledLink to={`${currentSubPagePath}/${currentPage + 1}`}>
                {currentPage + 1}
            </StyledLink>
          )}
          {currentPage < totalPages - 1 && (
            <StyledLink to={`${currentSubPagePath}/${currentPage + 2}`}>
                {currentPage + 2}
            </StyledLink>
          )}
          <StyledLink
            to={`${currentSubPagePath}/${currentPage + 1}`}
            onClick={currentPage === totalPages ? undefined : onOlderPage}
            className={currentPage === totalPages ? 'disabled' : ''}
          >&gt;</StyledLink>
          <StyledLink
            to={`${currentSubPagePath}/${totalPages}`}
            className={currentPage === totalPages ? 'disabled' : ''}
          >&gt;&gt;</StyledLink>
      </StyledLinkWrapper>
    )
}

export default Pagination