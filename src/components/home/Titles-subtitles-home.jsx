
import { Header, HeaderName, FlexGrid, Row, Column } from '@carbon/react';
import "/src/css/app.css"
import "/src/ibm-plex.css"

  
  const MyTitleHome = () => {
    return <h1 className="text-sans"
      dir="auto"
      style={{
        fontWeight: 600
      }}>
      Descubre nuestros proyectos
    </h1>
  }
  
  const MySubtitleHome = () => {
    return <h2 className="text-sans"
      dir="auto"
      style={{
        fontWeight: 300
      }}>Creando valor a través de la tecnología</h2>
  }
  
  
  
  const marginSubTitle = {
  
    "left-padding": 0,
    "right-padding": 0
  
  }
  
  const columnSubtitle = {
  
    "display": "flex",
    "align-items": "center",
  
  }
  
  const HomeDetails = () => {
  
    return <div className="subTitleDiv">
  
      <FlexGrid>
  
        <Row style={marginSubTitle}>
  
          <Column style={columnSubtitle} sm={2} md={6} lg={12}>
  
            <MyTitleHome />
  
          </Column>
  
          <Column sm={2} md={2} lg={4} style={{ "padding-right":"0%"}}>
  
            <div className="centerLogoPicture">

              <div className='doLab'>
              <img src="/src/IBM_logo®_rev_blue50_RGB.png" height="60%" width="60%"></img>
                <img src="/src/assets/dolab.png" height="55%" width="55%"></img>
                <br></br> 
              </div>
            </div>
  
          </Column>
  
        </Row>
  
        <Row>
  
          <Column md={8} lg={12}>
  
            <MySubtitleHome />
  
          </Column>
  
          <Column md={2} lg={3}>
  
          </Column>
  
        </Row>
  
      </FlexGrid>
  
    </div>
  
  }

  export {

    HomeDetails
};