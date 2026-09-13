import React from "react";
import styled from "styled-components";
import NextSection from "../General/NextSection";

const SectionContainer = styled.div`
  width: 100vw;
  height: 150vh;
  background-color: #D0D1F2;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  align-content: center;
  position: sticky;
  top: -1px;
  max-width: 100%;
  padding: 80px 0;
  box-sizing: border-box;
`;

const TextContainer = styled.div`
  margin-left: 20vw;
  margin-right: 20vw;
  width: 100%;
  color: #1e1e1e;
`;

const TitleText = styled.h1`
  display: block;
  font-size: 8vmin;
  font-family: futura-pt, sans-serif;
  margin: 0 0 4vh 0;
  padding: 0;
  font-weight: 700;
  text-align: left;
  -webkit-text-stroke: 0.03em #1e1e1e;
  color: #1e1e1e;
`;

const FAQListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4vh;
`;

const FAQItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const QuestionText = styled.span`
  font-size: 3.5vmin;
  font-family: futura-pt, Helvetica, sans-serif;
  font-style: italic;
  font-weight: 700;
  color: #1e1e1e;
  margin-bottom: 0.5vh;
`;

const AnswerText = styled.span`
  font-size: 3.2vmin;
  font-family: futura-pt, Helvetica, sans-serif;
  font-weight: 600;
  color: #ffffff;
  text-shadow: 0 0 1px gray, 0 0 1px gray, 0 0 1px gray, 0 0 1px gray;
  line-height: 1.6;
`;

const Spacer = styled.div`
  width: 100%;
  height: 50vh;
`;

function FAQSection() {
  return (
    <SectionContainer>
      <NextSection ScrollNext={150} ScrollAlready={150} />
      <TextContainer>
        <TitleText>FAQ's:</TitleText>
        <FAQListContainer>
          <FAQItem>
            <QuestionText>Q: I'm not in Ross, can I still join?</QuestionText>
            <AnswerText>A: Yes, we accept all majors!</AnswerText>
          </FAQItem>

          <FAQItem>
            <QuestionText>Q: Any advice to help me get in?</QuestionText>
            <AnswerText>A: Scroll down for all of MEG's tips and tricks!</AnswerText>
          </FAQItem>

          <FAQItem>
            <QuestionText>Q: How do I make the most of recruiting events?</QuestionText>
            <AnswerText>A: Talk to us! Be very present, and it will show when you apply.</AnswerText>
          </FAQItem>
        </FAQListContainer>
      </TextContainer>
      <Spacer />
    </SectionContainer>
  );
}

export default FAQSection;