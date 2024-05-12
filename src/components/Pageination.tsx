import React from 'react';
import { Link, NavLink, } from 'react-router-dom';
import styled from "styled-components"

type PaginationProps = {
    currentPage: number;
    totalPages: number;
    onOlderPage: () => void;
    onNewerPage: () => void;
  }

const StyledLink = styled(Link)`
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
        <div>
            <StyledLink
              to={`/${currentPage === totalPages ? totalPages : currentPage + 1}`}
              onClick={currentPage === 1 ? undefined : onOlderPage}
              className={currentPage === totalPages ? 'disabled' : ''}
            >
            older
            </StyledLink>
            <span>
            Page {currentPage} of {totalPages}
            </span>
            <StyledLink
              to={currentPage === 1 ? `/` : `/${currentPage - 1}`}
              onClick={currentPage === totalPages ? undefined : onNewerPage}
              className={currentPage === 1 ? 'disabled' : ''}
            >
            newer
            </StyledLink>
        </div>
    )
}

export default Pagination