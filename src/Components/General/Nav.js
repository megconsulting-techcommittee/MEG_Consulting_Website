import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../../Images/Home/logo1.png";
import logo1 from "../../Images/Home/logo2.png";
import { useRef, useLayoutEffect, useState, useEffect, useCallback } from "react";
import { BsList } from "react-icons/bs"

const api = {
  key: "496b8228423df44de2d6d782eb53fb6d",
  base: "https://api.openweathermap.org/data/2.5"
};

const LogoContainer = styled.div`
  color: #1e1e1e;
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  height: auto;
  width: 30vw;
  max-height: 100px;
  min-width: 250px;
  margin: 0;
  padding: 0;
`;

const NavContainer = styled.div`
  position: fixed;
  top: 0vw;
  left: 0vw;
  padding-left:2vw;
  padding-right:2vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 96vw;
  height:15vh;
  padding-bottom: 10vh;
  z-index:1000;
  transition: transform 1s, padding-bottom 1s, background-color 1s;
`;

const NavSelectionContainer = styled.div`
  display: flex;
  height: fit-content;
  width: fit-content;
  color: #1e1e1e;
  @media (max-aspect-ratio: 650/870) {
    visibility:hidden;
    width:0;
  }
`;

const NavTextContainer = styled.div`
  margin-right: 2vw;
`;

const NavText = styled.div`
  font-family: futura-pt, sans-serif;
  margin: 0;
  padding: 0;
  font-size: 3vmin;
  font-weight: 400;
`;

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  background-color: transparent;
  @media (min-aspect-ratio: 650/870) {
    display:none;
  }
`

const DropdownLink = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  background-color: rgba(255,255,255,0.8);

  &:hover {
    background-color: rgba(255,255,255,0.8);
    cursor: pointer;
  }
`

const DropdownButton = styled.button`
  padding: 16px;
  font-size: 16px;
  border: none;
  background-color: transparent;
`

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  right:0;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  font-family: futura-pt, sans-serif;

  ${DropdownContainer}:hover & {
    display: block;
  }
