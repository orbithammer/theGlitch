import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import styled from "styled-components"
import menuPlus from "../assets/menuPlus.svg?inline"

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: right;
`

const StyledUnorderedList = styled.ul`
  list-style-type: none;
`

const StyledList = styled.li`
  margin-left: auto;
  margin-right: 1rem;
`

const StyledSidebarButton = styled.button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  border-bottom: 1px solid white;
  font-size: 1rem;
  padding: 0 0 0.5rem;
`

const StyledSidebarImg = styled.img`
  height: 1rem;
  margin-left: 0.5rem;
  padding-bottom: 0.25rem;
`

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <StyledHeader>
      <nav>
        <StyledUnorderedList>
          <StyledList>
            <StyledSidebarButton onClick={toggleSidebar}>
              Menu
              <StyledSidebarImg 
                src={menuPlus} 
                alt="menu icon"
              />
            </StyledSidebarButton>
          </StyledList>
        </StyledUnorderedList>
      </nav>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
    </StyledHeader>
  );
};

export default Header;