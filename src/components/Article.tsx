import React, {useEffect, useState} from "react"
import { useParams } from "react-router-dom"
import { articlesData } from "../data/articles"
import { styled } from "styled-components"

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
    width: 100vw;
`

const StyledLogo = styled.h1`
    position: absolute;
    top: -6.5%; //adjust for overlay
    left: 29%; //adjust for overlay
    transform: translate(-50%, -50%);
    font-size: 4rem;
    color: white;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
`

const StyledHeroImg = styled.img`
    max-width: calc(100vw - 60px);
    margin: 1rem 0 0 1rem;
    border-radius: 5px;
    object-fit: cover;
`

const StyledHeadline = styled.p`
    transform: translateY(-10%);
    font-family: "Fjalla One", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 3rem;
    letter-spacing: -0.05em;
    color: white;
    max-width: 100%;
    word-spacing: -0.05em;
    line-height: 3.1rem;
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

const StyledArticleBody = styled.p`
    font-family: "Quattrocento", serif;
    font-weight: 400;
    font-style: normal;
    font-size: 1.2rem
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

const Article: React.FC = () => {
    const {articleUrl} = useParams() 
    console.log("articleUrl", articleUrl)
    const [article, setArticle] = useState<articlesData | null>(null)
    useEffect(()=>{
        const foundArticle = articlesData.find(articleObj => articleObj.articleUrl === articleUrl);
        setArticle(foundArticle ? foundArticle : null);
    },[])
    let formattedDate = ""
    if(article){
        formattedDate = formatDate(article.datePublished)
    }

    console.log(article)
    return (
        <>
            <main>
                <StyledHeroWrapper>
                    <StyledLogo>theGlitch</StyledLogo>
                    <StyledHeroImg src={article?.img} alt={article?.alt}/>
                </StyledHeroWrapper>
                <StyledHeadline>{article?.header}<br/></StyledHeadline>
                <StyledSubhead>{article?.subhead}</StyledSubhead>
                <StyledArticleInfo>
                    <StyledAuthor>{article?.author}</StyledAuthor>
                    {formattedDate}
                </StyledArticleInfo>
                <article>
                    {article?.articleBody.map((paragraph, index)=><StyledArticleBody key={index}>{paragraph}</StyledArticleBody>)}
                </article>
            </main>
        </>
    )
}

export default Article