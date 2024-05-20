import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import styled from "styled-components"
import menuPlus from "../assets/menuPlus.svg?inline"
import chevronUp from "../assets/chevronUp.svg"

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
const StyledScrollToTop = styled.button`
  position: fixed;
  bottom: 4rem;
  left: auto;
  right: 2rem;
  background-color: rgba(255, 255, 255, 0.5);
  border: none;
  border-radius: 0.5rem;
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 100;
`

const StyledChevronUpIconDark = styled.img`
  width: 100%;
  height: 100%;
`

const Header: React.FC = () => {
  // const [isOpen, setIsOpen] = useState(true)

  // const toggleSidebar = () => {
  //   setIsOpen(isOpen)
  // }
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

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
      {!isOpen && <StyledScrollToTop onClick={scrollToTop}>
        <StyledChevronUpIconDark src={chevronUp}/>
      </StyledScrollToTop>}
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
    </StyledHeader>
  )
}

export default Header