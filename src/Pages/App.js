import styled from "styled-components";
import { keyframes } from "styled-components";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Nav from "../Components/General/Nav";
import WebButton from "../Components/General/WebButton";
import ClientButton from "../Components/General/ClientButton";
import SocialButton from "../Components/General/SocialButton";

import ReactGA from "react-ga4";
import rg4js from "raygun4js";
import ButtonMenu from "../Components/General/ButtonMenu";

const GoToHomePage = keyframes`
    0% { 
      opacity: 1;
      height: 100vh;
    };
    99% { 
      opacity: 0;
      height: 100vh;
    };
    100% { 
      opacity: 0;
      height: 0vh;
    };

`;

const WiggleWiggle = keyframes`
  0% { transform: rotate(0deg); }
  88% { transform: rotate(0deg); }
  90% { transform: rotate(5deg); }
  92% { transform: rotate(0deg); }
  94% { transform: rotate(-5deg); }
  96% { transform: rotate(0deg); }
  98% { transform: rotate(5deg); }
  100% { transform: rotate(0deg); }
`;

const LoadContainer = styled.div`
	height: 100%;
	width: 100%;
	background-color: #1e1e1e;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	animation-name: ${GoToHomePage};
	animation-delay: 2.5s;
	animation-duration: 1s;
	animation-iteration-count: 1;
	animation-fill-mode: forwards;
	position: absolute;
	top: 0;
	right: 0;
	z-index: 1000;
`;

const TextContainer = styled.div`
	width: fit-content;
	height: fit-content;
	margin: 0;
	padding: 0;
	overflow: hidden;
	font-size: 3vmin;
`;

const TextShiftTop = keyframes`
  0% {transform: translate(0,37.5%);}
  100% {transform: translate(0,100%);}
`;

const TextShiftBottom = keyframes`
  0% {transform: translate(0,-37.5%);}
  100% {transform: translate(0,-100%);}
`;
const HomeTitleTextTop = styled.h1`
	font-family: futura-pt, sans-serif;
	margin: 0;
	padding: 0;
	-webkit-text-stroke: 0.02em #e0cff2;
	text-decoration: none;
	color: transparent;
	font-weight: 900;
	line-height: 80%;
	padding-bottom: 0.5%;
	animation-name: ${TextShiftTop};
	animation-delay: 0.5s;
	animation-duration: 2s;
	animation-iteration-count: 1;
	animation-fill-mode: forwards;
`;

const HomeTitleTextBottom = styled.h1`
	font-family: futura-pt, sans-serif;
	margin: 0;
	padding: 0;
	-webkit-text-stroke: 0.02em #e0cff2;
	text-decoration: none;
	color: transparent;
	font-weight: 900;
	line-height: 80%;
	padding-bottom: 0.5%;
	animation-name: ${TextShiftBottom};
	animation-delay: 0.5s;
	animation-duration: 2s;
	animation-fill-mode: forwards;
`;

const HomeTitleTextCenter = styled.h1`
	font-family: futura-pt, sans-serif;
	margin: 0;
	padding: 0;
	-webkit-text-stroke: 0.02em #e0cff2;
	text-decoration: none;
	color: #e0cff2;
	font-weight: 900;
	line-height: 82%;
	padding-bottom: 0.5%;
`;

const HomeContainer = styled.div`
	height: 100vh;
	width: 100vw;
	position: relative;
`;

const HomePageContainer = styled.div`
	height: 100vh;
	width: 100vw;
	background-color: #e0cff2;
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	align-content: center;
	position: relative;
	transition: background-color 0.2s;
`;

const HomeNavContainer = styled.div`
	font-size: 3vmin;
	white-space: nowrap;
	cursor: pointer;
`;

const HomeNavText = styled.h1`
	& {
		font-size: 6vmin;
		font-family: futura-pt, sans-serif;
		margin: 0;
		padding: 0;
		color: #1e1e1e;
		font-weight: 900;
		background-clip: text;
		-webkit-background-clip: text;
		position: relative;
		line-height: 100%;
		margin-top: 5px;
		margin-bottom: 5px;
		text-align: center;
	}
	&:before {
		-webkit-text-stroke: 0;
		content: attr(data-title);
		background: #e0cff2;
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		width: 0%;
		transition: all 0.3s ease-out;
		background-clip: text;
		-webkit-background-clip: text;
		color: transparent;
	}
	&:hover::before {
		width: 100%;
	}
`;

const LineBreak = styled.div`
	width: 100%;
	height: 0;
`;

const LogoContainer = styled.div`
	position: absolute;
	top: 40px;
	left: 40px;
	color: #1e1e1e;
	display: flex;
	align-items: center;
	transition: all 0.2s;
`;

const ScrollContainer = styled.div`
	width: 100%;
	position: absolute;
	overflow: hidden;
`;

const Scroll = keyframes`
  from {
    transform: translateX(100vw);
  }
  to {
    transform: translateX(-100%);
  }
`;

