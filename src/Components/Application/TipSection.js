import {BsPlusLg} from "react-icons/bs"
import styled from "styled-components";
import { useState, useRef, useCallback, useEffect, useLayoutEffect } from "react";

const SectionContainer = styled.div`
  width: 100vw;
  height: fit-content;
  padding-top: 10vh;
  padding-bottom: 10vh;
  position: relative;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  align-content: center;
  flex-wrap: wrap;
  max-width: 100%;
`;

const ContentContainer = styled.div`
  margin-left: 20vw;
  margin-right: 20vw;
  display:flex;
  height:70%;
  width: 90%;
  flex-wrap: wrap;
  align-content: flex-start;
`;

const TipContainer = styled.div`
    height: 15vh;
    width: 100%;
    border-bottom: solid #1e1e1e 1px;
    overflow: hidden;
    cursor: pointer;
    transition: height .5s;
`

const TitleTextContainer = styled.div`
    height:15vh;
    display:flex;
    align-items: center;
    justify-content: space-between;
`

const TitleText = styled.h1`
  display: inline-block;
  font-size: 3.5vmin;
  font-family: futura-pt, sans-serif;
  margin: 0;
  padding: 0;
  font-weight: 700;
  text-align: left;
  color: #1e1e1e;
`;

const BodyText = styled.p`
  display: inline-block;
  font-size: 3vmin;
  font-family: futura-pt, Helvetica, sans-serif;
  margin: 0;
  padding: 0;
  color: black;
  line-height: 2;
  font-weight: 400;
  text-align:justify;
`;

