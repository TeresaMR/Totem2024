import { FlexGrid, Row, Column } from '@carbon/react';
import "/src/css/app.css"
import "/src/ibm-plex.css"
import ReactPlayer from 'react-player';


const MyTitle = ({ projectName }) => {
  return <h3 className="text-sans"
    dir="auto"
    style={{
      fontWeight: 300
    }}>

    {projectName}
  </h3>
}

const MySubtitle = ({ nombre }) => {
  return <h1 className="text-sans"
    dir="auto"
    style={{
      fontWeight: 600
    }}>{nombre}</h1>
}

const MyPersonContent = ({ desc_corta }) => {
  return <h6 className="text-sans"
    dir="auto"
    style={{
      fontWeight: 200
    }}>
    {desc_corta}
  </h6>
}

const MySubtitlecontent = ({ desc, desc_corta }) => {
  return <h3 className="text-sans"
    dir="auto"
    style={{
      fontWeight: 200
    }}>
    {desc}
  </h3>
}

const MyContent = ({ contenido }) => {
  return <h5 className="text-sans"
    dir="auto"
    style={{
      font: 300
    }}>
    <p className='text-justify'>{contenido}</p>
  </h5>
}

const marginSubTitle = {

  "left-padding": 0,
  "right-padding": 0

}

const columnSubtitle = {

  "display": "flex",
  "align-items": "center",

}

const DetailsContent = ({ projectName, area, contenido, desc, desc_corta }) => {

  return <div className="subTitleDiv">

    <FlexGrid>

      <Row style={marginSubTitle}>

        <Column style={columnSubtitle} sm={2} md={6} lg={12}>

          <MyTitle projectName={area} />

        </Column>

        <Column sm={2} md={2} lg={4}>
        </Column>

      </Row>

      <Row>

        <Column md={8} lg={12}>

          <MySubtitle nombre={projectName} />

        </Column>

        <Column md={2} lg={3}>
        </Column>

      </Row>


      <br />
      <br />
      <br />
      <hr className='Lindiv' />
      <br />
      <br />
      <br />

      <Row style={marginSubTitle}>

        <Column style={columnSubtitle} sm={4} md={8} lg={16}>

          <MySubtitlecontent desc={desc} desc_corta={desc_corta}/>


        </Column>
      </Row>
      <Row>



        <Column sm={4} md={8} lg={16}>
        <br></br>
        <br></br>
          <MyContent contenido={contenido} />
          <br></br>
          <MyPersonContent desc_corta={desc_corta} />

        </Column>
      </Row>

    </FlexGrid>

  </div>

}

const VideoFrame = ({ video }) => {
  return (

    <div className="contenedor">

      <ReactPlayer
        url={video}
        width='100%'
        height='100%'
        controls
        className="react-player" />

    </div>
  )
  
}


const TituloVideo = ({titulo}) => {
  return( <h3 className="text-sans"
    dir="auto"
    style={{
      fontWeight: 400
    }}>
    {titulo}
  </h3>
  )
}

export {

  DetailsContent,
  VideoFrame,
  TituloVideo
};