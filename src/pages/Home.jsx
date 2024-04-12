//componente principal de react -> funciones exportadas
import { Fragment } from "react";
import { FlexGrid, Row, Column } from '@carbon/react';
import { HomeDetails } from "/src/components/home/Titles-subtitles-home.jsx"
import Card from "../components/home/Card.jsx"
import MyHeader from "../components/Header.jsx"

import "../css/home.css"
import {proyects} from "/src/projects.js"

const Cards = () => {
  return proyects.map((card) => {
    return (
      <Column sm={2} md={4} lg={8} xlg={8}>
        <div className="divCard">
          <br></br>
          <Card area={card.area} proyecto={card.proyecto} img={card.img} id={card.id} />
        </div>

      </Column>
    );
  });
}

const Home = () => {
  return (
    <Fragment>
      <MyHeader />


      <HomeDetails />
      <FlexGrid>
        <Row>
          <Cards />
        </Row>
      </FlexGrid>
    </Fragment>
  );
}


export default Home;