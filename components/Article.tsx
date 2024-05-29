import React, {useEffect, useState, useContext } from "react"
import { useParams, Link } from "react-router-dom"
import { articlesData } from "../data/articles"
import { styled } from "styled-components"
import CopyLinkIconDark from "/src/assets/copyLinkDark.svg"
import CopyLinkIconLight from "/src/assets/copyLinkLight.svg"
import FacebookShareIconDark from "/src/assets/facebookShareDark.svg"
import FacebookShareIconLight from "/src/assets/facebookShareLight.svg"
import TwitterShareIconDark from "/src/assets/twitterShareDark.svg"
import TwitterShareIconLight from "/src/assets/twitterShareLight.svg"
import ThemeContext from "../utils/ThemeContext"


type articlesData = {
    id: number;
    articleUrl: string;
    category: string;
    img: string;
    alt: string;
    header: string;
    subhead: string;
    author: string;
    datePublished: Date;
    articleBody: string[];
}

const StyledHeroWrapper = styled.div`
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
    line-height: 1.5rem;
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

const StyledAuthor = styled(Link)`
    color: ${({ theme }) => theme.isDarkMode ? "#9CE00C" : "#5200FF"};
    margin-right: 1rem;
    text-decoration: none;
    &:hover {
        background-color: ${({ theme }) => theme.isDarkMode ? "#5200FF" : "#9CE00C"};
    }
`

const StyledButtonWrapper = styled.div`
    display: flex;
`

const StyledShareButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.isDarkMode ? "#353535" : "#cacaca"};
    margin-right: 1rem;
    border: none;
    &:hover {
        background-color: ${({ theme }) => theme.isDarkMode ? "#5200FF" : "#9CE00C"};
      }
    
      a {
        width: 1rem;
        height: 1rem;
      }
`

const StyledArticleBody = styled.p`
    font-family: "Quattrocento", serif;
    font-weight: 400;
    font-style: normal;
    font-size: 1.2rem
`

// const CopyLinkIcon: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => (
//     <img src={isDarkMode ? CopyLinkIconDark : CopyLinkIconLight} alt="Copy Link" />
// );

const formatDate = (date: Date) => {
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const day = date.getDate(); // Get the day (1-31)
    const month = monthNames[date.getMonth()-1]; // Get the month name
    const year = date.getFullYear(); // Get the full year (e.g., 2024)
    return `${month} ${day}, ${year}`;
}

const copyLink = async () => {
    try {
        await navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
    } catch (err) {
        console.error(err);
        alert('Failed to copy link to clipboard!');
    }
}

const Article: React.FC = () => {
    const { isDarkMode } = useContext(ThemeContext);
    const {articleUrl} = useParams() 
    const [article, setArticle] = useState<articlesData | null>(null)
    useEffect(()=>{
        const foundArticle = articlesData.find(articleObj => articleObj.articleUrl === articleUrl);
        setArticle(foundArticle ? foundArticle : null);
    },[])
    let formattedDate = ""
    if(article){
        formattedDate = formatDate(article.datePublished)
    }

    return (
        <>
            <main>
                <StyledHeroWrapper>
                    <StyledLogo theme={{ isDarkMode }}>theGlitch</StyledLogo>
                    <StyledImg src={article?.img} alt={article?.alt}/>
                </StyledHeroWrapper>
                <StyledHeadline>{article?.header}<br/></StyledHeadline>
                <StyledSubhead>{article?.subhead}</StyledSubhead>
                <StyledArticleInfo>
                    <StyledAuthor 
                        theme={{ isDarkMode }}
                        to={`/profiles`}
                        aria-label={`to profiles`}
                    >{article?.author}</StyledAuthor>
                    {formattedDate}
                </StyledArticleInfo>
                <StyledButtonWrapper>
                    <StyledShareButton onClick={copyLink} theme={{ isDarkMode }}>
                        <img src={isDarkMode ? CopyLinkIconDark : CopyLinkIconLight} alt="copy link icon" />
                    </StyledShareButton>
                    <StyledShareButton theme={{ isDarkMode }}>
                        <a href={`https://www.facebook.com/sharer/sharer.php?u=${article?.articleUrl}`} target="_blank" rel="noopener noreferrer">
                            <img src={isDarkMode ? FacebookShareIconDark : FacebookShareIconLight} alt="facebook share icon"/>
                        </a>
                    </StyledShareButton>
                    <StyledShareButton theme={{ isDarkMode }}>
                        <a href={`https://twitter.com/share?text=${article?.header}%20${article?.articleUrl}`} target="_blank" rel="noopener noreferrer">
                            <img src={isDarkMode ? TwitterShareIconDark : TwitterShareIconLight} />
                        </a>
                    </StyledShareButton>
                </StyledButtonWrapper>
                <article>
                    {article?.articleBody.map((paragraph, index)=><StyledArticleBody key={index}>{paragraph}</StyledArticleBody>)}
                </article>
            </main>
        </>
    )
}

export default Article