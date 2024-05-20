import React, {useEffect, useState} from "react"
import { useParams } from "react-router-dom"
import { articlesData } from "../data/articles"
import { styled } from "styled-components"
import CopyLinkIconDark from "/src/assets/copyLinkDark.svg"
import FacebookShareIconDark from "/src/assets/facebookShare.svg"
import TwitterShareIconDark from "/src/assets/twitterShare.svg"

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
    color: white;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    top: -35%
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
    color: white;
    transform: tranlateY(-20%);
    max-width: 90%;
    word-spacing: -0.05em;
    line-height: 3.4rem;
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

const StyledAuthor = styled.span`
    color: #9CE00C;
    margin-right: 1rem;
`

const StyledButtonWrapper = styled.div`
    display: flex;
`

const StyledShareButton = styled.button`
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background-color: #353535;
    margin-right: 1rem;
`

const StyledArticleBody = styled.p`
    font-family: "Quattrocento", serif;
    font-weight: 400;
    font-style: normal;
    font-size: 1.2rem
`

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
                    <StyledLogo>theGlitch</StyledLogo>
                    <StyledImg src={article?.img} alt={article?.alt}/>
                </StyledHeroWrapper>
                <StyledHeadline>{article?.header}<br/></StyledHeadline>
                <StyledSubhead>{article?.subhead}</StyledSubhead>
                <StyledArticleInfo>
                    <StyledAuthor>{article?.author}</StyledAuthor>
                    {formattedDate}
                </StyledArticleInfo>
                <StyledButtonWrapper>
                    <StyledShareButton onClick={copyLink}>
                        <img src={CopyLinkIconDark} />
                    </StyledShareButton>
                    <StyledShareButton>
                        <a href={`https://www.facebook.com/sharer/sharer.php?u=${article?.articleUrl}`} target="_blank" rel="noopener noreferrer">
                            <img src={FacebookShareIconDark} />
                        </a>
                    </StyledShareButton>
                    <StyledShareButton>
                        <a href={`https://twitter.com/share?text=${article?.header}%20${article?.articleUrl}`} target="_blank" rel="noopener noreferrer">
                            <img src={TwitterShareIconDark} />
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