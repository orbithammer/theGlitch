import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import styled from "styled-components"
import sidebarCloseIcon from "../assets/sidebarCloseIcon.svg?inline"
import ToggleButton from './ToggleButton';
import { articlesData } from '../data/articles.ts';

type Article = {
  id: number;
  articleUrl: string;
  category: string;
  img: string;
  alt: string;
  header: string;
  subhead: string;
  tags: string[];
  author: string;
  datePublished: Date;
  articleBody: string[];
}

const StyledSidebarWrapper = styled.div`
  z-index: 1;
`

const StyledSearchWrapper = styled.div`
  display: flex;
  align-items: space-between;
  justify-content: start;
`

const StyledCloseButton = styled.button`
  height: 2rem;
  width: 2rem;
  background-color: #5200FF;
  border: none;
  margin: 0 1rem 0 auto;
`

const StyledCloseImg = styled.img`
  height: 2rem;
  width: 2rem;
`

const StyledUnorderedList = styled.ul`
  list-style-type: none;
`
const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 2rem;
`
const StyledDropdown = styled.div`
  position: relative;
  display: inline-block;
`

const StyledDropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  &:hover {
    display: block;
  }
`

const StyledDropdownLink = styled(Link)`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  &:hover {
    background-color: #ddd;
  }
`

const Sidebar: React.FC<{ isOpen: boolean; toggleSidebar: () => void }> = ({
    isOpen,
    toggleSidebar,
  }) => {
    const activeStyles: React.CSSProperties = {
        fontWeight: "bold",
        textDecoration: "none",
        color: "#9CE00C"
    }

    const sidebarStyles: React.CSSProperties = {
      position: 'fixed' as 'fixed',
      top: 0,
      right: -16,
      width: '21.5rem',
      height: '100vh',
      backgroundColor: '#5200FF',
      padding: '1.25rem',
      transform: 'translateX(23rem)',
      transition: 'transform 0.1s ease-out',
    };

const sidebarOpen: React.CSSProperties = {
    ...sidebarStyles,
    transform: 'translateX(0)',
};

const getNavLinkStyle = ({ isActive }: { isActive: boolean }) => 
    isActive ? activeStyles : undefined;

// articlesData.map(article => console.log(article.tags))
const organizeTagsByCategory = (articlesData: Article[]) => {
  const categories: { [key: string]: { [tag: string]: number } } = {};

  articlesData.forEach(article => {
    if (!categories[article.category]) {
      categories[article.category] = {};
    }
    article.tags.forEach(tag => {
      if (!categories[article.category][tag]) {
        categories[article.category][tag] = 0;
      }
      categories[article.category][tag]++;
    });
  });

  // Sort tags by frequency within each category
  for (let category in categories) {
    let tags = categories[category];
    categories[category] = Object.entries(tags)
      .sort((a, b) => b[1] - a[1])
      .reduce((obj: Record<string, number>, [tag, count]) => {
        obj[tag] = count;
        return obj;
      }, {});
  }

  return categories;
};

const categorizedTags = organizeTagsByCategory(articlesData);
console.log(categorizedTags);


return (
    <StyledSidebarWrapper 
      style={isOpen ? sidebarOpen : sidebarStyles}
      onClick={toggleSidebar}
    >
      <StyledSearchWrapper>
      <ToggleButton />
        <StyledCloseButton onClick={toggleSidebar}>
          <StyledCloseImg src={sidebarCloseIcon} alt="sidebar close button icon"/>
        </StyledCloseButton>
      </StyledSearchWrapper>
      <StyledUnorderedList>
        <li>
            <StyledNavLink 
                to="/"
                style={getNavLinkStyle}
                onClick={toggleSidebar}
                aria-label={`to home page`}
            >Home</StyledNavLink>
        </li>
          {Object.keys(categorizedTags).map(category => (
            <li key={category}>
              <StyledDropdown>
                <StyledNavLink 
                  to={`/${category}`}
                  style={getNavLinkStyle}
                  onClick={toggleSidebar}
                  aria-label={`to ${category} page`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </StyledNavLink>
                <StyledDropdownContent>
                  {Object.keys(categorizedTags[category]).map(tag => (
                    <StyledDropdownLink to={`/${category}/${tag}`} key={tag}>
                      {tag}
                    </StyledDropdownLink>
                  ))}
                </StyledDropdownContent>
              </StyledDropdown>
            </li>
          ))}
        </StyledUnorderedList>
      </StyledSidebarWrapper>
  );
};

export default Sidebar;