`

const isBrowser = typeof window !== `undefined`

function getScrollPosition({ element, useWindow }) {
  if (!isBrowser) return { x: 0, y: 0 }

  const target = element ? element.current : document.body
  const position = target.getBoundingClientRect()

  return useWindow
    ? { x: window.scrollX, y: window.scrollY }
    : { x: position.left, y: position.top }
}

export function useScrollPosition(effect, deps, element, useWindow, wait) {
  const position = useRef(getScrollPosition({ useWindow }))

  let throttleTimeout = null

  const callBack = () => {
    const currPos = getScrollPosition({ element, useWindow })
    effect({ prevPos: position.current, currPos })
    position.current = currPos
    throttleTimeout = null
  }

  useLayoutEffect(() => {
    const handleScroll = () => {
      if (wait) {
        if (throttleTimeout === null) {
          throttleTimeout = setTimeout(callBack, wait)
        }
      } else {
        callBack()
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, deps)
}

function Nav(props) {
  const [data, setData] = useState(undefined);
  const [error, setError] = useState(undefined);

  const [hideOnScroll, setHideOnScroll] = useState(0);
  const [hoverNav, setHoverNav] = useState(0);

  const [y,
    setY] = useState(document.scrollingElement.scrollHeight);
  const [scrollDirection,
    setScrollDirection] = useState("you have not scrolled yet");

  const [delayHandler, setDelayHandler] = useState(null);

  const handleNavigation = useCallback((e) => {

    if (y > window.scrollY) {
      setScrollDirection(1);
      setDelayHandler(setTimeout(() => {
        setScrollDirection(0);
      }, 2000))
    }
    else if (y < window.scrollY) {
      setScrollDirection(0);
    }
    clearTimeout(delayHandler);
    setY(window.scrollY);
  }, [y]);

  useEffect(() => {

    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);


  function vh(v) {
    var h = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0
    );
    return -1 * (v * 100) / h;
  }

  useScrollPosition(({ currPos }) => {
    var body = document.body,
      html = document.documentElement;

    var height = Math.max(body.scrollHeight, body.offsetHeight,
      html.clientHeight, html.scrollHeight, html.offsetHeight);
    var pos = currPos.y
    if (vh(pos) >= 75) { setHideOnScroll(1) }
    else { setHideOnScroll(0) }
  }, [hideOnScroll])


  useEffect(() => {
    // call an API and in the success or failure fill the data buy using setData function
    // it could be like below
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=42.2808&lon=-83.7430&units=imperial&appid=${api.key}`
    )
      .then((res) => res.json())
      .then((result) => {
        setData(Math.round(result.main.temp));
      })
      .catch((err) => setError(err));
  }, []);

  const logos = [logo, logo1];

  const getCurrentDate = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];

    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${date} ${month} ${year}`;
  };

  return (
    <NavContainer style={{ transform: (hideOnScroll !== 1) || (hoverNav) || (scrollDirection) ? "translateY(0vh)" : "translateY(-15vh)", paddingBottom: (hideOnScroll !== 1) || (hoverNav) || (scrollDirection) ? "0vh" : "10vh", backgroundColor: (vh(y) < -150) && (hoverNav) && props.home && document.documentElement.scrollTop ? "rgba(255,255,255,0.8)" : "transparent" }} onMouseOver={() => { setHoverNav(1) }} onMouseOut={() => { setHoverNav(0) }}>
      <Link to="/">
        <LogoContainer >
          <LogoImage src={logos[props.color]} />
        </LogoContainer>
      </Link>
      <NavSelectionContainer
        style={{
          color: props.color ? "white" : "#1e1e1e",
          display: props.home ? "felx" : "none",
        }}
      >
        <Link to="/about" style={{ textDecoration: "none", color: "#1e1e1e" }}>
          <NavTextContainer>
            <NavText>About Us</NavText>
          </NavTextContainer>
        </Link>
        <Link
          to="/projects"
          style={{ textDecoration: "none", color: "#1e1e1e" }}
        >
          <NavTextContainer>
            <NavText>Clients</NavText>
          </NavTextContainer>
        </Link>
        <Link to="/team" style={{ textDecoration: "none", color: "#1e1e1e" }}>
          <NavTextContainer>
            <NavText>Our Team</NavText>
          </NavTextContainer>
        </Link>
        <Link to="/application" style={{ textDecoration: "none", color: "#1e1e1e" }}>
          <NavTextContainer>
            <NavText>Application</NavText>
          </NavTextContainer>
        </Link>
        <a href="https://themmsi.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "#1e1e1e" }}>
          <NavTextContainer>
            <NavText>MMSI</NavText>
          </NavTextContainer>
        </a>
      </NavSelectionContainer>

      <NavSelectionContainer
        style={{
          color: props.color ? "#DBBDD3" : "#1e1e1e",
          display: !props.home ? "flex" : "none"
        }}
      >
        <NavTextContainer>
          <NavText>Ann Arbor MI</NavText>
        </NavTextContainer>
        <NavTextContainer>
          <NavText>|</NavText>
        </NavTextContainer>
        <NavTextContainer>
          <NavText>{data}&#176;F</NavText>
        </NavTextContainer>
        <NavTextContainer>
          <NavText>|</NavText>
        </NavTextContainer>
        <NavTextContainer>
          <NavText>{getCurrentDate(new Date())}</NavText>
        </NavTextContainer>
      </NavSelectionContainer>

      <DropdownContainer
        style={{
          color: props.color ? "white" : "#1e1e1e",
          display: props.home ? "felx" : "none"
        }}>
        <DropdownButton>
          <BsList size={20} />
        </DropdownButton>
        <DropdownContent>
          <Link to="/about" style={{ textDecoration: "none", color: "#1e1e1e" }}>
            <DropdownLink>About Us</DropdownLink>
          </Link>
          <Link to="/projects" style={{ textDecoration: "none", color: "#1e1e1e" }}>
            <DropdownLink>Our Projects</DropdownLink>
          </Link>
          <Link to="/team" style={{ textDecoration: "none", color: "#1e1e1e" }}>
            <DropdownLink>Our Team</DropdownLink>
          </Link>
          <Link to="/application" style={{ textDecoration: "none", color: "#1e1e1e" }}>
            <DropdownLink>Application</DropdownLink>
          </Link>
          <a href="https://themmsi.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "#1e1e1e" }}>
            <DropdownLink>MMSI</DropdownLink>
          </a>
        </DropdownContent>
      </DropdownContainer>

    </NavContainer>
  );
}

export default Nav;