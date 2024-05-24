import React, { useState, useContext } from 'react';
// import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import styled from "styled-components"
import menuPlusDark from "../assets/menuPlusDark.svg?inline"
import menuPlusLight from "../assets/menuPlusLight.svg?inline"
import chevronUpDark from "../assets/chevronUpDark.svg"
import chevronUpLight from "../assets/chevronUpLight.svg"
import ThemeContext from "../utils/ThemeContext"

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
  border-bottom: 1px solid ${({ theme }) => (theme.isDarkMode ? '#ffffff' : '#131313')};
  font-size: 1rem;
  padding: 0 0 0.5rem;
  color: ${({ theme }) => (theme.isDarkMode ? '#ffffff' : '#131313')};
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
  background-color: ${({ theme }) => (theme.isDarkMode ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.5)")};
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
  // const [isOpen, setIsOpen] = useState(true) //set to keep sidebar open

  // const toggleSidebar = () => {
  //   setIsOpen(isOpen)
  // }
  const [isOpen, setIsOpen] = useState(false)
  const { isDarkMode } = useContext(ThemeContext);
  console.log("header isDarkMode", isDarkMode)

  const toggleSidebar = () => {
    setTimeout(() => {
      setIsOpen(!isOpen);
    }, 200);
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
            <StyledSidebarButton 
              onClick={toggleSidebar}
              theme={{ isDarkMode }}
            >
              Menu
              <StyledSidebarImg 
                src={isDarkMode ? menuPlusDark : menuPlusLight} 
                alt="menu icon"
              />
            </StyledSidebarButton>
          </StyledList>
        </StyledUnorderedList>
      </nav>
      {!isOpen && <StyledScrollToTop onClick={scrollToTop} theme={{ isDarkMode }}>
        <StyledChevronUpIconDark src={isDarkMode ? chevronUpDark : chevronUpLight}/>
      </StyledScrollToTop>}
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
    </StyledHeader>
  )
}

export default Header