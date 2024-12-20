import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import MyHeader from './Myheader';


function toggleMenu(){
  console.log("Hello")
}
const Factbox = (props)=>{
  return <div className='factbox'>
          <p className=''>{props.question}</p>
          
          <p className=''><b>{props.answer}</b></p>
          </div>
  }
const RSVP = (props)=>{
  return (<table className='rsvpdata'>
      <tr>
        <td className='rsvpname'>{props.name}</td>
        <td className='rsvpphone'>{props.number}</td>
      </tr>
    </table>)
}
 
function Home() {
  
  const handleClick = () => {
    alert('Button clicked!');
  };
  return (
    <div className="Home">

     <MyHeader/>
     <div className="banner-div" style={{marginBottom:0}} >
      {/* <img className="banner" src="images/title.png" />  */}
      <br/> 
      {/* <img className="banner" src="images/azkar-a.png" /> */}
      <img className="new-banner" src="images/wedding_banner.png" />

     </div>
     <div className='eventdate'>
      <span className='datecontent'>Sunday, 22nd of December, 2024</span>
      </div>
      <br/><br/>
      <div id="moments" className='moments'>
      <br/><br/><br/><br/>
        <h1 className='momentsHeader'>Our Moments</h1>
        <img className="moments-image" src="images/grid-image-long.png" width="80%" />
      </div>
      <div className='funfacts-div' >
      <h1 className='alex center-text'>Fun Facts</h1>
      {/* <div className='factbox'>
        <p className=''>What’s the Couple’s favourite meal?</p>
        <p className=''><b>Yam & Egg</b></p>
        </div>

        <div className='factbox'>
        <p className=''>What’s the Couple’s favourite meal?</p>
        <p className=''><b>Yam & Egg</b></p>
        </div> */}
        <br/><br/>
        {/* <Factbox {...{question:"What’s the Couple’s favourite meal?", answer:"Dee"}} /> */}
        <div id='facts' className=' myflex' >
        <div  className='myflex'><Factbox  question="What’s the Couple’s favourite meal?" answer="Yam & Egg" /></div>
        <div  className='myflex'><Factbox  question="Where did you get engaged?" answer="In the room" /></div>
        <div  className='myflex'><Factbox  question="What’s your favourite activity together?" answer="Playing Ludo & Mortal Kombat" /></div>
        </div>
        <div  className=' myflex '>
        <div  className='myflex'><Factbox question="What’s your Favourite Movie?" answer="Trouble (Netflix)" /></div>
        <div  className='myflex'><Factbox question="Do you have a favourite music?" answer="I Love You by TayC & Dadju" /></div>
        </div>

        
      </div>
      <div>
      <h1 id="directions" className='alex center-text'>Directions</h1>
      {/* <div class="mapouter"><div class="gmap_canvas"> */}
        <div className='myflex'>
        <iframe class="gmap_iframe" width="95%" height="400px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=699&amp;height=392&amp;hl=en&amp;q=labamba hotel&amp;t=&amp;z=9&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
        </div>
      {/* <a href="https://embed-googlemap.com">embed google maps in website</a>
      </div>
      <style>.mapouter{position:relative;text-align:right;width:100%;height:392px;}.gmap_canvas {overflow:hidden;background:none!important;width:100%;height:392px;}.gmap_iframe {height:392px!important;}</style>
      </div> */}
      
      </div>
      <br/><br/>
      <div>
        <h1  id='events' className='alex center-text'>Order of Event</h1>
        <table className='event'>
          <tr>
            <td className='eventnumber'> <div className='number'>1</div></td>
            <td className='eventitem'>Opening Prayer</td>
          </tr>
          <tr>
            <td className='eventnumber'> <div className='number'>2 </div></td>
            <td  className='eventitem'>Recitation from the Glorious Quran</td>
          </tr>
          <tr>
            <td className='eventnumber'> <div className='number'>3 </div></td>
            <td  className='eventitem'>Introduction of the bride’s Families</td>
          </tr>
          <tr>
            <td className='eventnumber'> <div className='number'>4 </div></td>
            <td  className='eventitem'>Introduction of the groom’s Families</td>
          </tr>
          <tr>
            <td className='eventnumber'> <div className='number'>5 </div></td>
            <td  className='eventitem'>Introduction of the groom</td>
          </tr>
          <tr>
            <td className='eventnumber'> <div className='number'>6 </div></td>
            <td  className='eventitem'>Introduction of the bride</td>
          </tr>
          <tr>
            <td className='eventnumber'> <div className='number'>7 </div></td>
            <td  className='eventitem'>Lecture 1 (For the couple)</td>
          </tr>
          <tr>
            <td className='eventnumber'> <div className='number'>8 </div></td>
            <td  className='eventitem'>Gifts for the Couple</td>
          </tr>
          <tr>
            <td className='eventnumber'> <div className='number'>9 </div></td>
            <td  className='eventitem'>Nikkah (Solemnization of the Couple)</td>
          </tr>
          <tr>
            <td className='eventnumber'> <div className='number'>10 </div></td>
            <td  className='eventitem'>Lecture 2 (For the Families)</td>
          </tr>
          <tr>
            <td className='eventnumber'> <div className='number'>11 </div></td>
            <td  className='eventitem'>Special prayer for the couple</td>
          </tr>
          <tr>
            <td className='eventnumber'> <div className='number'>12 </div></td>
            <td  className='eventitem'>Vote of Thanks & Closing Prayer</td>
          </tr>
          <tr>
            <td className='eventnumber'> <div className='number'>13 </div></td>
            <td  className='eventitem'>Reception</td>
          </tr>

        </table>
      </div>
      <br/><br/>
      <div className='center-div' >
        <h1 className='alex center-text'>R.S.V.P</h1>
      
      <RSVP name="FATIA" number="09018142072" />
      <RSVP name="LATEEF" number="08137978117" />
      </div>

      <div className='center-div'>
        <p>#Azkar’24</p>
      </div>
    </div>
  );
}

export default Home;
