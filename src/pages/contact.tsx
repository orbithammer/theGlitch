import React from 'react';
import styled from 'styled-components';

const StyledTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    font-family: "Source Serif 4", serif;
`

const ContactPage: React.FC = () => {
  return (
    <>
      <main>
      <h1>Send Us Your Scathing Feedback (That We'll Probably Ignore)</h1>
        <StyledTextWrapper>
            <p>Oh, you've stumbled upon some egregious error or blatant bias in our reporting? Maybe our writers mangled some facts worse than a toddler juggling chainsaws? Or perhaps our takes were so blazing hot they singed your eyebrows clean off?</p>
            <p>Well, by all means, vent those spleen-ful frustrations directly at us! We absolutely promise to pretend to care while sipping martinis crafted from your indignant tears.</p>
            <p>Copy our email with the button below to rattle off your scalding rebuke, vicious snark, or painfully obvious correction. Just know that your missive will likely get tossed into the trash bin faster than a Y Combinator founder's work-life balance.</p>
            <p>But hey, convincing ourselves we're receptive to criticism is half the fun of running a tech rag. So fire away, you hapless reader, you!</p>
        </StyledTextWrapper>
        <form name="contact" data-netlify>
            <p>
                <label>Name <input type="text" name="name" /></label>
            </p>
            <p>
                <label>Email <input type="email" name="email" /></label>
            </p>
            <p>
                <button type="submit">Send</button>
            </p>
        </form>
      </main>
    </>
  );
};

export default ContactPage;