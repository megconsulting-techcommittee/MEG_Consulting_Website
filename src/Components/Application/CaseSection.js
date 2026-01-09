import styled  from "styled-components";
import case1 from "../../Images/Application/practice/case.png";

import { BsChevronDoubleRight } from "react-icons/bs";
import { BsChevronDoubleLeft } from "react-icons/bs";
import { useState } from "react";
import { useEffect } from "react";

const SectionContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color:#E0CFF2;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    align-content: flex-start;
    flex-wrap: wrap;
    top: 100vh;
    max-width: 100%;
    transition: transform 1s;
`;

const GhostContainer = styled.div`
    width: 80%;
    height: 70vh;
`

const SlideContainer = styled.div`
    position: absolute;
    left: center;
    background-color:#E0CFF2;
    top: 10vh;
    width: 80%;
    height: 70vh;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    padding-left: 2.5vw;
    padding-right: 2.5vw;
    transition: transform 1s;
`

const ContentContainer = styled.div`
    width: 100%;
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const TitleText = styled.h2`
    font-size: 3vw;
    font-family: futura-pt, sans-serif;
    margin: 0;
    padding: 0;
    font-weight: 700;
    text-align: left;
    color: #1e1e1e;
    word-wrap: break-word;
`

const TextContainer = styled.div`
    width: 100%;
    flex-grow: 2;
`

const ContentText = styled.h3`
    font-size: 2vw;
    font-family: futura-pt, sans-serif;
    margin: 0;
    padding: 0;
    font-weight: 500;
    text-align: left;
    color: #1e1e1e;
    word-wrap: break-word;
`

const BodyText = styled.h3`
    font-size: 1.5vw;
    font-family: futura-pt, sans-serif;
    margin: 0;
    padding: 0;
    font-weight: 400;
    text-align: left;
    color: #1e1e1e;
    word-wrap: break-word;
`

const ContentImage = styled.img`
    height: 55vh;
    width: 30vw;
    object-fit: contain;
    object-position: center;
`

const ChevronContainer = styled.div`
    height: 70vh;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index:10;
    font-size: 5vw;
`

const SmallSpacer = styled.div`
    width:100%;
    height: 10vh;
`

