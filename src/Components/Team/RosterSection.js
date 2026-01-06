import styled from "styled-components";
import { useState } from "react";

import brandon0 from "../../Images/Team/headshots/brandon0.png";
import brandon1 from "../../Images/Team/headshots/brandon1.png";
import anish0 from "../../Images/Team/headshots/anish0.png";
import anish1 from "../../Images/Team/headshots/anish1.png";
import kapil0 from "../../Images/Team/headshots/kapil0.png";
import kapil1 from "../../Images/Team/headshots/kapil1.png";
import lawder0 from "../../Images/Team/headshots/lawder0.png";
import lawder1 from "../../Images/Team/headshots/lawder1.png";

import aditivadakath0 from "../../Images/Team/headshots/aditivadakath0.png";
import aditivadakath1 from "../../Images/Team/headshots/aditivadakath1.png";
import alishagandhi0 from "../../Images/Team/headshots/alishagandhi0.png";
import alishagandhi1 from "../../Images/Team/headshots/alishagandhi1.png";
import amorytin0 from "../../Images/Team/headshots/amorytin0.png";
import amorytin1 from "../../Images/Team/headshots/amorytin1.png";
import anishthatiparthi0 from "../../Images/Team/headshots/anishthatiparthi0.png";
import anishthatiparthi1 from "../../Images/Team/headshots/anishthatiparthi1.png";
import aravrajesh0 from "../../Images/Team/headshots/aravrajesh0.png";
import aravrajesh1 from "../../Images/Team/headshots/aravrajesh1.png";
import archansenthilvanan0 from "../../Images/Team/headshots/archansenthilvanan0.png";
import archansenthilvanan1 from "../../Images/Team/headshots/archansenthilvanan1.png";
import avakurtz0 from "../../Images/Team/headshots/avakurtz0.png";
import avakurtz1 from "../../Images/Team/headshots/avakurtz1.png";
import azratokovic0 from "../../Images/Team/headshots/azratokovic0.png";
import azratokovic1 from "../../Images/Team/headshots/azratokovic1.png";
import caleblee0 from "../../Images/Team/headshots/caleblee0.png";
import caleblee1 from "../../Images/Team/headshots/caleblee1.png";
import chloetjakra0 from "../../Images/Team/headshots/chloetjakra0.png";
import chloetjakra1 from "../../Images/Team/headshots/chloetjakra1.png";
import cynthiali0 from "../../Images/Team/headshots/cynthiali0.png";
import cynthiali1 from "../../Images/Team/headshots/cynthiali1.png";
import davidliu0 from "../../Images/Team/headshots/davidliu0.png";
import davidliu1 from "../../Images/Team/headshots/davidliu1.png";
import debangimohanta0 from "../../Images/Team/headshots/debangimohanta0.png";
import debangimohanta1 from "../../Images/Team/headshots/debangimohanta1.png";
import dylanwang0 from "../../Images/Team/headshots/dylanwang0.png";
import dylanwang1 from "../../Images/Team/headshots/dylanwang1.png";
import evakumer0 from "../../Images/Team/headshots/evakumer0.png";
import evakumer1 from "../../Images/Team/headshots/evakumer1.png";
import ilakiyarajaguru0 from "../../Images/Team/headshots/ilakiyarajaguru0.png";
import ilakiyarajaguru1 from "../../Images/Team/headshots/ilakiyarajaguru1.png";
import isabellaxu0 from "../../Images/Team/headshots/isabellaxu0.png";
import isabellaxu1 from "../../Images/Team/headshots/isabellaxu1.png";
import isseihata0 from "../../Images/Team/headshots/isseihata0.png";
import isseihata1 from "../../Images/Team/headshots/isseihata1.png";
import jessicatran0 from "../../Images/Team/headshots/jessicatran0.png";
import jessicatran1 from "../../Images/Team/headshots/jessicatran1.png";
import jiwoobaik0 from "../../Images/Team/headshots/jiwoobaik0.png";
import jiwoobaik1 from "../../Images/Team/headshots/jiwoobaik1.png";
import johnlee0 from "../../Images/Team/headshots/johnlee0.png";
import johnlee1 from "../../Images/Team/headshots/johnlee1.png";
import joyren0 from "../../Images/Team/headshots/joyren0.png";
import joyren1 from "../../Images/Team/headshots/joyren1.png";
import juliazhang0 from "../../Images/Team/headshots/juliazhang0.png";
import juliazhang1 from "../../Images/Team/headshots/juliazhang1.png";
import kaitlynko0 from "../../Images/Team/headshots/kaitlynko0.png";
import kaitlynko1 from "../../Images/Team/headshots/kaitlynko1.png";
import kasenko0 from "../../Images/Team/headshots/kasenko0.png";
import kasenko1 from "../../Images/Team/headshots/kasenko1.png";
import leoleone0 from "../../Images/Team/headshots/leoleone0.png";
import leoleone1 from "../../Images/Team/headshots/leoleone1.png";
import michellebaik0 from "../../Images/Team/headshots/michellebaik0.png";
import michellebaik1 from "../../Images/Team/headshots/michellebaik1.png";
import minseokkim0 from "../../Images/Team/headshots/minseokkim0.png";
import minseokkim1 from "../../Images/Team/headshots/minseokkim1.png";
import natashashimon0 from "../../Images/Team/headshots/natashashimon0.png";
import natashashimon1 from "../../Images/Team/headshots/natashashimon1.png";
import nathanlucken0 from "../../Images/Team/headshots/nathanlucken0.png";
import nathanlucken1 from "../../Images/Team/headshots/nathanlucken1.png";
import niyatikashyap0 from "../../Images/Team/headshots/niyatikashyap0.png";
import niyatikashyap1 from "../../Images/Team/headshots/niyatikashyap1.png";
import patrickli0 from "../../Images/Team/headshots/patrickli0.png";
import patrickli1 from "../../Images/Team/headshots/patrickli1.png";
import prahpant0 from "../../Images/Team/headshots/prahpant0.png";
import prahpant1 from "../../Images/Team/headshots/prahpant1.png";
import rafaelopperman0 from "../../Images/Team/headshots/rafaelopperman0.png";
import rafaelopperman1 from "../../Images/Team/headshots/rafaelopperman1.png";
import rahilkakar0 from "../../Images/Team/headshots/rahilkakar0.png";
import rahilkakar1 from "../../Images/Team/headshots/rahilkakar1.png";
import reesebower0 from "../../Images/Team/headshots/reesebower0.png";
import reesebower1 from "../../Images/Team/headshots/reesebower1.png";
import rheamisra0 from "../../Images/Team/headshots/rheamisra0.png";
import rheamisra1 from "../../Images/Team/headshots/rheamisra1.png";
import saathvikhari0 from "../../Images/Team/headshots/saathvikhari0.png";
import saathvikhari1 from "../../Images/Team/headshots/saathvikhari1.png";
import shivarajan0 from "../../Images/Team/headshots/shivarajan0.png";
import shivarajan1 from "../../Images/Team/headshots/shivarajan1.png";
import simrynjawanda0 from "../../Images/Team/headshots/simrynjawanda0.png";
import simrynjawanda1 from "../../Images/Team/headshots/simrynjawanda1.png";
import siripattipati0 from "../../Images/Team/headshots/siripattipati0.png";
import siripattipati1 from "../../Images/Team/headshots/siripattipati1.png";
import sophierichards0 from "../../Images/Team/headshots/sophierichards0.png";
import sophierichards1 from "../../Images/Team/headshots/sophierichards1.png";
import sriyanmadugula0 from "../../Images/Team/headshots/sriyanmadugula0.png";
import sriyanmadugula1 from "../../Images/Team/headshots/sriyanmadugula1.png";
import sydneygaynor0 from "../../Images/Team/headshots/sydneygaynor0.png";
import sydneygaynor1 from "../../Images/Team/headshots/sydneygaynor1.png";
import sydneygoad0 from "../../Images/Team/headshots/sydneygoad0.png";
import sydneygoad1 from "../../Images/Team/headshots/sydneygoad1.png";
import varuntalluri0 from "../../Images/Team/headshots/varuntalluri0.png";
import varuntalluri1 from "../../Images/Team/headshots/varuntalluri1.png";
import viveknukala0 from "../../Images/Team/headshots/viveknukala0.png";
import viveknukala1 from "../../Images/Team/headshots/viveknukala1.png";
import yaseenmetwally0 from "../../Images/Team/headshots/yaseenmetwally0.png";
import yaseenmetwally1 from "../../Images/Team/headshots/yaseenmetwally1.png";
import zafirmakeragha0 from "../../Images/Team/headshots/zafirmakeragha0.png";
import zafirmakeragha1 from "../../Images/Team/headshots/zafirmakeragha1.png";

