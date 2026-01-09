import { BsArrowsAngleExpand, BsBarChartSteps, BsCash, BsGear, BsMegaphone, BsPieChart } from "react-icons/bs";
import styled from "styled-components";

const SectionContainer = styled.div`
  width: 100vw;
  min-height:100vh;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  align-content: center;
  flex-wrap: wrap;
  max-width: 100%;
  flex-direction: column;
  overflow: hidden;
`;

const MenuContainer = styled.div`
    width:90%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    border: solid 2px;
    margin-top:15vh;
    border-radius: 20px;
`

const CenteringContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`

const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
    width: 250px;
    flex-direction: column;
    margin: 5%;
    margin-top:25px;
    align-self: center;
`

const IconContainer = styled.div`
    width: 75px;
    height: 75px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid 2px;
    font-size: 40px;
`

const TitleText = styled.h2`
  font-size: 3vmax;
  font-family: futura-pt, sans-serif;
  color: black;
  font-weight: 700;
  margin:0;
  padding:1%;
  transform: translateY(-50%);
  background-color: white;
  margin-left: 5%;
`

const CardHeader = styled.h3`
  font-size: 24pt;
  font-family: futura-pt, sans-serif;
  color: black;
  font-weight: 700;
  text-align: center;
  margin-top: 5%;
  margin-bottom: 0;
  margin-left: 10%;
  margin-right: 10%;
`

const CardBody = styled.p`
  font-size: 14pt;
  font-family: futura-pt, sans-serif;
  color: black;
  font-weight: 400;
  text-align: center;
  margin-top: 5%;
  margin-left: 10%;
  margin-right: 10%;
`

const NewLine = styled.div`
    width:100%;
`

function WhatWeDoSection (){
    return(
        <SectionContainer>
            <MenuContainer>
                <TitleText>What We Do</TitleText>
                <NewLine/>
                <CenteringContainer>
                <CardContainer>
                    <IconContainer>
                        <BsMegaphone/>
                    </IconContainer>
                    <CardHeader>Marketing</CardHeader>
                    <CardBody>
                        We specialize in multichannel marketing, creating far-reaching wholistic solutions.
                    </CardBody>
                </CardContainer>

                <CardContainer>
                    <IconContainer>
                        <BsPieChart/>
                    </IconContainer>
                    <CardHeader>Data Analysis</CardHeader>
                    <CardBody>
                        From acquisition to analysis to solution, we have your data needs covered.
                    </CardBody>
                </CardContainer>    

                <CardContainer>
                    <IconContainer>
                        <BsBarChartSteps/>
                    </IconContainer>
                    <CardHeader>Supply Chain</CardHeader>
                    <CardBody>
                        We diagnose pain points in your supply chain and provide solutions to increase efficiency.
                    </CardBody>
                </CardContainer> 
                </CenteringContainer>
            </MenuContainer>

            <MenuContainer style={{marginBottom: "10vh"}}>
                <TitleText>Our Advanced Services</TitleText>
                <NewLine/>
                <CenteringContainer>
                    <CardContainer>
                        <IconContainer>
                            <BsGear/>
                        </IconContainer>
                        <CardHeader>Algorithms</CardHeader>
                        <CardBody>
                            We offer algorithmic data collection as well as basic machine learning analysis.
                        </CardBody>
                    </CardContainer>

                    <CardContainer>
                        <IconContainer>
                            <BsArrowsAngleExpand/>
                        </IconContainer>
                        <CardHeader>Market Entry</CardHeader>
                        <CardBody>
                            Our team can help with market research, customer profiling, plan of action, and more.
                        </CardBody>
                    </CardContainer>
                    
                    <CardContainer>
                        <IconContainer>
                            <BsCash/>
                        </IconContainer>
                        <CardHeader>Financial Analysis</CardHeader>
                        <CardBody>
                            From insurance portfolios to financial software, we've created solutions that impact the bottom line.
                        </CardBody>
                    </CardContainer>
                </CenteringContainer>
            </MenuContainer>
        </SectionContainer>
    )
}

export default WhatWeDoSection