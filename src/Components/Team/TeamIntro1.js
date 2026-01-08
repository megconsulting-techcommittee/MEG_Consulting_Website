import styled from "styled-components";
import NextSection from "../General/NextSection";

import jump from "../../Images/Team/jump.png";

const SectionContainer = styled.div`
  width: 100vw;
  height: 150vh;
  background-image: url(${jump});
  background-repeat: no-repeat;
  background-size: auto 60vh;
  background-position: center 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  position: sticky;
  top: -1px;
  max-width: 100%;
  overflow: hidden;
`;

const TextContainer = styled.div`
  background-color: transparent;
  width: fit-content;
  max-width: 80vw;
  margin: 0;
  padding: 0;
  overflow: hidden;
  text-align: center;
`;

const TitleText = styled.h1`
  display: inline-block;
  font-size: 8vmin;
  font-family: futura-pt, sans-serif;
  margin: 0;
  padding: 0;
  font-weight: 900;
  color: #1e1e1e;
`;

const Spacer = styled.div`
  height: 10vh;
`;

function TeamIntro1() {
  return (
    <SectionContainer>
      <NextSection ScrollNext={151} ScrollAlready={320} color="black" />
      <TextContainer>
        <Spacer />
        <TitleText>LIKE REALLY REALLY EXCITED</TitleText>
      </TextContainer>
    </SectionContainer>
  );
}

export default TeamIntro1;
