import React from "react"
import { Link } from "react-router-dom"
import { articlesData } from "../data/articles.ts"
import { styled } from "styled-components"

type HeroArticle = {
    id: number;
    articleUrl: string;
    category: string;
    img: string;
    alt: string;
    header: string;
    subhead: string;
    author: string;
    datePublished: Date;
}

const articleData: HeroArticle[] = articlesData

const StyledHeroWrapper = styled.div`
    position: relative;
`

const StyledLogo = styled.h1`
    position: absolute; 
    font-size: 4rem;
    color: white;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    top: -35%
`

const StyledHeroImg = styled.img`
    max-width: 100%;
    margin: 0;
    border-radius: 5px;
    object-fit: cover;
`

const StyledHeadline = styled.h2`
    font-family: "Fjalla One", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 3rem;
    letter-spacing: -0.05em;
    color: white;
    transform: tranlateY(-20%);
    max-width: 90%;
    word-spacing: -0.05em;
    line-height: 3.2rem;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    &:hover {
        background-color: #5200FF;
    }
    margin: 0;
`

const StyledSubhead = styled.p`
    font-family: "Source Serif 4", serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    font-size: 1.5rem;
    letter-spacing: -0.05em;
    word-spacing: -0.05em;
    margin: 0;
    line-height: 1.6rem;
`

const StyledHeadlineSmall = styled(StyledHeadline)`
  font-size: 2rem;
  line-height: 2.5rem;
`

const StyledSubheadSmall = styled(StyledSubhead)`
  font-size: 1rem;
  line-height: 1rem;
  letter-spacing: -0.02em;
`

const StyledArticleInfo = styled.p`
    font-family: "Open Sans", sans-serif;
    font-optical-sizing: auto;
    font-weight: 300;
    font-style: normal;
    font-variation-settings:
        "wdth" 100;
        text-transform: uppercase;
`

const StyledAuthor = styled.span`
    color: #9CE00C;
    margin-right: 1rem;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
`

function formatDate(date: Date){
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const day = date.getDate(); // Get the day (1-31)
    const month = monthNames[date.getMonth()-1]; // Get the month name
    const year = date.getFullYear(); // Get the full year (e.g., 2024)
    return `${month} ${day}, ${year}`;
}

const HomePage: React.FC = () => {
    const techArticles = articleData.filter((article) => article.category === "tech")

    return (
        <main>
            {techArticles.map((article, index) =>(
                <div key={article.id}>
                    <StyledLink 
                        to={`/${article.articleUrl}`}
                        aria-label={`to article ${article.header}`}
                    >
                        <StyledHeroWrapper>
                            {index === 0 && <StyledLogo>theGlitch</StyledLogo>}
                            <StyledHeroImg src={article.img} alt={articleData[0]?.alt}/>
                        </StyledHeroWrapper>
                        {index === 0 ? (
                            <>
                                <StyledHeadline>{article.header}<br /></StyledHeadline>
                                <StyledSubhead>{article.subhead}</StyledSubhead>
                            </>
                            ) : (
                            <>
                                <StyledHeadlineSmall>{article.header}<br /></StyledHeadlineSmall>
                                <StyledSubheadSmall>{article.subhead}</StyledSubheadSmall>
                            </>
                        )}
                    </StyledLink>
                    <StyledArticleInfo>
                        <StyledAuthor>{article.author}</StyledAuthor>
                        {formatDate(article.datePublished)}
                    </StyledArticleInfo>
                </div>
            ))}
        </main>
    )
}
export default HomePage
