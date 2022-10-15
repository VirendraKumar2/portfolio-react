import React from 'react'
import './about.css'
import ME from '../../assets/me.jpeg'
import {FaAward} from 'react-icons/fa'
import {FiUser} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
<h5>Get To Know</h5>
<h2>About Me</h2>

<div className='container about_container'>
<div className="about_me">
<div className="about_me-image">
  <img src={ME} alt='about image' />
</div>

</div>
<div className="about_content">
<div className="about_cards">
  <article className="about_card">
    <FaAward className='about_icon'/>
    <h5>Experience</h5>
    <small>3+ Year Working</small>
  </article>

  <article className="about_card">
    <FiUser className='about_icon'/>
    <h5>Clients</h5>
    <small>200+ worldwide</small>
  </article>

  <article className="about_card">
    <VscFolderLibrary className='about_icon'/>
    <h5>Project</h5>
    <small>80+ Completed </small>
  </article>

</div>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
  Cum atque labore quisquam quod deleniti voluptatibus.
   Accusamus facilis consequuntur ullam et rerum porro dolores, a hic voluptatum quaerat! Animi, explicabo nobis.
   </p>

   <a href='#contact' className='btn btn-primary'>Let's Talk</a>
</div>

</div>

    </section>
  )
}

export default About