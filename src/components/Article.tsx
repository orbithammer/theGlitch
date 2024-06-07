import React, {useEffect, useState, useContext } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import { articlesData } from "../data/articles"
import { styled } from "styled-components"
import MetaTags from "../utils/MetaTags"
import CopyLinkIconDark from "/src/assets/copyLinkDark.svg"
import CopyLinkIconLight from "/src/assets/copyLinkLight.svg"
import FacebookShareIconDark from "/src/assets/facebookShareDark.svg"
import FacebookShareIconLight from "/src/assets/facebookShareLight.svg"
import TwitterShareIconDark from "/src/assets/twitterShareDark.svg"
import TwitterShareIconLight from "/src/assets/twitterShareLight.svg"
import ThemeContext from "../utils/ThemeContext"
import formatDate from "../utils/formatDate"


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

const StyledLogo = styled.h2`
    position: absolute; 
    font-size: 4rem;
    text-shadow: ${({ theme }) => theme.isDarkMode ? "1px 1px 5px rgba(0, 0, 0,  0.5)" : "1px 1px 5px rgba(255, 255, 255,  0.5)"};
    top: -10.5vh;
    left: -1.6vh;
`

const StyledImg = styled.img`
    max-width: 100%;
    margin: 0;
    border-radius: 5px;
    object-fit: cover;
`

const StyledHeadline = styled.h1`
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

const StyledSubhead = styled.h3`
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
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.isDarkMode ? "#353535" : "#cacaca"};
    margin-right: 1rem;
    border: none;
    &:hover {
        background-color: ${({ theme }) => theme.isDarkMode ? "#5200FF" : "#9CE00C"};
      }
    a {
        width: 2rem;
        height: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }
`

const StyledShareImgIcon = styled.img`
      width: 2rem;
      height: 2rem;
`

const StyledArticleBody = styled.p`
    font-family: "Quattrocento", serif;
    font-weight: 400;
    font-style: normal;
    font-size: 1.2rem
`

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
    const [isLoading, setIsLoading] = useState(true)
    useEffect(()=>{
        const foundArticle = articlesData.find(articleObj => articleObj.articleUrl === articleUrl);
        setArticle(foundArticle ? foundArticle : null);
        setIsLoading(false)
    },[])
    const navigate = useNavigate()
    let formattedDate = ""
    if(article){
        formattedDate = formatDate(article.datePublished)
    }
    useEffect(()=>{
        if(!article && !isLoading) {
            navigate('not-found')
        }
    }, [isLoading])

    return (
        <>
            <MetaTags 
                title={article?.header || ""}
                description={article?.subhead || ""}
                imageUrl={article?.img || ""}
                url={window.location.href}
            />
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
                        <StyledShareImgIcon src={isDarkMode ? CopyLinkIconDark : CopyLinkIconLight} alt="copy link icon" />
                    </StyledShareButton>
                    <StyledShareButton theme={{ isDarkMode }}>
                        <a href={`https://www.facebook.com/sharer/sharer.php?u=https://theglitchnews.netlify.app/article/${article?.articleUrl}&quote=${article?.header} | #theGlitch`} target="_blank" rel="noopener noreferrer">
                            <StyledShareImgIcon src={isDarkMode ? FacebookShareIconDark : FacebookShareIconLight} alt="facebook share icon"/>
                        </a>
                    </StyledShareButton>
                    <StyledShareButton theme={{ isDarkMode }}>
                        <a href={`https://twitter.com/share?text=${encodeURIComponent(article?.header + " | #theGlitch #tech")}&url=${encodeURIComponent("https://theglitchnews.netlify.app/article/" + article?.articleUrl)}`} target="_blank" rel="noopener noreferrer">
                            <StyledShareImgIcon src={isDarkMode ? TwitterShareIconDark : TwitterShareIconLight} />
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