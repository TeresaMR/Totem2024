import { Tile, Link, TileBelowTheFoldContent, ExpandableTile, UnorderedList, ListItem, Column} from '@carbon/react';
import "/src/css/app.css"
import email from '/src/assets/email.svg'
import linkedin from '/src/assets/linkedin.svg'

import "/src/ibm-plex.css"

const tileStyle = {
  "padding": "0px",
  
  // Otros estilos necesarios
};

const imgStyle = {
  "padding-right":"4px",
}

const CardFicha = ({nombre,img,correo,universidad,carrera,link,cargo}) => {
  return <div className='cardFicha'><Tile style={tileStyle} className="cds--tile" id="tile-1" >
  <img className="imge" src={img} alt="No disponible" width="100%" height="100%" />
  
  <div className="descripcionFicha">
    <h6 className='CardNombre'>{nombre}</h6>
    <Link> 
      <img style={ imgStyle}  src={email} className="correo" alt="Ícono SVG" width="18" height="18"/>
      <font size='1'>{correo}</font>
    </Link>
    <br></br>
    <Link>
      <img style={ imgStyle}  src={linkedin} className="linkedin" alt="Ícono SVG" width="18" height="18"/>
      <font size='1'>{link}</font>
    </Link>
  </div>
  
    <ExpandableTile  id="expandable-tile-1" tileCollapsedIconText="Interact to Expand tile" tileExpandedIconText="Interact to Collapse tile">
      <div className='verMas'>
      Sobre mí
      </div>
      
      <TileBelowTheFoldContent>
        <div style={{
          padding: "0%",
          height: "100px",
          "padding-bottom":"12pc"
      }}>
      <UnorderedList>
        <br></br>
        <ListItem>{universidad}</ListItem>
        <ListItem>{carrera}</ListItem>
        <ListItem>{cargo}</ListItem>
      </UnorderedList>

      </div>
      </TileBelowTheFoldContent>
      
    </ExpandableTile>


</Tile>
</div>}


export default CardFicha;