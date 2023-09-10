import React from 'react'
import Menue from './Menue';
import About from './About';
import Booktable from './Booktable';
import Lowerbooktable from './Lowerbooktable';
import Carousels22 from './Carousels22';
import Footer from './Footer';
import Car0uselse11 from './Car0uselse11';

function Home() {
  return (
    <>
<div>
<Car0uselse11 />
</div>
<div>
<Carousels22 />
</div>
<div>
<Menue />
</div>
<div style={{ marginTop: '50px' }}>
<About />
</div>
<div style={{paddingTop: '20px'}}>
<Booktable />
</div>
<div>
<Lowerbooktable />
</div>
<div>
<Footer />  
</div>   
 </>
  )
}

export default Home;