{/* winter 2025 */}
import alexhayes0 from "../../Images/Team/headshots/alexhayes0.png";
import alexhayes1 from "../../Images/Team/headshots/alexhayes1.png";
import briankang0 from "../../Images/Team/headshots/briankang0.png";
import briankang1 from "../../Images/Team/headshots/briankang1.png";
import briankim0 from "../../Images/Team/headshots/briankim0.png";
import briankim1 from "../../Images/Team/headshots/briankim1.png";
import dylanchee0 from "../../Images/Team/headshots/dylanchee0.png";
import dylanchee1 from "../../Images/Team/headshots/dylanchee1.png";
import ericaqin0 from "../../Images/Team/headshots/ericaqin0.png";
import ericaqin1 from "../../Images/Team/headshots/ericaqin1.png";
import evelynchao0 from "../../Images/Team/headshots/evelynchao0.png";
import evelynchao1 from "../../Images/Team/headshots/evelynchao1.png";
import hojundo0 from "../../Images/Team/headshots/hojundo0.png";
import hojundo1 from "../../Images/Team/headshots/hojundo1.png";
import nacharamanathan0 from "../../Images/Team/headshots/nacharamanathan0.png";
import nacharamanathan1 from "../../Images/Team/headshots/nacharamanathan1.png";
import oliviaheithoff0 from "../../Images/Team/headshots/oliviaheithoff0.png";
import oliviaheithoff1 from "../../Images/Team/headshots/oliviaheithoff1.png";
import zacharyyoonkim0 from "../../Images/Team/headshots/zacharyyoonkim0.png";
import zacharyyoonkim1 from "../../Images/Team/headshots/zacharyyoonkim1.png";

