import styled from "styled-components";
import NextSection from "../General/NextSection";

const SectionContainer = styled.div`
  width: 100vw;
  height: 150vh;
  background-color: #CBAFE9 ;
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

const YouContainer = styled.div`
    position: absolute;
    bottom:0vh;
    right:0;
    font-size:16vmin;
    font-family: futura-pt, sans-serif;
    font-weight: 700;
    z-index:1;
    margin:0;
    line-height: 12vmin;    
    background-color: #CBAFE9;
`

const TextContainer = styled.div`
  margin-left: 20vw;
  margin-right: 20vw;
  color: #1e1e1e;
`;

const BodyContainer = styled.div`
  height: 40vh;
  overflow: hidden;
  background-color:transparent;
  position: relative;
`

const TitleText = styled.h1`
  display: inline-block;
  font-size: 8vmin;
  font-family: futura-pt, sans-serif;
  margin: 0;
  padding: 0;
  font-weight: 700;
  text-align: left;
  -webkit-text-stroke: 0.03em #1e1e1e;
  color: #1e1e1e;
`;

const BodyText = styled.p`
  display: inline-block;
  font-size: 3.49vmin;
  font-family: futura-pt, Helvetica, sans-serif;
  margin: 0;
  padding: 0;
  color: white;
  text-shadow: 0 0 1px gray, 0 0 1px gray, 0 0 1px gray, 0 0 1px gray;
  line-height: 2;
  font-weight: 700;
  text-align:justify;
`;

const Spacer = styled.div`
  width: 100%;
  height: 50vh;
`;

const SmallSpacer = styled.div`
  width: 100%;
  height: 2vh;
`;

function LookingSection() {
    return (
      <SectionContainer>
        <NextSection ScrollNext = {150} ScrollAlready = {150}/>
        <TextContainer>
          <TitleText>Who We're Looking For:</TitleText>
          <BodyContainer>
          <BodyText>Business Students, Witty Friends, Stylish Designers, Passionate Learners, Cuisine Aficionados, Healthcare Gurus, Fervent Environmentalists, Real Estate Experts, Stock Specialists, Coffee Chat Partners, Supply Chain Savants, Helpful Mentors, Revolutionary Artists, Euchre Partners, Pioneering Engineers, Karaoke Companions, Math Prodigies, Curious Scientists, Clever Comedians, Pioneering Creatives, Innovative Thinkers, Problem Solvers, Life-Long Friends, Cooperative Teammates, Business Students, Confident Speakers, Passionate Learners, Healthcare Gurus, Flamboyant Actors, Fervent Environmentalists, Real Estate Experts, Stock Specialists, Coffee Chat Partners, Supply Chain Savants, Helpful Mentors, Revolutionary Artists, Euchre Partners, Pioneering Engineers, Karaoke Companions, Math Prodigies, Curious Scientists, Clever Comedians, Pioneering Creatives, Innovative Thinkers, Problem Solvers, Life-Long Friends </BodyText>
            <YouContainer>YOU!</YouContainer>
          </BodyContainer>
          <SmallSpacer/>
          <a href= "https://docs.google.com/forms/d/e/1FAIpQLSeDCVz2eX7IBlwMu54RyoAOS5ZAV6tqY1cdAYXtCnw6Cy7kkw/viewform" target="_blank">
            <TitleText style={{textAlign: "right", width: "100%", textDecoration: "underline"}}>Apply Now</TitleText>
          </a>
        </TextContainer>
        <Spacer />
      </SectionContainer>
    );
  }
  
  export default LookingSection;
