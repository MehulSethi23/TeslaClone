import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

function Section({ title, desc, lbtntext, rbtntext, backimg }) {
  const fed = desc;
  console.log(fed);
  return (
    <Wrap newbg={backimg}>
      <Fade bottom>
        <Itemtext>
          <h1>{title}</h1>
          <p>{desc}</p>
        </Itemtext>
      </Fade>

      <Button>
        <Fade bottom>
          <Buttongrp>
            <Leftbutton>{lbtntext}</Leftbutton>
            {rbtntext && <Rightbutton>{rbtntext}</Rightbutton>}
          </Buttongrp>
        </Fade>
        {rbtntext && <Downarrow src="/images/down-arrow.svg"></Downarrow>}
      </Button>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  z-index: 10;
  display: flex;
  width: 100vw;
  height: 100vh;
  background-image: ${(props) => `url(${props.newbg})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const Itemtext = styled.div`
  padding-top: 15vh;
  text-align: center;
  z-index: -1;
`;
const Buttongrp = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Leftbutton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
  font-family: "Encode Sans SC", sans-serif;
`;
const Rightbutton = styled(Leftbutton)`
  background-color: white;
  opacity: 0.65;
  color: black;
`;

const Downarrow = styled.img`
  height: 40px;
  animation: animatedown infinite 1.5s;
  overflow-x: hidden;
`;
const Button = styled.div``;
