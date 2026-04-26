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
  flex-wrap: wrap;
  top: -1px;
  max-width: 100%;
`;

const TextContainer = styled.div`
  margin-left: 20vw;
  margin-right: 20vw;
  align-items: center;
  justify-content: center;
  width: 60%;
`;

const TitleText = styled.h1`
  display: inline-block;
  font-size: 7.5vmin;
  font-family: futura-pt, sans-serif;
  margin: 0;
  padding: 0;
  font-weight: 900;
  text-align: left;
  color: #1e1e1e;
`;

const BodyText = styled.p`
  display: inline-block;
  font-size: 3.2vmin;
  font-family: futura-pt, Helvetica, sans-serif;
  margin: 0;
  padding: 0;
  color: #1e1e1e;
  line-height: 1.6;
`;

const Spacer = styled.div`
  width: 100%;
  height: 50vh;
`;

const SmallSpacer = styled.div`
  width: 100%;
  height: 5vh;
`;

function JoinSection() {
  return (
    <SectionContainer>
      <NextSection ScrollNext={151} ScrollAlready={1700} color="black" />
      <TextContainer>
        <TitleText>Come Join Us!</TitleText>
        <SmallSpacer />
        <BodyText>
          We want to take your business to the next level! We are always looking for new clients to work with, so if you would like to collaborate with us on a future project please reach out to meg.eboard@umich.edu.
        </BodyText>
      </TextContainer>
      <Spacer />
    </SectionContainer>
  );
}

export default JoinSection;
