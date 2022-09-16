import {useRef} from 'react';
import './Body.css';
import Navbar from './Navbar';
import Slide from './slide';


import facebook from '../images/facebook.svg';
import twitter from '../images/twitter.svg';
import linkedin from '../images/linkedin.svg';
import down from '../images/down.gif';
import person from '../images/person.png';




function Body() {

  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };
  
  return (
    <div>
        
<div class="section-1 box">
  <Navbar/>

  <div class='list'>
    <div className='h2' id='myDIV'>CLASS ROOM</div>
    <div className='h3' id='myDIV'>Lets go...........our class</div>
    <div className='h4' id='myDIV'>Classroom allows instructors to archive courses at the end of a term or year. When a course is archived, it is removed from the homepage and placed in the Archived Classes area to help teachers keep their current classes organized. When a course is archived, teachers and students can view it, but won't be able to make any changes to it until it is restored</div>
    <a href="#"><img src={facebook} className='icon-list' style={{right:'5vw'}} alt="fb"/></a>    
    <a href="#"><img src={twitter} className='icon-list' style={{right:'10vw'}} alt="tw"/></a>    
    <a href="#"><img src={linkedin} className='icon-list' style={{right:'15vw'}} alt="in"/></a>
    <img src={person} alt="person"  style={{ right:'60vw',top:'23.4vw',float:'right',width:'40vw',position:'absolute'}}/>
  </div>
  <center><button style={{backgroundColor:'transparent',borderColor:'transparent'}} onClick={handleClick} ><img src={down} style={{width:'5vw',top:'38vw',position:'absolute'}}/></button></center>
</div>

<div className="section-2 box" ref={ref}><div style={{width:'90%',margin:'auto'}}>

<button className='button1'>Mathematics</button>
<button className='button1'>Science</button><br/><br/><br/><br/><br/><br/>

<Slide/>	<br/><br/><br/><br/><br/><br/>
<div style={{textAlign:'center'}}>
  <span class="dot1"></span>
  <span class="dot1"></span>
  <span class="dot1"></span>
  <span class="dot1"></span>
</div>
  </div>

</div>

    </div>
  );
}

export default Body;