{/* fall 2025 */}
import aldenking0 from "../../Images/Team/headshots/aldenking0.png";
import aldenking1 from "../../Images/Team/headshots/aldenking1.png";
import akashsaini0 from "../../Images/Team/headshots/akashsaini0.png";
import akashsaini1 from "../../Images/Team/headshots/akashsaini1.png";
import bettinasoares0 from "../../Images/Team/headshots/bettinasoares0.png";
import bettinasoares1 from "../../Images/Team/headshots/bettinasoares1.png";
import chrisbai0 from "../../Images/Team/headshots/chrisbai0.png";
import chrisbai1 from "../../Images/Team/headshots/chrisbai1.png";
import danielleshi0 from "../../Images/Team/headshots/danielleshi0.png";
import danielleshi1 from "../../Images/Team/headshots/danielleshi1.png";
import farhanibrahim0 from "../../Images/Team/headshots/farhanibrahim0.png";
import farhanibrahim1 from "../../Images/Team/headshots/farhanibrahim1.png";
import gemmagow0 from "../../Images/Team/headshots/gemmagow0.png";
import gemmagow1 from "../../Images/Team/headshots/gemmagow1.png";
import justinip0 from "../../Images/Team/headshots/justinip0.png";
import justinip1 from "../../Images/Team/headshots/justinip1.png";
import mburukarimi0 from "../../Images/Team/headshots/mburukarimi0.png";
import mburukarimi1 from "../../Images/Team/headshots/mburukarimi1.png";
import qianyunzhang0 from "../../Images/Team/headshots/qianyunzhang0.png";
import qianyunzhang1 from "../../Images/Team/headshots/qianyunzhang1.png";
import rithviktripuraneni0 from "../../Images/Team/headshots/rithviktripuraneni0.png";
import rithviktripuraneni1 from "../../Images/Team/headshots/rithviktripuraneni1.png";
import simrankaur0 from "../../Images/Team/headshots/simrankaur0.png";
import simrankaur1 from "../../Images/Team/headshots/simrankaur1.png";
import solomondeyoung0 from "../../Images/Team/headshots/solomondeyoung0.png";
import solomondeyoung1 from "../../Images/Team/headshots/solomondeyoung1.png";

const SectionContainer = styled.div`
	width: 100vw;
	height: fit-content;
	background-color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	align-content: center;
	position: relative;
	flex-wrap: wrap;
	max-width: 100%;
	transform: translate3d(0, 0, 0);
	-webkit-transform: translate3d(0, 0, 1000px);
`;

const PositionContainer = styled.div`
	width: 90%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	align-content: center;
	position: relative;
	flex-wrap: wrap;
`;

const CardContainer = styled.div`
	height: 60vmin;
	width: 40vmin;
	padding: 2vmin;
	display: flex;
	align-items: center;
	justify-content: center;
	align-content: flex-start;
	flex-wrap: wrap;
`;

const CardImage = styled.div`
	background-image: url(${brandon0});
	width: 36vmin;
	height: 44vmin;
	background-size: cover;
`;

const CardImageHover = styled.div`
	background-image: url(${brandon1});
	width: 36vmin;
	height: 44vmin;
	background-size: cover;
	transition: opacity 0.5s;
	margin-bottom: -100%;
	transform: translateY(-100%);
`;

const NewLine = styled.div`
	width: 200%;
	height: 0;
`;

const TinySpacer = styled.div`
	width: 200%;
	height: 1vmin;
`;

const SmallSpacer = styled.div`
	width: 200%;
	height: 10vmin;
`;

const TextContainer = styled.div`
	width: 100%;
	height: fit-content;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	padding-left: 2vmin;
	padding-right: 2vmin;
`;

const TextContainerHover = styled.div`
	width: 100%;
	height: fit-content;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	padding-left: 2vmin;
	padding-right: 2vmin;
`;

const TitleText = styled.h1`
	display: inline-block;
	font-size: 6vmin;
	font-family: futura-pt, sans-serif;
	margin: 0;
	padding: 0;
	font-weight: 800;
	text-align: left;
	color: #1e1e1e;
`;

const CardTitle = styled.h1`
	display: inline-block;
	font-size: 3vmin;
	font-family: futura-pt, sans-serif;
	margin: 0;
	padding: 0;
	font-weight: 700;
	text-align: left;
	color: #1e1e1e;
`;

const CardHeader = styled.h2`
	display: inline-block;
	font-size: 2.5vmin;
	font-family: futura-pt, sans-serif;
	margin: 0;
	padding: 0;
	font-weight: 600;
	text-align: left;
	color: #4d4d4d;
`;

const CardHeaderHover = styled.div`
	display: inline-block;
	font-size: 2.5vmin;
	font-family: futura-pt, sans-serif;
	margin: 0;
	padding: 0;
	font-weight: 600;
	text-align: left;
	color: #4d4d4d;
`;

