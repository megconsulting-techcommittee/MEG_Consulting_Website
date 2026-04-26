import React, { useState } from "react";
import styled from "styled-components";

const FAQS = [
    {
        q: "Does MEG charge for its services?",
        a: "MEG is not a pro-bono club, but if allocating payment proves not to be feasible, we are always happy to be paid in experience.",
    },
    {
        q: "Do you sign NDAs for projects?",
        a: "Yes! All of MEG's engagements involve contractual NDAs in accordance with the client's stipulations. We have an internal NDA template, but are happy to sign any external documentation that may be required.",
    },
    {
        q: "Does MEG have other majors?",
        a: "Yes! MEG is comprised of about 60% business majors, with the other 40% being primarily engineers or within LSA.",
    },
];

const SectionContainer = styled.div`
  width: 100vw;
  height: 125vh;
  background-color: #e0cff2;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 14vh clamp(24px, 5vw, 96px);
  box-sizing: border-box;
  position: sticky;
  top: -1px;
  overflow-y: auto;
`;

const Inner = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
`;

const SectionLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: futura-pt, sans-serif;
  font-size: 14px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #1e1e1e;
  opacity: 0.7;
  margin-bottom: 24px;
  font-weight: 500;

  span.rule {
    width: 24px;
    height: 1px;
    background: #1e1e1e;
    opacity: 0.4;
  }
`;

const TitleText = styled.h2`
  font-family: futura-pt, sans-serif;
  font-size: clamp(36px, 7vmin, 80px);
  font-weight: 900;
  line-height: 0.88;
  margin: 0 0 56px 0;
  color: #1e1e1e;
  text-transform: uppercase;
`;

const Item = styled.div`
  border-top: 1px solid #1e1e1e;

  &:last-of-type {
    border-bottom: 1px solid #1e1e1e;
  }
`;

const QuestionButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 28px 0;
  background: transparent;
  border: none;
  cursor: pointer;
  text-align: left;
`;

const Question = styled.h3`
  font-family: futura-pt, sans-serif;
  font-size: clamp(20px, 3vmin, 30px);
  font-weight: 700;
  margin: 0;
  color: #1e1e1e;
  line-height: 1.2;
`;

const Arrow = styled.span`
  display: inline-block;
  width: 12px;
  height: 12px;
  border-bottom: 2.5px solid #1e1e1e;
  border-right: 2.5px solid #1e1e1e;
  transform: ${({ open }) =>
        open ? "rotate(225deg) translate(-2px,-2px)" : "rotate(45deg)"};
  transition: transform 0.3s;
  margin-left: 24px;
  flex-shrink: 0;
`;

const Answer = styled.div`
  max-height: ${({ open }) => (open ? "300px" : "0")};
  overflow: hidden;
  transition: max-height 0.4s ease;
`;

const AnswerText = styled.p`
  font-family: futura-pt, Helvetica, sans-serif;
  font-size: clamp(18px, 2vmin, 18px);
  line-height: 1.65;
  color: #1e1e1e;
  margin: 0 0 28px;
  max-width: 64ch;
`;

function FAQSection() {
    const [openIndex, setOpenIndex] = useState(-1);

    return (
        <SectionContainer>
            <Inner>
                <SectionLabel>
                    <span>06</span>
                    <span className="rule" />
                    <span>FAQ</span>
                </SectionLabel>
                <TitleText>
                    Questions clients<br />ask us first.
                </TitleText>
                <div>
                    {FAQS.map((f, i) => {
                        const open = openIndex === i;
                        return (
                            <Item key={i}>
                                <QuestionButton
                                    onClick={() => setOpenIndex(open ? -1 : i)}
                                >
                                    <Question>{f.q}</Question>
                                    <Arrow open={open} />
                                </QuestionButton>
                                <Answer open={open}>
                                    <AnswerText>{f.a}</AnswerText>
                                </Answer>
                            </Item>
                        );
                    })}
                </div>
            </Inner>
        </SectionContainer>
    );
}

export default FAQSection;