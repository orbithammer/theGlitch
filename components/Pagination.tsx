import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components"
import ThemeContext from "../utils/ThemeContext"

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
  color: ${({ theme }) => theme.isDarkMode ? "#ffffff" : "#000000"};
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
  const { isDarkMode } = useContext(ThemeContext);
  const activeStyles: React.CSSProperties = {
      fontWeight: "bold",
      textDecoration: "none",
      color: isDarkMode ? "#9CE00C" : "#5200FF",
  }
    // console.log("currentSubPagePath",currentSubPagePath);
    // console.log("currentPage", currentPage)
    
return (
        <StyledLinkWrapper>
          <StyledLink
            to={`${currentSubPagePath}/1`}
            className={currentPage === 1 ? 'disabled' : ''}
            theme={{ isDarkMode }}
          >&lt;&lt;</StyledLink>
          <StyledLink
            to={currentPage === 1 ? `${currentSubPagePath}` : `${currentSubPagePath}/${currentPage - 1}`}
            onClick={currentPage === 1 ? undefined : onNewerPage}
            className={currentPage === 1 ? 'disabled' : ''}
            theme={{ isDarkMode }}
          >&lt;</StyledLink>
          {currentPage > 2 && (
            <StyledLink to={`${currentSubPagePath}/${currentPage - 2}`}
            theme={{ isDarkMode }}>
                {currentPage - 2}
            </StyledLink>
          )}
          {currentPage > 1 && (
            <StyledLink to={`${currentSubPagePath}/${currentPage - 1}`}
            theme={{ isDarkMode }}>
                {currentPage - 1}
            </StyledLink>
          )}
          <StyledLink
            to={`${currentSubPagePath}/${currentPage}`}
            style={activeStyles}
            theme={{ isDarkMode }}
          >
            {currentPage}
          </StyledLink>
          {currentPage < totalPages  && (
            <StyledLink to={`${currentSubPagePath}/${currentPage + 1}`}
            theme={{ isDarkMode }}>
                {currentPage + 1}
            </StyledLink>
          )}
          {currentPage < totalPages - 1 && (
            <StyledLink to={`${currentSubPagePath}/${currentPage + 2}`}
            theme={{ isDarkMode }}>
                {currentPage + 2}
            </StyledLink>
          )}
          <StyledLink
            to={`${currentSubPagePath}/${currentPage + 1}`}
            onClick={currentPage === totalPages ? undefined : onOlderPage}
            className={currentPage === totalPages ? 'disabled' : ''}
            theme={{ isDarkMode }}
          >&gt;</StyledLink>
          <StyledLink
            to={`${currentSubPagePath}/${totalPages}`}
            className={currentPage === totalPages ? 'disabled' : ''}
            theme={{ isDarkMode }}
          >&gt;&gt;</StyledLink>
      </StyledLinkWrapper>
    )
}

export default Pagination