import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        desc="Order Online for Touchless Delivery"
        backimg="/images/model-s.jpg"
        lbtntext="Custom Order"
        rbtntext="Existing Inventory"
      />
      <Section
        title="Model Y"
        desc="Order Online for Touchless Delivery"
        backimg="/images/model-y.jpg"
        lbtntext="Custom Order"
        rbtntext="Existing Inventory"
      />
      <Section
        title="Model 3"
        desc="Order Online for Touchless Delivery"
        backimg="/images/model-3.jpg"
        lbtntext="Custom Order"
        rbtntext="Existing Inventory"
      />
      <Section
        title="Model X"
        desc="Order Online for Touchless Delivery"
        backimg="/images/model-x.jpg"
        lbtntext="Custom Order"
        rbtntext="Existing Inventory"
      />
      <Section
        title="Low Cost Solar Panel in America"
        desc="Money Back Guarantee"
        backimg="/images/solar-panel.jpg"
        lbtntext="Order Now"
        rbtntext="Learn More"
      />
      <Section
        title="Solar for New Roofs"
        desc="Solar Roof Costs Less Than a New Roof Plus Solar Pannels"
        backimg="/images/solar-roof.jpg"
        lbtntext="Order Now"
        rbtntext="Learn More"
      />
      <Section
        title="Accessories"
        desc=""
        backimg="/images/accessories.jpg"
        lbtntext="Order Now"
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
  z-index: 10;
`;