const ScrollText = styled.h1`
	display: inline-block;
	width: fit-content;
	font-size: 6vmin;
	font-family: futura-pt, sans-serif;
	margin: 0;
	padding: 0;
	font-weight: 900;
	color: #e0cff2;
	animation-name: ${Scroll};
	animation-duration: 20s;
	animation-iteration-count: infinite;
	animation-timing-function: linear;
`;

const SocialContainer = styled.div`
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	bottom: 3vmax;
	right: 4.5vmax;
`;

const InterestContainer = styled.div`
	font-family: futura-pt, sans-serif;
	font-size: 2vh;
	width: 12vw;
	border: 1px solid;
	color: #1e1e1e;
	border-radius: 2vw;
	padding: 1vh;
	text-align: center;
	margin-right: 10px;
	font-weight: 600;
	@media (max-aspect-ratio: 1/1) {
		display: none;
	}
`;

const HorizontalSpacer = styled.div`
	height: 1px;
	width: 3vh;
	background-color: #1e1e1e;
`;

const VerticalSpacer = styled.div`
	width: 100%;
	height: 1vh;
`;

function App() {
	let location = useLocation();
	ReactGA.initialize("G-GC3DF08WD9");

	useEffect(() => {
		ReactGA.send({
			hitType: "pageview",
			page: "/" + window.location.pathname,
			title: "Home Page",
		});
		rg4js("trackEvent", {
			type: "pageView",
			path: "/" + window.location.hash, // Or perhaps window.location.hash
		});
	}, [location]);

	const [scrollID, setScrollID] = useState(0);

	const scrollStatue = [
		[""],
		[
			"WHO WE ARE",
			"OUR VALUES",
			"WHERE WE'VE BEEN",
			"HOW WE CAN HELP YOU",
			"WHERE YOU FIT",
		],
		[
			"WHO WE WORK WITH",
			"OUR PAST CLIENTS",
			"THE IMPACT WE'VE MADE",
			"THE FRAMEWORKS WE USE",
			"WHAT YOU CAN ADD",
		],
		[
			"MEET OUR MEMEBRS",
			"GET TO KNOW US",
			"DISCOVER OUR DIVERSITY",
			"EXPLORE OUR PASSIONS",
			"FIND WHERE YOU FIT",
		],
		[
			"APPLY NOW",
			"SEE OUR TIMELINE",
			"APPLICATION FAQ",
			"HOW TO APPLY",
			"COME JOIN THE FAMILY",
		],
		[
			"Michigan X McKinsey Strategy Invitational",
			"MMSI",
			"Michigan X McKinsey Strategy Invitational",
			"MMSI",
			"Michigan X McKinsey Strategy Invitational",
		],
	];

	const [firstAnimation, setFirstAnimation] = useState(true);

	useEffect(() => {
		if (window.sessionStorage.getItem("FirstLoad") === null) {
			setFirstAnimation(true);
			window.sessionStorage.setItem("FirstLoad", 1);
		} else {
			setFirstAnimation(false);
		}
	}, []);

	return (
		<HomeContainer>
			<HomePageContainer
				style={{
					backgroundColor: scrollID !== 0 ? "#1e1e1e" : "#E0CFF2",
				}}
			>
				<ButtonMenu buttonScrollID={scrollID} />

				<SocialContainer>
					<Link to="/Projects" style={{ textDecoration: "none" }}>
						<InterestContainer
							style={{
								visibility: !scrollID ? "visible" : "hidden",
							}}
						>
							<p style={{ margin: 0 }}>Work With Us!</p>
						</InterestContainer>
					</Link>
					<SocialButton visible={scrollID} social={0} />
					<HorizontalSpacer />
					<SocialButton visible={scrollID} social={1} />
					<HorizontalSpacer />
					<SocialButton visible={scrollID} social={2} />
				</SocialContainer>

				<ScrollContainer style={{ top: "15vh" }}>
					<ScrollText
						style={{
							visibility: scrollID !== 0 ? "visible" : "hidden",
							animationDelay: "-6s",
						}}
					>
						{scrollStatue[scrollID][0]}
					</ScrollText>
				</ScrollContainer>
				<ScrollContainer style={{ top: "25vh" }}>
					<ScrollText
						style={{
							visibility: scrollID !== 0 ? "visible" : "hidden",
							animationDelay: "-2s",
							animationDirection: "reverse",
						}}
					>
						{scrollStatue[scrollID][1]}
					</ScrollText>
				</ScrollContainer>
				<ScrollContainer style={{ top: "65vh" }}>
					<ScrollText
						style={{
							visibility: scrollID !== 0 ? "visible" : "hidden",
							animationDelay: "-19s",
						}}
					>
						{scrollStatue[scrollID][2]}
					</ScrollText>
				</ScrollContainer>
				<ScrollContainer style={{ top: "75vh" }}>
					<ScrollText
						style={{
							visibility: scrollID !== 0 ? "visible" : "hidden",
							animationDelay: "-18s",
							animationDirection: "reverse",
						}}
					>
						{scrollStatue[scrollID][3]}
					</ScrollText>
				</ScrollContainer>
				<ScrollContainer style={{ top: "85vh" }}>
					<ScrollText
						style={{
							visibility: scrollID !== 0 ? "visible" : "hidden",
							animationDelay: "-12s",
						}}
					>
						{scrollStatue[scrollID][4]}
					</ScrollText>
				</ScrollContainer>

				<LogoContainer
					style={{ visibility: scrollID === 0 ? "100%" : "0%" }}
				>
					<Nav color={0} home={0} />
				</LogoContainer>
				<LogoContainer
					style={{ opacity: scrollID !== 0 ? "100%" : "0%" }}
				>
					<Nav color={1} home={0} />
				</LogoContainer>
				<Link to="/about" style={{ textDecoration: "none" }}>
					<HomeNavContainer>
						<HomeNavText
							data-title="ABOUT US"
							onMouseEnter={() => {
								setScrollID(1);
							}}
							onMouseLeave={() => {
								setScrollID(0);
							}}
							style={{
								WebkitTextStroke:
									setScrollID !== 1 || setScrollID !== 0
										? "1px #E0CFF2"
										: "none",
							}}
						>
							ABOUT US
						</HomeNavText>
					</HomeNavContainer>
				</Link>
				<LineBreak />
				<Link to="/projects" style={{ textDecoration: "none" }}>
					<HomeNavContainer>
						<HomeNavText
							data-title="OUR CLIENTS"
							onMouseEnter={() => {
								setScrollID(2);
							}}
							onMouseLeave={() => {
								setScrollID(0);
							}}
							style={{
								WebkitTextStroke:
									setScrollID !== 2 || setScrollID !== 0
										? "1px #E0CFF2"
										: "none",
							}}
						>
							OUR CLIENTS
						</HomeNavText>
					</HomeNavContainer>
				</Link>
				<LineBreak />
				<Link to="/team" style={{ textDecoration: "none" }}>
					<HomeNavContainer>
						<HomeNavText
							data-title="OUR TEAM"
							onMouseEnter={() => {
								setScrollID(3);
							}}
							onMouseLeave={() => {
								setScrollID(0);
							}}
							style={{
								WebkitTextStroke:
									setScrollID !== 3 || setScrollID !== 0
										? "1px #E0CFF2"
										: "none",
							}}
						>
							OUR TEAM
						</HomeNavText>
					</HomeNavContainer>
				</Link>
				<LineBreak />
				<Link to="/application" style={{ textDecoration: "none" }}>
					<HomeNavContainer>
						<HomeNavText
							data-title="APPLICATION"
							onMouseEnter={() => {
								setScrollID(4);
							}}
							onMouseLeave={() => {
								setScrollID(0);
							}}
							style={{
								WebkitTextStroke:
									setScrollID !== 4 || setScrollID !== 0
										? "1px #E0CFF2"
										: "none",
							}}
						>
							APPLICATION
						</HomeNavText>
					</HomeNavContainer>
				</Link>
				<LineBreak />
				<a href="https://themmsi.com" target="_blank"
					rel="noopener noreferrer" style={{ textDecoration: "none" }}>
					<HomeNavContainer>
						<HomeNavText
							data-title="MMSI"
							onMouseEnter={() => {
								setScrollID(5);
							}}
							onMouseLeave={() => {
								setScrollID(0);
							}}
							style={{
								WebkitTextStroke:
									setScrollID !== 5 || setScrollID !== 0
										? "1px #E0CFF2"
										: "none",
							}}
						>
							MMSI
						</HomeNavText>
					</HomeNavContainer>
				</a>
			</HomePageContainer>
			<LoadContainer
				style={{ display: firstAnimation ? "flex" : "none" }}
			>
				<TextContainer style={{ transform: "translate(0,75%)" }}>
					<HomeTitleTextTop
						style={{ transform: "translate(0,37.5%)" }}
					>
						MEG CONSULTING
					</HomeTitleTextTop>
				</TextContainer>
				<TextContainer style={{ transform: "translate(0,37.5%)" }}>
					<HomeTitleTextTop
						style={{ transform: "translate(0,37.5%)" }}
					>
						MEG CONSULTING
					</HomeTitleTextTop>
				</TextContainer>
				<TextContainer>
					<HomeTitleTextTop
						style={{ transform: "translate(0,37.5%)" }}
					>
						MEG CONSULTING
					</HomeTitleTextTop>
				</TextContainer>
				<TextContainer>
					<HomeTitleTextCenter>MEG CONSULTING</HomeTitleTextCenter>
				</TextContainer>
				<TextContainer>
					<HomeTitleTextBottom
						style={{ transform: "translate(0, -37.5%)" }}
					>
						MEG CONSULTING
					</HomeTitleTextBottom>
				</TextContainer>
				<TextContainer style={{ transform: "translate(0, -37.5%)" }}>
					<HomeTitleTextBottom
						style={{ transform: "translate(0, -37.5%)" }}
					>
						MEG CONSULTING
					</HomeTitleTextBottom>
				</TextContainer>
				<TextContainer style={{ transform: "translate(0, -75%)" }}>
					<HomeTitleTextBottom
						style={{ transform: "translate(0, -37.5%)" }}
					>
						MEG CONSULTING
					</HomeTitleTextBottom>
				</TextContainer>
			</LoadContainer>
		</HomeContainer>
	);
}

export default App;
