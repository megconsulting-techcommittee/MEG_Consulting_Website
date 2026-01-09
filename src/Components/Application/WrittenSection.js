import styled  from "styled-components";
import home1 from "../../Images/Application/practice/home1.png"
import fit from "../../Images/Application/practice/fit.png"
import you from "../../Images/Application/practice/you.png"
import written from "../../Images/Application/practice/written.png"
import strong from "../../Images/Application/practice/strong.png"
import unique from "../../Images/Application/practice/unique.png"
import personal from "../../Images/Application/practice/personal.png";
import academic from "../../Images/Application/practice/academic.png";
import advice from "../../Images/Application/practice/advice.png"
import go from "../../Images/Application/practice/go.png"
import self from "../../Images/Application/practice/self.png"
import why from "../../Images/Application/practice/why.png"
import excited from "../../Images/Application/practice/excited.png"

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

function WrittenSection(props){

    const images1 = [home1, written , you, strong, unique]
    const images2 = [fit, why, excited]
    
    const [hoverWritten, setHoverWritten] = useState(0);
    const [writtenID, setWrittenID] = useState(0);

    useEffect(()=>{
        if (props.display === 0){
            setTimeout(()=>{
                setWrittenID(0);
            },1000)
        }
    },[props.display])

    return(
        <SectionContainer style={{transform: props.display === 1 ? "translateY(-100vh)":"none"}}>
            <ChevronContainer>
                <BsChevronDoubleLeft style={{marginRight:"2.5vw", marginTop: "25vh", color: writtenID === 0 ? "#bebebe":"black", cursor: writtenID === 0 ? "default":"pointer", pointerEvents: writtenID === 0 ? "none":"auto"}}  onClick={()=>{setWrittenID(writtenID-1)}}/>
            </ChevronContainer>
            <GhostContainer/>

            <SlideContainer>
                <ContentContainer>
                <TextContainer>
                        <TitleText>The Written Application: It's All About You! </TitleText>
                        <SmallSpacer/>
                        <ContentText>
                            The <span onMouseLeave={()=>{setHoverWritten(0)}} onMouseEnter={()=>{setHoverWritten(1)}} style={{fontFamily: "hachura, sansSerif", fontWeight: 400, fontStyle: "normal", textDecoration: "underline", textDecorationColor:"gray", cursor: "default"}}>written application</span> is your first opportunity to <i>really</i> let us know more about <b style={{cursor: "default"}} onMouseLeave={()=>{setHoverWritten(0)}} onMouseEnter={()=>{setHoverWritten(2)}}><u>you!</u></b>
                            <br/><br/> Let us know why you should be a member of MEG: What are your <b style={{cursor: "default"}} onMouseLeave={()=>{setHoverWritten(0)}} onMouseEnter={()=>{setHoverWritten(3)}}><u>strengths</u></b> and what makes you <b style={{cursor: "default"}} onMouseLeave={()=>{setHoverWritten(0)}} onMouseEnter={()=>{setHoverWritten(4)}}><u>unique</u></b>! 
                        </ContentText>
                    </TextContainer>
                    <ContentImage src={images1[hoverWritten]}/>
                </ContentContainer>
            </SlideContainer>

            <SlideContainer style={{transform: writtenID >= 1 ? "translateX(0vw)": "translateX(100vw)" }}>
                <ContentContainer>
                    <ContentImage src={images2[hoverWritten]} style={{marginRight:"2.5vw"}}/>
                    <TextContainer>
                        <TitleText>Ok Fine, It's A Bit About Us</TitleText>
                        <SmallSpacer/>
                        <ContentText>
                            We also want to know <b style={{cursor: "default"}} onMouseLeave={()=>{setHoverWritten(0)}} onMouseEnter={()=>{setHoverWritten(1)}}><u>why</u></b>
                            you chose to apply to MEG. We want to make sure you're excited to apply because we're
                            <b style={{cursor: "default"}} onMouseLeave={()=>{setHoverWritten(0)}} onMouseEnter={()=>{setHoverWritten(2)}}><u>excited</u></b> to meet you.
                            <br/><br/> If you're genuinely interested in us, we're going to be genuinely interested in you! 
                        </ContentText>
                    </TextContainer>
                </ContentContainer>
            </SlideContainer>

            <SlideContainer style={{transform: writtenID >= 2 ? "translateX(0vw)": "translateX(100vw)" }}>
                <TitleText>Step by Step: Personal Info </TitleText>
                <ContentContainer>
                    <TextContainer>
                        <BodyText>
                            We ask for a variety of non-academic information about you for a lot of different reasons.
                            We need a headshot and your name to simply identify you &#40;Sometimes we just need to put a name to a familiar face!&#41;.
                            We ask for your gender and pronouns so we can measure diversity and refer to our applicants how they wish to be.
                            We ask for your email and phone number in order to get in touch in the future.
                            <br/><br/> Our only advice for this part is to make sure you don't make any silly mistakes! It happens to the best of us, but double check everything before submitting.
                        </BodyText>
                    </TextContainer>
                    <ContentImage src={personal} style={{marginRight:"2.5vw"}}/>
                </ContentContainer>
            </SlideContainer>

            <SlideContainer style={{transform: writtenID >= 3 ? "translateX(0vw)": "translateX(100vw)" }}>
                <TitleText>Step by Step: Academic Info </TitleText>
                <ContentContainer>
                    <TextContainer>
                        <BodyText>
                            We also ask for academic information about you including year of graduation, major, GPA, and resume.
                            Don't be worried if you're resume isn't bursting at the seams with experience or if your GPA isn't a 5.6.
                            We understand that most of you guys are underclassmen and we don't expect any prior experience or perfect grades.
                            <b> These metrics are typically the last things we look at, if at all.</b>
                            <br/><br/> Just make sure your resume is presentable and if you need help, you have access to resources such as the CDO or upperclassmen friends!
                        </BodyText>
                    </TextContainer>
                    <ContentImage src={academic} style={{marginRight:"2.5vw"}}/>
                </ContentContainer>
            </SlideContainer>

            <SlideContainer style={{transform: writtenID >= 4 ? "translateX(0vw)": "translateX(100vw)" }}>
                <TitleText>Step by Step: Short Answers </TitleText>
                <ContentContainer>
                    <TextContainer>
                        <BodyText>
                            These short answers are where you can express you're strengths and individuality. These answers are pretty subjective, but I went through previous decision notes and listed below some of the advice that I think might help:
                            <ul>
                                <li>Mention <b>why you want to join MEG</b>. Once again, if you are genuinely interested in us, we will be genuinely interested in you!</li>
                                <li>These are much shorter than college applications with a tighter character/word limit. No need to for a lengthy story or anecdote, we want to see the crux of the story</li>
                                <li><b>Come network with us</b>. Showing you made the effort to get to know one of our members during an event is helpful, especially if the interaction was positive  </li>
                                <li>Brag as much as you want, we want to hear about the amazing things you've done and fantastic skills you've learned. Just don't be arrogant!</li>
                            </ul>
                        </BodyText>
                    </TextContainer>
                    <ContentImage src={advice} style={{marginRight:"2.5vw"}}/>
                </ContentContainer>
            </SlideContainer>

            <SlideContainer style={{transform: writtenID >= 5 ? "translateX(0vw)": "translateX(100vw)" }}>
                <ContentContainer>
                    <TextContainer>
                        <TitleText>Most Importantly, Be Yourself </TitleText>
                        <SmallSpacer/>
                        <ContentText>
                            Be honest with who you want to spend time with, what projects you want to do, and where you think you can really be yourself.<br/>
                            <br/>If those people are our members, if those projects are the work we do, and if that place is MEG, it shows in your application!
                        </ContentText>
                    </TextContainer>
                    <ContentImage src={self} style={{marginRight:"2.5vw"}}/>
                </ContentContainer>
            </SlideContainer>

            <SlideContainer style={{transform: writtenID >= 6 ? "translateX(0vw)": "translateX(100vw)" }}>
                <ContentContainer>
                <TextContainer>
                    <a href= "https://docs.google.com/forms/d/e/1FAIpQLSeDCVz2eX7IBlwMu54RyoAOS5ZAV6tqY1cdAYXtCnw6Cy7kkw/viewform" target="_blank" style={{textDecoration: "none"}}>
                        <TitleText style={{fontSize: "5vw"}}>
                            <u>Apply Now</u>
                        </TitleText>
                    </a>
                    <ContentText>&nbsp; <br/> If you have any other questions, reach out to meg.eboard@umich.edu </ContentText>
                </TextContainer>
                <ContentImage src={go} style={{marginRight:"2.5vw"}}/>
                </ContentContainer>
            </SlideContainer>

            <ChevronContainer>
                <BsChevronDoubleRight style={{marginLeft:"2.5vw", marginTop: "25vh", color: writtenID === 6 ? "grey":"black",  cursor: writtenID === 6 ? "default":"pointer", pointerEvents: writtenID === 6 ? "none":"auto"}} onClick={()=>{setWrittenID(writtenID+1)}}/>
            </ChevronContainer>
            <BodyText style={{position:"absolute",bottom: "17vh"}}>{writtenID+1}/7</BodyText>
        </SectionContainer>
    )
}

export default WrittenSection;