import React from 'react';
import { Button, FlexGrid, Row, Column } from '@carbon/react';
import estilos from './Slider.module.css';
import "/src/css/slider.css"
import ReactPlayer from 'react-player';

function Slider({imagenes}){


    //Variables y estados
    const [imagenActual, setImagenActual] = React.
    useState(0);

    const cantidad = imagenes?.length;

    //Return para evitar errores
    if(!Array.isArray(imagenes) || cantidad == 0) 
    return;

    const siguienteImagen = () => {
        setImagenActual(imagenActual == cantidad-1 ? 0 : imagenActual+1);
    }

    const anteriorImagen = () => {
        setImagenActual(imagenActual == 0 ? cantidad-1 : imagenActual-1);
    }

    const BotonAnterior = () => {
    
        return (<Button className='boton-responsive' hasIconOnly onClick={anteriorImagen} kind="tertiary" >◀</Button>);
    }

    const BotonSiguiente = () => {
        return <Button hasIconOnly onClick={siguienteImagen} kind="tertiary">▶</Button>;
    }

    const gridStyles = {
        "padding-left": "0%",
        "padding-right": "0%"
    }

    const NumberCarrusel = () => {
        return <h6 className='text-sans'
        dir="auto"
        style={{
          fontWeight: 300
        }}>{imagenActual +1}/{imagenes.length}</h6>
        
    }

    return (
        <div className={estilos.container}>
            <FlexGrid style = {gridStyles}>


                    <br></br>
                    <br></br>
                    {imagenes.map((imagen, index) => {

                        var img = imagen.slice(-3);

                            return (
                                <div>
                                { imagenActual == index && (
                                    <img key={index} src={imagen} alt='imagen' width="100%" height="100%"/>
                                )}
                                </div>
                                );       
                    })}
                            
 
                <Row>      

                    <Column>

                    </Column>      
                                  
                    <Column sm={1} md={1} lg={1}>

                        <BotonAnterior/>

                    </Column>
                    <div className="divPadre">
                    <Column sm={1} md={1} lg={1}>
                            <NumberCarrusel />
                    </Column>
                    </div>
                    <Column sm={1} md={1} lg={1}>

                        <BotonSiguiente/>

                    </Column>

  
                    
                </Row>
            </FlexGrid>
            
            
            
        </div>
    );
}
export default Slider;