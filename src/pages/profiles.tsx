import React from "react";
import { styled } from "styled-components"
import EtAlPortrait from "/src/images/EtAlPortrait.webp"

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
`
const ProfilesPage: React.FC = () => {
    return (
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
            </StyledProfileWrapper>
        </main>
    )
}

export default ProfilesPage