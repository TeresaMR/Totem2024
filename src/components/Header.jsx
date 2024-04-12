import { Header, HeaderName } from '@carbon/react';
import "/src/css/header.css"

const MyHeader = () => {
    return <div className='divHeader'>
      <Header className='CardNombre'>

      <HeaderName href="/" prefix="IBM">
        Technology
      </HeaderName>
    </Header>

    </div>
    
  }

  export default MyHeader;