function CaseSection(props){
    
    const [caseID, setCaseID] = useState(0);

    useEffect(()=>{
        if (props.display === 0){
            setTimeout(()=>{
                setCaseID(0);
            },1000)
        }
    },[props.display])

    return(
        <SectionContainer style={{transform: props.display === 3 ? "translateY(-100vh)":"none"}}>
            <ChevronContainer>
                <BsChevronDoubleLeft style={{marginRight:"2.5vw", marginTop: "25vh", color: caseID === 0 ? "#bebebe":"black", cursor: caseID === 0 ? "default":"pointer", pointerEvents: caseID === 0 ? "none":"auto"}}  onClick={()=>{setCaseID(caseID-1)}}/>
            </ChevronContainer>
            <GhostContainer/>
            
            <SlideContainer>
                <ContentContainer>
                <TextContainer>
                        <TitleText>The Case Interview: Business Thinking and Critical Analysis! </TitleText>
                        <SmallSpacer/>
                        <BodyText>
                            The case interview is a way for us to test how well you are able to problem solve, how strong your business senses,
                            and measure other qualities we think are important for our members.
                            <br/><br/><b>We don't expect any past casing experience.</b> We don't even expect past business experience,
                            although we'll show you the ropes in the mock case in this section so you'll be prepared.
                        </BodyText>
                    </TextContainer>
                    <ContentImage src={case1}/>
                </ContentContainer>
            </SlideContainer>

            <SlideContainer style={{transform: caseID >= 1 ? "translateX(0vw)": "translateX(100vw)" }}>
                <ContentContainer>
                <TextContainer>
                        <TitleText>What Even is a Case Interview?</TitleText>
                        <SmallSpacer/>
                        <BodyText>
                            A case interview looks at a hypothetical business problem and asks the interviewee to solve the issue. Common business issues case interviews will look at are profitability, market sizing, mergers and acquisition, and business expansion.
                            <br/><br/> For club recruiting most cases revolve around profitability and market sizing. We'll give a brief overview of how to approach these types of cases and then have a short mock case so you can practice your skills.  
                        </BodyText>
                    </TextContainer>
                    <ContentImage src={case1}/>
                </ContentContainer>
            </SlideContainer>

            <SlideContainer style={{transform: caseID >= 2 ? "translateX(0vw)": "translateX(100vw)" }}>
                <ContentContainer>
                <TextContainer>
                        <TitleText>A Guided Case Interview</TitleText>
                        <SmallSpacer/>
                        <BodyText>
                            To show the structure and key concepts that you need to know for your case interview, we'll go through a mock case found in the 2017 Edition of The Wharton Case Book. If you would like additional case practice, firms like Bain and McKinsey publish mock cases on their websites.
                            <br/><br/>We'll give you the mock case interview section by section, much like an actual interview, but in between sections we'll also show what we would expect from you for each part of the case interview.
                            <br/><br/> The only materials you'll need is a paper and pencil, nothing else. Let's get started!
                        </BodyText>
                    </TextContainer>
                    <ContentImage src={case1}/>
                </ContentContainer>
            </SlideContainer>

            <SlideContainer style={{transform: caseID >= 3 ? "translateX(0vw)": "translateX(100vw)" }}>
                <ContentContainer>
                <TextContainer>
                        <TitleText>Mock Case Intro: Unicloth</TitleText>
                        <SmallSpacer/>
                        <BodyText>
                            A case interview starts with the interviewer giving a little bit of exposition on the business issue. Here is ours:
                            <br/><br/>
                            "Our client, Unicloth, is an Asian clothing retailer attempting to establish a
                            profitable presence in the United States. However, since they arrived five years
                            ago, they have struggled to achieve that goal and have engaged our firm to find
                            out why and to recommend next steps. How can we help?"
                            <br/><br/>
                            That's all you get! <u>How do you approach this case?</u>
                            Write down or imagine what you would do if this prompt was given to you.
                            When you're done, move on to the next slide to see what we would expect from you.
                        </BodyText>
                    </TextContainer>
                    <ContentImage src={case1}/>
                </ContentContainer>
            </SlideContainer>

            <SlideContainer style={{transform: caseID >= 4 ? "translateX(0vw)": "translateX(100vw)" }}>
                <ContentContainer>
                <TextContainer>
                        <TitleText>Details and Questions</TitleText>
                        <SmallSpacer style={{height:"2vmax"}}/>
                        <BodyText>
                            As you can see, you don't get a lot of starting info for a case.
                            The number one thing <b>not</b> to do is jump straight into a solution.
                            Instead, we want you to focus on two types of information: Details and Questions.
                            <br/><br/>
                            When the prompt is being read to you, take notes on all the details that might be important. What's the company name? What industry is the business in? What's the business issue? etc.
                            <br/><br/>
                            After you written down the details of the case, start brainstorming questions that might be important. What information is given that might be useful to your solution? Write some questions that you think are important. When you're ready, go to the next slide to see some questions we thought of.
                        </BodyText>
                    </TextContainer>
                    <ContentImage src={case1}/>
                </ContentContainer>
            </SlideContainer>

            <SlideContainer style={{transform: caseID >= 5 ? "translateX(0vw)": "translateX(100vw)" }}>
                <ContentContainer>
                <TextContainer>
                        <TitleText>Questions and Framework</TitleText>
                        <SmallSpacer style={{height:"2vmax"}}/>
                        <BodyText>
                            As you can see, you don't get a lot of starting info for a case.
                            The number one thing <b>not</b> to do is jump straight into a solution.
                            Instead, we want you to focus on two types of information: Details and Questions.
                            <br/><br/>
                            When the prompt is being read to you, take notes on all the details that might be important. What's the company name? What industry is the business in? What's the business issue? etc.
                            <br/><br/>
                            After you written down the details of the case, start brainstorming questions that might be important. What information is given that might be useful to your solution? Write some questions that you think are important. When you're ready, go to the next slide to see some questions we thought of.
                        </BodyText>
                    </TextContainer>
                    <ContentImage src={case1}/>
                </ContentContainer>
            </SlideContainer>

            <SlideContainer style={{transform: caseID >= 6 ? "translateX(0vw)": "translateX(100vw)" }}>
                <ContentContainer>
                <TextContainer>
                        <TitleText>Details and Questions</TitleText>
                        <SmallSpacer style={{height:"2vmax"}}/>
                        <BodyText>
                            As you can see, you don't get a lot of starting info for a case.
                            The number one thing <b>not</b> to do is jump straight into a solution.
                            Instead, we want you to focus on two types of information: Details and Questions.
                            <br/><br/>
                            When the prompt is being read to you, take notes on all the details that might be important. What's the company name? What industry is the business in? What's the business issue? etc.
                            <br/><br/>
                            After you written down the details of the case, start brainstorming questions that might be important. What information is given that might be useful to your solution? Write some questions that you think are important. When you're ready, go to the next slide to see some questions we thought of.
                        </BodyText>
                    </TextContainer>
                    <ContentImage src={case1}/>
                </ContentContainer>
            </SlideContainer>

            <SlideContainer style={{transform: caseID >= 7 ? "translateX(0vw)": "translateX(100vw)" }}>
                <ContentContainer>
                <TextContainer>
                        <TitleText>Details and Questions</TitleText>
                        <SmallSpacer style={{height:"2vmax"}}/>
                        <BodyText>
                            As you can see, you don't get a lot of starting info for a case.
                            The number one thing <b>not</b> to do is jump straight into a solution.
                            Instead, we want you to focus on two types of information: Details and Questions.
                            <br/><br/>
                            When the prompt is being read to you, take notes on all the details that might be important. What's the company name? What industry is the business in? What's the business issue? etc.
                            <br/><br/>
                            After you written down the details of the case, start brainstorming questions that might be important. What information is given that might be useful to your solution? Write some questions that you think are important. When you're ready, go to the next slide to see some questions we thought of.
                        </BodyText>
                    </TextContainer>
                    <ContentImage src={case1}/>
                </ContentContainer>
            </SlideContainer>

            <ChevronContainer>
                <BsChevronDoubleRight style={{marginLeft:"2.5vw", marginTop: "25vh", color: caseID === 6 ? "grey":"black",  cursor: caseID === 6 ? "default":"pointer", pointerEvents: caseID === 6 ? "none":"auto"}} onClick={()=>{setCaseID(caseID+1)}}/>
            </ChevronContainer>
            <BodyText style={{position:"absolute",bottom: "12.5vh"}}>{caseID+1}/7</BodyText>
        </SectionContainer>
    )
}

export default CaseSection;