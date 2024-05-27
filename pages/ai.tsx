import React, {useState, useEffect, useContext} from "react"
import { Link, useParams } from "react-router-dom"
import { articlesData } from "../data/articles.ts"
import { styled } from "styled-components"
import Pagination from "../components/Pagination.tsx"
import ThemeContext from "../utils/ThemeContext"

type Article = {
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

const articleData: Article[] = articlesData

const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${({ theme }) => theme.isDarkMode ? "#ffffff" : "#000000"};
`

const StyledImageWrapper = styled.div`
    position: relative;
`

const StyledLogo = styled.h1`
    position: absolute; 
    font-size: 4rem;
    text-shadow: ${({ theme }) => theme.isDarkMode ? "1px 1px 5px rgba(0, 0, 0,  0.5)" : "1px 1px 5px rgba(255, 255, 255,  0.5)"};
    top: -5.7rem;
    left: -1rem;
`

const StyledImg = styled.img`
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
    transform: tranlateY(-20%);
    max-width: 90%;
    word-spacing: -0.05em;
    line-height: 3.4rem;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    &:hover {
        background-color: ${({ theme }) => theme.isDarkMode ? "#5200FF" : "#9CE00C"};
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
  @media (min-width: 64rem) {
    font-size: 2.4rem;
  }
`

const StyledSubheadSmall = styled(StyledSubhead)`
  font-size: 1rem;
  line-height: 1rem;
  letter-spacing: -0.02em;
  @media (min-width: 64rem) {
    font-size: 1.2rem;
    line-height: 1.2rem;
  }
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
    color: ${({ theme }) => theme.isDarkMode ? "#9CE00C" : "#5200FF"};
    margin-right: 1rem;
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

const AiPage: React.FC = () => {
    const { isDarkMode } = useContext(ThemeContext);
    const aiArticles = articleData
        .filter((article) => article.category === "ai")
        .sort((a, b) => b.datePublished.getTime() - a.datePublished.getTime());
    const { pageNumber } = useParams();
    const [currentPage, setCurrentPage] = useState(parseInt(pageNumber || '1', 10))
    const articlesPerPage = 6
    const startIndex = (currentPage - 1) * articlesPerPage
    const endIndex = startIndex + articlesPerPage
    const currentArticles = aiArticles.slice(startIndex, endIndex)
    const totalArticles = aiArticles.length
    const totalPages = Math.ceil(totalArticles / articlesPerPage)
    useEffect(() => {
        setCurrentPage(parseInt(pageNumber || '1', 10))
    }, [pageNumber])
    
    const handleOlderPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages))
    }

    const handleNewerPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))
        
    }

    return (
        <>
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                currentSubPagePath="/ai"
                onOlderPage={handleOlderPage}
                onNewerPage={handleNewerPage}
            />
            <main>
                {currentArticles.map((article, index) => {
                    return (
                        <div key={article.id}>
                            <StyledLink 
                                to={`/article/${article.articleUrl}`}
                                aria-label={`to article ${article.header}`}
                                theme={{ isDarkMode }}
                            >
                                <StyledImageWrapper>
                                {index === 0 && <StyledLogo theme={{ isDarkMode }}>theGlitch</StyledLogo>}
                                    <StyledImg src={article.img} alt={article.alt}/>
                                </StyledImageWrapper>
                                {index === 0 ? (
                                    <>
                                        <StyledHeadline theme={{ isDarkMode }}>{article.header}<br /></StyledHeadline>
                                        <StyledSubhead>{article.subhead}</StyledSubhead>
                                    </>
                                    ) : (
                                    <>
                                        <StyledHeadlineSmall>{article.header}<br /></StyledHeadlineSmall>
                                        <StyledSubheadSmall>{article.subhead}</StyledSubheadSmall>
                                    </>
                                )}
                                <StyledArticleInfo>
                                    <StyledAuthor theme={{ isDarkMode }}>{article.author}</StyledAuthor>
                                    {formatDate(article.datePublished)}
                                </StyledArticleInfo>
                            </StyledLink>
                        </div>
                    )
                })}
            </main>
            {currentArticles.length > 1 && (
                <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                currentSubPagePath="/ai"
                onOlderPage={handleOlderPage}
                onNewerPage={handleNewerPage}
                />
            )}
        </>
    )
}
export default AiPage