function TipSection(){

    const [clickId, setClickId] = useState(0)
    const [height, setHeight] = useState(0);
    const measuredRef = useRef(null);
    const [height1, setHeight1] = useState(0);
    const measuredRef1 = useRef(null);
    const [height2, setHeight2] = useState(0);
    const measuredRef2 = useRef(null);
    const [height3, setHeight3] = useState(0);
    const measuredRef3 = useRef(null);
    const [height4, setHeight4] = useState(0);
    const measuredRef4 = useRef(null);
    const [height5, setHeight5] = useState(0);
    const measuredRef5 = useRef(null);
    const [height6, setHeight6] = useState(0);
    const measuredRef6 = useRef(null);

    function vh(v) {
        var h = Math.max(
          document.documentElement.clientHeight,
          window.innerHeight || 0
        );
        return (v * h) / 100;
      }

    useEffect(()=>{
        setHeight(measuredRef.current.clientHeight+vh(20))
        setHeight1(measuredRef1.current.clientHeight+vh(20))
        setHeight2(measuredRef2.current.clientHeight+vh(20))
        setHeight3(measuredRef3.current.clientHeight+vh(20))
        setHeight4(measuredRef4.current.clientHeight+vh(20))
        setHeight5(measuredRef5.current.clientHeight+vh(20))
        setHeight6(measuredRef6.current.clientHeight+vh(20))
    },[])

    useLayoutEffect(()=>{
        function handleResize(){
            setHeight(measuredRef.current.clientHeight+vh(20))
            setHeight1(measuredRef1.current.clientHeight+vh(20))
            setHeight2(measuredRef2.current.clientHeight+vh(20))
            setHeight3(measuredRef3.current.clientHeight+vh(20))
            setHeight4(measuredRef4.current.clientHeight+vh(20))
            setHeight5(measuredRef5.current.clientHeight+vh(20))
            setHeight6(measuredRef6.current.clientHeight+vh(20))
        }
        window.addEventListener('resize', handleResize)

        return _ => {
          window.removeEventListener('resize', handleResize)
        
    }
    })

    return(
        <SectionContainer>
            <ContentContainer>
                <TipContainer style={{height: clickId === 1 ? `${height}px`:"15vh"}} onClick={() => clickId !== 1 ? setClickId(1):setClickId(0)}>
                    <TitleTextContainer>
                        <TitleText>What exactly is consulting?</TitleText>
                        <BsPlusLg style={{marginRight:"1vw", marginLeft:"5vw", transform: clickId === 1 ? "rotate(45deg)":"none", transition: "transform .5s", fontSize: "3vmin", flexShrink:0}}/>
                    </TitleTextContainer>
                    <BodyText ref={measuredRef}>To put it simply, consulting is the practice of helping businesses with any issues they might have. It is bringing in experts &#40;maybe you in the future!&#41; to solve complex problems.</BodyText>
                </TipContainer>

                <TipContainer style={{height: clickId === 2 ? `${height1}px`:"15vh"}} onClick={() => clickId !== 2 ? setClickId(2):setClickId(0)}>
                    <TitleTextContainer>
                        <TitleText>What exactly do consulting clubs do?</TitleText>
                        <BsPlusLg style={{marginRight:"1vw", marginLeft:"5vw", transform: clickId === 2 ? "rotate(45deg)":"none", transition: "transform .5s", fontSize: "3vmin", flexShrink:0}}/>
                    </TitleTextContainer>
                    <BodyText ref={measuredRef1}>For most consulting clubs at Ross, members are put into project teams that work with actual businesses. Throughout the semester, a project team uses one of many consulting frameworks to create solutions for their client. At the end of the semester the project team presents their final recommendations to the client. </BodyText>
                </TipContainer>

                <TipContainer style={{height: clickId === 3 ? `${height2}px`:"15vh"}} onClick={() => clickId !== 3 ? setClickId(3):setClickId(0)}>
                    <TitleTextContainer>
                        <TitleText>What does MEG's recruiting process look like?</TitleText>
                        <BsPlusLg style={{marginRight:"1vw", marginLeft:"5vw", transform: clickId === 3 ? "rotate(45deg)":"none", transition: "transform .5s", fontSize: "3vmin", flexShrink:0}}/>
                    </TitleTextContainer>
                    <BodyText ref={measuredRef2}>MEG recruits at the beginning of each fall and winter semester.
                        It starts with a handful of events for you to get to know each club and their members.
                        To apply, applicants must submit an online application with a few short answer questions.
                        Next, if your written application is accepted, you will move onto two rounds of behavioral and case interviews.  </BodyText>
                </TipContainer>
                
                <TipContainer style={{height: clickId === 4 ? `${height3}px`:"15vh"}} onClick={() => clickId !== 4 ? setClickId(4):setClickId(0)}>
                    <TitleTextContainer>
                        <TitleText>What are recruiting events and do I have to go to them?</TitleText>
                        <BsPlusLg style={{marginRight:"1vw", marginLeft:"5vw", transform: clickId === 4 ? "rotate(45deg)":"none", transition: "transform .5s", fontSize: "3vmin", flexShrink:0}}/>
                    </TitleTextContainer>
                    <BodyText ref={measuredRef3}>Recruiting events are ways for you to learn more about each club before applying.
                        Clubs might hold mass meetings, coffee chats, case workshops, and panels.
                        Although not mandatory, at MEG we highly encourage you to attend and get to know our members on a more personal level!  </BodyText>
                </TipContainer>
                
                <TipContainer style={{height: clickId === 5 ? `${height4}px`:"15vh"}} onClick={() => clickId !== 5 ? setClickId(5):setClickId(0)}>
                    <TitleTextContainer>
                        <TitleText>What is on the written application and how do I write it?</TitleText>
                        <BsPlusLg style={{marginRight:"1vw", marginLeft:"5vw", transform: clickId === 5 ? "rotate(45deg)":"none", transition: "transform .5s", fontSize: "3vmin", flexShrink:0}}/>
                    </TitleTextContainer>
                    <BodyText ref={measuredRef4}>Our written application includes a section about general info &#40;name, age, major etc.&#41;
                        followed by a few short answer questions so we can get to know you better.
                        We read a lot of these applications so try to separate yourself; give us a reason to remember you!
                        Show us your passions, what makes you unique, critical analysis, and out of the box thinking.
                        Everyone has unique experiences and skills and we and to hear yours!</BodyText>
                </TipContainer>
                
                <TipContainer style={{height: clickId === 6 ? `${height5}px`:"15vh"}} onClick={() => clickId !== 6 ? setClickId(6):setClickId(0)}>
                    <TitleTextContainer>
                        <TitleText>What is a behavioral interview and how do I do well in it?</TitleText>
                        <BsPlusLg style={{marginRight:"1vw", marginLeft:"5vw", transform: clickId === 6 ? "rotate(45deg)":"none", transition: "transform .5s", fontSize: "3vmin", flexShrink:0}}/>
                    </TitleTextContainer>
                    <BodyText ref={measuredRef5}>A behavioral interview is a common type of interview that involves applicants
                        responding to a wide variety of questions that are meant to shine light on the applicant's past experiences,
                        skills, and personality. To do well, get to know some of the most common behavioral questions
                        and come prepared with some past experiences that you can describe to your interviewer. </BodyText>
                </TipContainer>

                <TipContainer style={{height: clickId === 7 ? `${height6}px`:"15vh"}} onClick={() => clickId !== 7 ? setClickId(7):setClickId(0)}>
                    <TitleTextContainer>
                        <TitleText>What is a case interview and how do I do well on it?</TitleText>
                        <BsPlusLg style={{marginRight:"1vw", marginLeft:"5vw", transform: clickId === 7 ? "rotate(45deg)":"none", transition: "transform .5s", fontSize: "3vmin", flexShrink:0}}/>
                    </TitleTextContainer>
                    <BodyText ref={measuredRef6}>In a case interview, the interviewer walks you through a business problem that you must solve.
                        These interviews can be intimidating, as a lot of applicants have no experience with casing.
                        However, keep in mind that we aren't looking for a perfect case and even the best applicants we've seen struggle a bit.
                        The most important aspect is to remain calm under pressure and show us how you think.
                        To learn the basics of casing, you can study with YouTube videos or practice cases online!</BodyText>
                </TipContainer>
                
            </ContentContainer>
        </SectionContainer>
    )
}

export default TipSection;