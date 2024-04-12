import { Fragment } from "react";
import { Link, FlexGrid, Row, Column } from '@carbon/react';
import { DetailsContent, VideoFrame } from "/src/components/details/Titles-subtitles-details.jsx"
import { useParams } from "react-router-dom";
import "/src/css/app.css"
import Slider from '/src/components/details/Sliders/Slider';

//import video from '/src/assets/WeatherHubDemo.mp4'
import Card from "/src/components/details/CardFicha.jsx"
//import Details from "./Details.jsx";
import { proyects, members } from "/src/projects.js";
import MyHeader from "../components/Header.jsx"
import { TituloVideo } from "../components/details/Titles-subtitles-details.jsx";



function CurrentId() {
  // Get the userId param from the URL.
  let { id } = useParams();
  // ...
  return id;
}

const Cards = () => {

  return members.map((card) => {
    return (
      <Column style={{ "padding-left":"0.5%", "padding-right":"0.5%"}} sm={2} md={2} lg={3} xlg={3}>
        <div className="divCardFicha">
          <Card nombre={card.nombre} img={card.foto} link={card.link} correo={card.correo} carrera={card.carrera} universidad={card.universidad} cargo={card.cargo} />
        </div>
      </Column>
    );
  });
}

const Component = () => {
  const ide = CurrentId();

  const result = () => {
    return proyects.find((project) => parseInt(project.id) === parseInt(ide));
  };

    if (result().video === undefined ) {
      return (
        <Slider imagenes={result().images} />
      )
    } else if (result().images === undefined ){
      return(
        <FlexGrid>
        <Row>
          <Column sm={4} md={8} lg={16}>
            <br></br>
            <br></br>
            <TituloVideo titulo={result().titulo} />
            <br></br>
            <br></br>
            <VideoFrame video={result().video} />
          </Column>
        </Row>
      </FlexGrid>
      )
    } else{
      return(
      
      <FlexGrid>
        <Slider imagenes={result().images} />
        <br></br>
        <br></br>
        lore
        
        <Row>
          <Column sm={4} md={8} lg={16}>
            <TituloVideo titulo={result().titulo} />
            <br></br>
            <br></br>
            <VideoFrame video={result().video} />
          </Column>
        </Row>
      </FlexGrid>
      )
    }
}



const Details = () => {

  const ide = CurrentId();

  const result = () => {
    return proyects.find((project) => parseInt(project.id) === parseInt(ide));
  };

  console.log(result());

  return (
    //Fragment nos permite incrustar codigo directamente
    <Fragment>

      <MyHeader />

      <FlexGrid>
        <Row>
          <Column >
            <Link href="javascript:history.back()">← Atrás</Link>
          </Column>

          <Column>

          </Column>

        </Row>
      </FlexGrid>

      <DetailsContent projectName={result().proyecto} desc_corta={result().desc_corta} desc={result().desc} area={result().area} contenido={result().contenido} />

      <br></br>


      <Component />

      <br></br>
      <br></br>
      <br></br>

      <FlexGrid>
        <Row>
          <Column sm={16} md={16} lg={16} xlg={16}>
            <h4>Conoce al equipo 2024</h4>
          </Column>
        </Row>
      </FlexGrid>
      <br></br>
      <br></br>
      <FlexGrid>
        <Row style= {{"justify-content":"center"}}>
          <Cards />
        </Row>
      </FlexGrid>
      <br></br>
      <br></br>
    </Fragment>
  );
}


export default Details;

export const loaderPost = async ({ params }) => {

  const res = await params.id;
  return { res };
};