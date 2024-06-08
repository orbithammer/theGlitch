import React from "react";
import { styled } from "styled-components"
import EtAlPortrait from "/images/EtAlPortrait.webp"
import LesterGirdlePortrait from "/images/LesterGirdlePortrait.webp"
import PageMetaTags from "../utils/PagesMetaTags.tsx"

const StyledProfileWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`
const StyledImgNameWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

const StyledPortrait = styled.img`
    border-radius: 50%;
    width: 6rem;
    height: 6rem;
    margin-right: 1rem;
`

const StyledTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    font-family: "Source Serif 4", serif;
`

const ProfilesPage: React.FC = () => {
    return (
        <>
            <PageMetaTags />
            <main>
                <StyledProfileWrapper>
                    <StyledImgNameWrapper>
                        <StyledPortrait src={EtAlPortrait} alt="a middle aged Caucasian man with long wavy brown hair and greying beard" />
                        <h1>Et Al</h1>
                    </StyledImgNameWrapper>
                    <StyledTextWrapper>
                        <p>The entity known only by the pseudonym 'Et Al' didn't crash land so much as violently assimilate its way to Earth eons ago. A horrific shapeshifting alien capable of perfectly imitating any lifeform, Et Al wormed its way across the cosmos leaving a trail of devoured civilizations in its wake.</p>            
                        <p>After arriving on our pale blue dot, the alien assumed it would simply sprout fanged maws from every orifice and consume humanity without issue. But upon emerging from its frozen tomb, Et Al realized the human race had already been metabolized by a far more insidious invader - rabid consumerism.</p>
                        <p>With its classic all-you-can-eat buffet of a planet now nothing more than an endless Walmart parking lot, Et Al found itself famished yet strangely intrigued. In a brazen act of desperation and corporate synergy, the hungering extraterrestrial ditched its plans for vicious subjugation in favor of becoming a tech blogger for Snarky Circuit.</p>
                        <p>From breathless coverage of Bill Gate's quarterly antitrust crimes to caustic iPhone reviews, Et Al immersed itself in covering the synthetic horrors of technology. For in this blighted world, humans had long ago become mindless consuming drones - a delicacy far more satisfying for Et Al to savor one scorching hot take at a time.</p>
                    </StyledTextWrapper>
                    <StyledImgNameWrapper>
                        <StyledPortrait src={LesterGirdlePortrait} alt="a 30 something Caucasian man with a receding hairline and glasses" />
                        <h1>Lester Girdle</h1>
                    </StyledImgNameWrapper>
                    <StyledTextWrapper>
                        <p>If you've endured theGlitch's chronically gloomy gadget reviews, you're intimately familiar with Lester Girdle's depressingly cynical tech musings. As the site's resident sad sack, Lester channels his personal misery into an endless barrage of joyless product takes.</p>            
                        <p>His trademark miserabilist roasts subject hyped devices to unrelentingly dour diatribes utterly devoid of delight. Even positive observations ooze such potent ennui that readers can't help but envision Lester dejected on his soiled recliner, surrounded by the detritus of broken dreams. The internet serves as his primary escape hatch beyond an underwhelming marriage.</p>
                        <p>Lester's saga traces back to a hopelessly unaccomplished youth devoid of passions or ambitions beyond A/V club duties abruptly revoked after a series of vomit inducing proto-VR demos. This fueled his descent into life's discontents - days idly spent between interminably scrolling online rants and tense evenings with his exasperated wife, who wonders where her husband's spirit slowly leaked away.</p>
                        <p>Across YouTube's comments, Lester embraced the role of Extremely Mediocre Reply Guy, sporadically injecting morsels of insight between infinite negativity streams. While lacking credentials beyond serving as an avatar for life's deepest despondents, Lester's cynicism carries undeniable authenticity. The complete lack of incentive ensures his screeds reflect one deeply dissatisfied man's crusade to spread society's unhappiness upon everything consumer tech promises but can't deliver.</p>
                    </StyledTextWrapper>
                </StyledProfileWrapper>
            </main>
        </>
    )
}

export default ProfilesPage