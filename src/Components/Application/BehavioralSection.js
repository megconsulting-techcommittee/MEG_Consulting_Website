import styled  from "styled-components";
import story from "../../Images/Application/practice/story.png"
import website from "../../Images/Application/practice/website.png"
import practice from "../../Images/Application/practice/practice.png"

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

function BehavioralSection(props){
    
    const [behavioralID, setBehavioralID] = useState(0);

    useEffect(()=>{
        if (props.display === 0){
            setTimeout(()=>{
                setBehavioralID(0);
            },1000)
        }
    },[props.display])

    return(
        <SectionContainer style={{transform: props.display === 2 ? "translateY(-100vh)":"none"}}>
            <ChevronContainer>
                <BsChevronDoubleLeft style={{marginRight:"2.5vw", marginTop: "25vh", color: behavioralID === 0 ? "#bebebe":"black", cursor: behavioralID === 0 ? "default":"pointer", pointerEvents: behavioralID === 0 ? "none":"auto"}}  onClick={()=>{setBehavioralID(behavioralID-1)}}/>
            </ChevronContainer>
            <GhostContainer/>

            <SlideContainer>
                <ContentContainer>
                    <TextContainer>
                        <TitleText>The Behavioral Interview: Your Story </TitleText>
                        <SmallSpacer/>
                        <ContentText>
                            The behavioral interview is all about learning more about you as a person and as a peer. We use these interviews to predict your potential future performance.
                            <br/><br/>Most of the interview will consist of you telling us stories where you showed a soft skill that we consider important as a MEG member.
                        </ContentText>
                    </TextContainer>
                    <ContentImage src={story}/>
                </ContentContainer>
            </SlideContainer>

            <SlideContainer style={{transform: behavioralID >= 1 ? "translateX(0vw)": "translateX(100vw)" }}>
                <TitleText>Resources to help you prepare </TitleText>
                <ContentContainer>
                    <TextContainer>
                        <SmallSpacer/>
                        <BodyText>
                            As behavioral interviews are extremely common in the professional world there are a lot of online resources to help you prepare and I've listed some below.
                            <ul>
                                <li><a href="https://www.themuse.com/advice/behavioral-interview-questions-answers-examples" target="_blank">A list of example questions</a> so you can practice. We typically select a handful of questions from databases like this.</li>
                                <li><a href="https://joinhandshake.com/blog/students/interview-pro-tips-how-to-nail-a-behavioral-interview/" target="_blank">Some helpful tips and frameworks</a>. The STAR model mentioned in this article is pretty ubiquitous and serves as a solid foundation</li>
                                <li><a href="https://www.youtube.com/watch?v=zoGZQatkqKg" target="_blank">A video on the STAR Method</a>. See the STAR Method used with practice examples as well as some other helpful tips</li>
                            </ul>
                        </BodyText>
                    </TextContainer>
                    <ContentImage src={website}/>
                </ContentContainer>
            </SlideContainer>

            <SlideContainer style={{transform: behavioralID >= 2 ? "translateX(0vw)": "translateX(100vw)" }}>
            <TitleText>Other Tips for Success</TitleText>
                <ContentContainer>
                    <TextContainer>
                        <BodyText>
                            As behavioral interviews are extremely common in the professional world there are a lot of online resources to help you prepare and I've listed some below.
                            <ul>
                                <li>Collect a few of your own experiences that you think would work well with behavioral questions and practice telling these stories in a structured manner (like the STAR method).</li>
                                <li>Be calm even with questions that you haven't prepared. It is definitely possible (and very encouraged!) to take a prepared story and change it enough to match the unexpected question.</li>
                                <li>Be personable and nice. Behavioral interviews are more than measurements of your soft skills, we also want to see if you fit well within our club.</li>
                            </ul>
                        </BodyText>
                    </TextContainer>
                    <ContentImage src={practice}/>
                </ContentContainer>
            </SlideContainer>

            <ChevronContainer>
                <BsChevronDoubleRight style={{marginLeft:"2.5vw", marginTop: "25vh", color: behavioralID === 2 ? "grey":"black",  cursor: behavioralID === 2 ? "default":"pointer", pointerEvents: behavioralID === 2 ? "none":"auto"}} onClick={()=>{setBehavioralID(behavioralID+1)}}/>
            </ChevronContainer>
            <BodyText style={{position:"absolute",bottom: "18vh"}}>{behavioralID+1}/3</BodyText>
        </SectionContainer>
    )
}

export default BehavioralSection;