function RosterSection() {
	const [hoverID2, setHoverID2] = useState(0);

	const eboardData = [
		{
			name: "Patrick Li",
			image0: patrickli0,
			image1: patrickli1,
			position: "President",
			major: "BBA & Political Science 2026",
			ID: 102,
			url: "https://www.linkedin.com/in/patrick-li-6a9296247/",
		},{
			name: "Varun Talluri",
			image0: varuntalluri0,
			image1: varuntalluri1,
			position: "VP Recruitment",
			major: "BBA & CS 2027",
			ID: 124,
			url: "https://www.linkedin.com/in/varun-talluri/",
		},{
			name: "Kaitlyn Ko",
			image0: kaitlynko0,
			image1: kaitlynko1,
			position: "VP Operations & Finance",
			major: "BBA 2027",
			ID: 113,
			url: "https://www.linkedin.com/in/kaitlyn-ko-a59a17255//",
		}, {
			name: "Rhea Misra",
			image0: rheamisra0,
			image1: rheamisra1,
			position: "VP Client Development",
			major: "IOE & CS 2027",
			ID: 117,
			url: "https://www.linkedin.com/in/rhea-misra-b15401245/",
		}, {
			name: "Sydney Goad",
			image0: sydneygoad0,
			image1: sydneygoad1,
			position: "VP External",
			major: "BBA 2027",
			ID: 115,
			url: "https://www.linkedin.com/in/sydney-goad13/",
		},{
			name: "John Lee",
			image0: johnlee0,
			image1: johnlee1,
			position: "VP Internal",
			major: "BBA 2027",
			ID: 114,
			url: "https://www.linkedin.com/in/john-y-lee/",
		},{
			name: "Isabella Xu",
			image0: isabellaxu0,
			image1: isabellaxu1,
			position: "VP Community Engagement",
			major: "Econ 2027",
			ID: 122,
			url: "https://www.linkedin.com/in/isabellaaxu/",
		},
	];
	const managerData = [
		{
			name: "Michelle Baik",
			image0: michellebaik0,
			image1: michellebaik1,
			position: "Project Manager",
			major: "BBA 2028",
			ID: 145,
			url: "https://www.linkedin.com/in/michelle-baik24/",
		},
		{
			name: "Evelyn Chao",
			image0: evelynchao0,
			image1: evelynchao1,
			position: "Project Manager",
			major: "BBA 2028",
			ID: 156,
			url: "https://www.linkedin.com/in/evelyn-chao0616/",
		},
		{
			name: "Olivia Heithoff",
			image0: oliviaheithoff0,
			image1: oliviaheithoff1,
			position: "Project Manager",
			major: "BBA 2028",
			ID: 158,
			url: "https://www.linkedin.com/in/olivia-heithoff/",
		},
		{
			name: "Rahil Kakar",
			image0: rahilkakar0,
			image1: rahilkakar1,
			position: "Project Manager",
			major: "BBA 2028",
			ID: 148,
			url: "https://www.linkedin.com/in/rahil-kakar/",
		},
		{
			name: "Kasen Ko",
			image0: kasenko0,
			image1: kasenko1,
			position: "Project Manager",
			major: "BBA 2028",
			ID: 144,
			url: "https://www.linkedin.com/in/kasen-ko-/",
		},
		{
			name: "David Liu",
			image0: davidliu0,
			image1: davidliu1,
			position: "Project Manager",
			major: "BBA 2028",
			ID: 141,
			url: "https://www.linkedin.com/in/https://www.linkedin.com/in/david-liu-826950294/",
		},
		{
			name: "Dylan Wang",
			image0: dylanwang0,
			image1: dylanwang1,
			position: "Project Manager",
			major: "BBA 2028",
			ID: 142,
			url: "https://www.linkedin.com/in/dylan-wang-018047261/",
		},
	];

	const analystData = [
		{
			name: "Chris Bai",
			image0: chrisbai0,
			image1: chrisbai1,
			position: "Junior Analyst",
			major: "BBA 2029",
			ID: 160,
			url: "https://www.linkedin.com/in/cjbai/",
		},
		{
			name: "Solomon DeYoung",
			image0: solomondeyoung0,
			image1: solomondeyoung1,
			position: "Junior Analyst",
			major: "BBA 2029",
			ID: 161,
			url: "https://www.linkedin.com/in/solomon-deyoung/",
		},
		{
			name: "Gemma Gow",
			image0: gemmagow0,
			image1: gemmagow1,
			position: "Junior Analyst",
			major: "BBA 2029",
			ID: 162,
			url: "https://www.linkedin.com/in/gemmaygow/",
		},
		{
			name: "Farhan Ibrahim",
			image0: farhanibrahim0,
			image1: farhanibrahim1,
			position: "Junior Analyst",
			major: "Biomolecular Science & Econ 2028",
			ID: 163,
			url: "https://www.linkedin.com/in/farhaniibrahim/",
		},
		{
			name: "Justin Ip",
			image0: justinip0,
			image1: justinip1,
			position: "Junior Analyst",
			major: "BBA 2029",
			ID: 164,
			url: "https://www.linkedin.com/in/justin-gip/",
		},
		{
			name: "Mburu Karimi",
			image0: mburukarimi0,
			image1: mburukarimi1,
			position: "Junior Analyst",
			major: "Econ 2028",
			ID: 165,
			url: "https://www.linkedin.com/in/justin-gip/",
		},
		{
			name: "Simran Kaur",
			image0: simrankaur0,
			image1: simrankaur1,
			position: "Junior Analyst",
			major: "Econ 2028",
			ID: 166,
			url: "https://www.linkedin.com/in/justin-gip/",
		},
		{
			name: "Alden King",
			image0: aldenking0,
			image1: aldenking1,
			position: "Junior Analyst",
			major: "BBA 2028",
			ID: 167,
			url: "https://www.linkedin.com/in/alden-king-940a14336/",
		},
		{
			name: "Akash Saini",
			image0: akashsaini0,
			image1: akashsaini1,
			position: "Junior Analyst",
			major: "Electrical Engineering 2029",
			ID: 168,
			url: "https://www.linkedin.com/in/akash-saini-4a7176318/",
		},
		{
			name: "Danielle Shi",
			image0: danielleshi0,
			image1: danielleshi1,
			position: "Junior Analyst",
			major: "BBA 2029",
			ID: 169,
			url: "https://www.linkedin.com/in/danielle-shi-1a3138248/",
		},
		{
			name: "Bettina Soares",
			image0: bettinasoares0,
			image1: bettinasoares1,
			position: "Junior Analyst",
			major: "BBA 2029",
			ID: 170,
			url: "https://www.linkedin.com/in/bettina-soares/",
		},
		{
			name: "Rithvik Tripurareni",
			image0: rithviktripuraneni0,
			image1: rithviktripuraneni1,
			position: "Junior Analyst",
			major: "BBA 2028",
			ID: 171,
			url: "https://www.linkedin.com/in/rithvik-tripuraneni/",
		},
		{
			name: "Timothy Wang",
			image0: timothywang0,
			image1: timothywang0,
			position: "Junior Analyst",
			major: "BBA 2029",
			ID: 172,
			url: "https://www.linkedin.com/in/timothy-yh-wang/",
		},
		{
			name: "Qian Yun Zhang",
			image0: qianyunzhang0,
			image1: qianyunzhang1,
			position: "Junior Analyst",
			major: "CS & Math 2029",
			ID: 173,
			url: "https://www.linkedin.com/in/qian-yun-zhang-555291346/",
		},
		{
			name: "Dylan Chee",
			image0: dylanchee0,
			image1: dylanchee1,
			position: "Senior Analyst",
			major: "BBA 2028",
			ID: 154,
			url: "https://www.linkedin.com/in/dylan-chee/",
		},
		{
			name: "Hojun Do",
			image0: hojundo0,
			image1: hojundo1,
			position: "Senior Analyst",
			major: "BBA 2028",
			ID: 157,
			url: "https://www.linkedin.com/in/hojun-do/",
		},
		{
			name: "Alex Hayes",
			image0: alexhayes0,
			image1: alexhayes1,
			position: "Senior Analyst",
			major: "Mechanical Engineering 2028",
			ID: 151,
			url: "https://www.linkedin.com/in/alexander-john-hayes/",
		},
		{
			name: "Brian Kang",
			image0: briankang0,
			image1: briankang1,
			position: "Senior Analyst",
			major: "BBA 2028",
			ID: 152,
			url: "https://www.linkedin.com/in/sangyeon-kang/",
		},
		{
			name: "Brian Kim",
			image0: briankim0,
			image1: briankim1,
			position: "Senior Analyst",
			major: "BBA 2027",
			ID: 153,
			url: "https://www.linkedin.com/in/brian-kim11/",
		},
		{
			name: "Nacha Ramanathan",
			image0: nacharamanathan0,
			image1: nacharamanathan1,
			position: "Senior Analyst",
			major: "BBA 2028",
			ID: 143,
			url: "https://www.linkedin.com/in/nacha-ramanathan/",
		},
		{
			name: "Erica Qin",
			image0: ericaqin0,
			image1: ericaqin1,
			position: "Senior Analyst",
			major: "BBA 2028",
			ID: 155,
			url: "https://www.linkedin.com/in/erica-qin/",
		},
		{
			name: "Zachary Yoon-Kim",
			image0: zacharyyoonkim0,
			image1: zacharyyoonkim1,
			position: "Senior Analyst",
			major: "Econ & CS 2028",
			ID: 159,
			url: "https://www.linkedin.com/in/zachary-yoon-kim/",
		},
		{
			name: "Reese Bower",
			image0: reesebower0,
			image1: reesebower1,
			position: "Senior Analyst",
			major: "Econ & Public Policy 2028",
			ID: 147,
			url: "https://www.linkedin.com/in/reese-bower-79657b330/",
		},
		{
			name: "Simryn Jawanda",
			image0: simrynjawanda0,
			image1: simrynjawanda1,
			position: "Senior Analyst",
			major: "BBA 2028",
			ID: 150,
			url: "https://www.linkedin.com/in/simryn-jawanda-a25531207/",
		},
		{
			name: "Nathan Lucken",
			image0: nathanlucken0,
			image1: nathanlucken1,
			position: "Senior Analyst",
			major: "BBA 2028",
			ID: 146,
			url: "https://www.linkedin.com/in/nathanlucken/",
		},
		{
			name: "Chloe Tjakra",
			image0: chloetjakra0,
			image1: chloetjakra1,
			position: "Senior Analyst",
			major: "Data Science 2028",
			ID: 140,
			url: "https://www.linkedin.com/in/chloe-tjakra-ba566a336/",
		},
	];


	const seniorData = [
		{
			name: "Jiwoo Baik",
			image0: jiwoobaik0,
			image1: jiwoobaik1,
			position: "Junior Advisor",
			major: "Econ 2027",
			ID: 143,
			url: "https://www.linkedin.com/in/jiwoo-baik/",
		},
		{
			name: "Alisha Gandhi",
			image0: alishagandhi0,
			image1: alishagandhi1,
			position: "Junior Advisor",
			major: "BBA 2027",
			ID: 138,
			url: "https://www.linkedin.com/in/alishasgandhi/",
		},
		{
			name: "Issei Hata",
			image0: isseihata0,
			image1: isseihata1,
			position: "Junior Advisor",
			major: "Econ & Math 2027",
			ID: 127,
			url: "https://www.linkedin.com/in/isseihata/",
		},
		{
			name: "Caleb Lee",
			image0: caleblee0,
			image1: caleblee1,
			position: "Junior Advisor",
			major: "Data Science 2027",
			ID: 132,
			url: "https://www.linkedin.com/in/calebjl/",
		},
		{
			name: "Cynthia Li",
			image0: cynthiali0,
			image1: cynthiali1,
			position: "Junior Advisor",
			major: "BBA 2027",
			ID: 129,
			url: "https://www.linkedin.com/in/cynthia-j-li/",
		},
		{
			name: "Sriyan Madugula",
			image0: sriyanmadugula0,
			image1: sriyanmadugula1,
			position: "Junior Advisor",
			major: "BBA & CS 2027",
			ID: 125,
			url: "https://www.linkedin.com/in/sriyanm/",
		},
		{
			name: "Rafael Opperman",
			image0: rafaelopperman0,
			image1: rafaelopperman1,
			position: "Junior Advisor",
			major: "IOE 2027",
			ID: 149,
			url: "https://www.linkedin.com/in/rafael-opperman-906739289/",
		},
		{
			name: "Shiva Rajan",
			image0: shivarajan0,
			image1: shivarajan1,
			position: "Junior Advisor",
			major: "BBA 2027",
			ID: 128,
			url: "https://www.linkedin.com/in/shiva-rajan78/",
		},
		{
			name: "Arav Rajesh",
			image0: aravrajesh0,
			image1: aravrajesh1,
			position: "Junior Advisor",
			major: "Econ & Statistics 2027",
			ID: 130,
			url: "https://www.linkedin.com/in/arav-rajesh/",
		},
		{
			name: "Joy Ren",
			image0: joyren0,
			image1: joyren1,
			position: "Junior Advisor",
			major: "CS & Public Policy 2027",
			ID: 123,
			url: "https://www.linkedin.com/in/joyxren/",
		},
		{
			name: "Archan Senthilvanan",
			image0: archansenthilvanan0,
			image1: archansenthilvanan1,
			position: "Junior Advisor",
			major: "BBA 2027",
			ID: 139,
			url: "https://www.linkedin.com/in/archan-senthilvanan/",
		},
		{
			name: "Natasha Shimon",
			image0: natashashimon0,
			image1: natashashimon1,
			position: "Junior Advisor",
			major: "Data Science 2027",
			ID: 126,
			url: "https://www.linkedin.com/in/natasha-shimon-10676b249/",
		},
		{
			name: "Anish Thatiparthi",
			image0: anishthatiparthi0,
			image1: anishthatiparthi1,
			position: "Junior Advisor",
			major: "BBA 2027",
			ID: 133,
			url: "https://www.linkedin.com/in/anish-thatiparthi/",
		},
		{
			name: "Aditi Vadakath",
			image0: aditivadakath0,
			image1: aditivadakath1,
			position: "Junior Advisor",
			major: "BBA 2027",
			ID: 116,
			url: "https://www.linkedin.com/in/aditi-vadakath/",
		},
		{
			name: "Ava Kurtz",
			image0: avakurtz1,
			image1: avakurtz0,
			url: "https://www.linkedin.com/in/ava-kurtz-/",
			ID: 135,
			position: "Senior Advisor",
			major: "Econ 2026",
		}, 
		{
			name: "Saathvik Hari",
			image0: saathvikhari0,
			image1: saathvikhari1,
			position: "Senior Advisor",
			major: "Econ & Data Science 2026",
			ID: 111,
			url: "https://www.linkedin.com/in/saathvik-hari/",
		},
		{
			name: "Sydney Gaynor",
			image0: sydneygaynor0,
			image1: sydneygaynor1,
			position: "Senior Advisor",
			major: "BBA 2026",
			ID: 137,
			url: "https://www.linkedin.com/in/sydney-gaynor/",
		}, 
		{
			name: "Niyati Kashyap",
			image0: niyatikashyap0,
			image1: niyatikashyap1,
			position: "Senior Advisor",
			major: "Data Science 2026",
			ID: 131,
			url: "https://www.linkedin.com/in/niyati-kashyap/",
		},
		{
			name: "Min-Seok Kim",
			image0: minseokkim0,
			image1: minseokkim1,
			position: "Senior Advisor",
			major: "BBA 2026",
			ID: 107,
			url: "https://www.linkedin.com/in/min-seok-kim-6a7245252/",
		},
		{
			name: "Eva Kumer",
			image0: evakumer0,
			image1: evakumer1,
			position: "Senior Advisor",
			major: "BBA 2026",
			ID: 110,
			url: "https://www.linkedin.com/in/evakumer/",
		},
		{
			name: "Leo Leone",
			image0: leoleone0,
			image1: leoleone1,
			position: "Senior Advisor",
			major: "BBA & Information Analytics 2026",
			ID: 106,
			url: "https://www.linkedin.com/in/leo-leone-792515223/",
		},
		{
			name: "Zafir Maker-Agha",
			image0: zafirmakeragha0,
			image1: zafirmakeragha1,
			position: "Senior Advisor",
			major: "BBA & Sustainability 2026",
			ID: 121,
			url: "https://www.linkedin.com/in/zafir-maker-agha/",
		},
		{
			name: "Yaseen Metwally",
			image0: yaseenmetwally0,
			image1: yaseenmetwally1,
			position: "Senior Advisor",
			major: "BBA & Chemical Engineering 2026",
			ID: 5,
			url: "https://www.linkedin.com/in/yaseen-metwally-745067216/",
		},
		{
			name: "Prah Pant",
			image0: prahpant0,
			image1: prahpant1,
			position: "Senior Advisor",
			major: "BBA 2026",
			ID: 104,
			url: "https://www.linkedin.com/in/prahpant/",
		},
		{
			name: "Siri Pattipati",
			image0: siripattipati0,
			image1: siripattipati1,
			position: "Senior Advisor",
			major: "BBA 2026",
			ID: 134,
			url: "https://www.linkedin.com/in/siri-pattipati-87a155216/",
		},
		{
			name: "Ilakiya Rajaguru",
			image0: ilakiyarajaguru0,
			image1: ilakiyarajaguru1,
			position: "Senior Advisor",
			major: "BBA 2026",
			ID: 4,
			url: "https://www.linkedin.com/in/ilakiya-rajaguru-9a9530232/",
		},
		{
			name: "Sophie Richards",
			image0: sophierichards0,
			image1: sophierichards1,
			position: "Senior Advisor",
			major: "BBA 2026",
			ID: 109,
			url: "https://www.linkedin.com/in/sophrich/",
		},
		{
			name: "Amory Tin",
			image0: amorytin0,
			image1: amorytin1,
			position: "Senior Advisor",
			major: "BBA 2026",
			ID: 105,
			url: "https://www.linkedin.com/in/amory-tin/",
		},
		{
			name: "Azra Tokovic",
			image0: azratokovic0,
			image1: azratokovic1,
			url: "https://www.linkedin.com/in/azra-tokovic/",
			ID: 136,
			position: "Senior Advisor",
			major: "BBA 2026",
		},
		{
			name: "Jessica Tran",
			image0: jessicatran0,
			image1: jessicatran1,
			position: "Senior Advisor",
			major: "BBA 2026",
			ID: 112,
			url: "https://www.linkedin.com/in/jessica-tran-39582a205/",
		},
		{
			name: "Julia Zhang",
			image0: juliazhang0,
			image1: juliazhang1,
			position: "Senior Advisor",
			major: "BBA 2026",
			ID: 108,
			url: "https://www.linkedin.com/in/julia-m-zhang/",
		},
	];

	return (
		<SectionContainer>
<PositionContainer>
		<SmallSpacer />
		<TextContainer>
			<TitleText style={{ marginLeft: "2vmin" }}>
				Executive Board
			</TitleText>
		</TextContainer>

		<NewLine />

		{/* president on top row alone */}
		<a
			href={eboardData[0].url}
			target="_blank"
			style={{ textDecoration: "none" }}
		>
			<CardContainer style={{ margin: "0 auto" }}>
				<CardImage
					style={{
						backgroundImage: `url(${eboardData[0].image0})`,
					}}
				/>
				<CardImageHover
					onMouseEnter={() => setHoverID2(eboardData[0].ID)}
					onMouseLeave={() => setHoverID2(0)}
					style={{
						opacity: hoverID2 === eboardData[0].ID ? "100%" : "0%",
						backgroundImage: `url(${eboardData[0].image1})`,
					}}
				/>
				<NewLine />
				<TextContainer>
					<CardTitle>{eboardData[0].name}</CardTitle>
					<TinySpacer />
					<CardHeader>
						{hoverID2 === eboardData[0].ID
							? eboardData[0].major
							: eboardData[0].position}
					</CardHeader>
				</TextContainer>
			</CardContainer>
		</a>
		<NewLine />

		<div
			style={{
				display: "flex",
				flexWrap: "wrap",
				justifyContent: "center",
				gap: "2rem",
			}}
		>
			{eboardData.slice(1).map((data) => (
				<a
					key={data.ID}
					href={data.url}
					target="_blank"
					style={{ textDecoration: "none" }}
				>
					<CardContainer>
						<CardImage
							style={{
								backgroundImage: `url(${data.image0})`,
							}}
						/>
						<CardImageHover
							onMouseEnter={() => setHoverID2(data.ID)}
							onMouseLeave={() => setHoverID2(0)}
							style={{
								opacity: hoverID2 === data.ID ? "100%" : "0%",
								backgroundImage: `url(${data.image1})`,
							}}
						/>
						<NewLine />
						<TextContainer>
							<CardTitle>{data.name}</CardTitle>
							<TinySpacer />
							<CardHeader>
								{hoverID2 === data.ID
									? data.major
									: data.position}
							</CardHeader>
						</TextContainer>
					</CardContainer>
				</a>
			))}
		</div>
	</PositionContainer>
		
			<PositionContainer>
				<SmallSpacer />
				<TextContainer>
					<TitleText style={{ marginLeft: "2vmin" }}>
						Project Managers
					</TitleText>
				</TextContainer>
				<NewLine />
				{managerData.map((data) => (
					<a
					href={data.url}
					target="_blank"
					style={{ textDecoration: "none" }}
					>
						<CardContainer>
							<CardImage
								style={{ backgroundImage: `url(${data.image0})` }}
							/>
							<CardImageHover
								onMouseEnter={() => setHoverID2(data.ID)}
								onMouseLeave={() => setHoverID2(0)}
								style={{
									opacity: hoverID2 === data.ID ? "100%" : "0%",
									backgroundImage: `url(${data.image1})`,
								}}
							/>
							<NewLine />
							<TextContainer>
								<CardTitle>{data.name}</CardTitle>
								<TinySpacer />
								<CardHeader>
										{hoverID2 === data.ID ? data.major : data.position}
									</CardHeader>

								<CardHeaderHover
									onMouseEnter={() => setHoverID2(data.ID)}
									onMouseLeave={() => setHoverID2(0)}
									style={{
										backgroundImage: `url(${data.image1})`,
									}}
								/>
							</TextContainer>
						</CardContainer>
					</a>
				))}
			</PositionContainer>
			<PositionContainer>
				<SmallSpacer />
				<TextContainer>
					<TitleText style={{ marginLeft: "2vmin" }}>
						Business Analysts
					</TitleText>
				</TextContainer>
				<NewLine />
				{analystData.map((data) => (
					<a
						href={data.url}
						target="_blank"
						style={{ textDecoration: "none" }}
					>
						<CardContainer>
							<CardImage
								style={{
									backgroundImage: `url(${data.image0})`,
								}}
							/>
							<CardImageHover
								onMouseEnter={() => setHoverID2(data.ID)}
								onMouseLeave={() => setHoverID2(0)}
								style={{
									opacity:
										hoverID2 === data.ID ? "100%" : "0%",
									backgroundImage: `url(${data.image1})`,
								}}
							/>
							<NewLine />
							<TextContainer>
								<CardTitle>{data.name}</CardTitle>
								<TinySpacer />
								<CardHeader>
                    				{hoverID2 === data.ID ? data.major : data.position}
                				</CardHeader>

							<CardHeaderHover
								onMouseEnter={() => setHoverID2(data.ID)}
								onMouseLeave={() => setHoverID2(0)}
								style={{
									backgroundImage: `url(${data.image1})`,
								}}
                			/>
							</TextContainer>
						</CardContainer>
					</a>
				))}
			</PositionContainer>

			<PositionContainer>
				<SmallSpacer />
				<TextContainer>
					<TitleText style={{ marginLeft: "2vmin" }}>
						Advisors
					</TitleText>
				</TextContainer>
				<NewLine />
				{seniorData.map((data) => (
					<a
						href={data.url}
						target="_blank"
						style={{ textDecoration: "none" }}
					>
						<CardContainer>
							<CardImage
								style={{
									backgroundImage: `url(${data.image0})`,
								}}
							/>
							<CardImageHover
								onMouseEnter={() => setHoverID2(data.ID)}
								onMouseLeave={() => setHoverID2(0)}
								style={{
									opacity:
										hoverID2 === data.ID ? "100%" : "0%",
									backgroundImage: `url(${data.image1})`,
								}}
							/>
							<NewLine />
							<TextContainer>
								<CardTitle>{data.name}</CardTitle>
								<TinySpacer />
								<CardHeader>
                    				{hoverID2 === data.ID ? data.major : data.position}
                				</CardHeader>

							<CardHeaderHover
								onMouseEnter={() => setHoverID2(data.ID)}
								onMouseLeave={() => setHoverID2(0)}
								style={{
									backgroundImage: `url(${data.image1})`,
								}}
                			/>
							</TextContainer>
						</CardContainer>
					</a>
				))}
			</PositionContainer>
		</SectionContainer>
	);
}

export default RosterSection;
