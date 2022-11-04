import React from 'react'
import './header.css'
import CTA from './CTA'

import HeaderSocials from './HeaderSocials'

function Header(){
  return (
    
        <div className="container header_container">
<h5>Hello I'm</h5>
<h1>VIRU PAL</h1>
<h5 className='text-light'>Fullstack Developer</h5>
<CTA />
<HeaderSocials />

<a href='#contact' className='scroll_down'>Scroll Down</a>
        </div>
    
  );
}

export default Header;