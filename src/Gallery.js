import logo from './logo.svg';
import './App.css';
import React, { useState,useEffect } from 'react';
import MyHeader from './Myheader';

import {StaggeredAlignment,StaggeredGrid,StaggeredGridItem,StaggeredGridItemFunctional,StaggeredItemSpan} from "react-staggered-grid";
import ImageButtons from './components/image-buttons';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';




function Gallery() {
  var imageBaseURL = "https://gallery.varsityreghub.com/galleryimage/"
  


  const Gimage = (props)=>{
    const goToDeleteImage =(name)=>{
      console.log("e dey press delete");
      localStorage.setItem('deletename',name);
        window.location.href = '/azkar/delete'

    }
    
    return (  <div className="gallery-image-div">
      <img className="gallery-image" src={props.location} /> 
      <div className='gallery-image-button' onClick={()=>{goToDeleteImage(props.name)}}><span>Delete</span></div>
      </div>)
  }

    
    const ChildComponent = (props) => {
      return <h2>Hello from the Child Component, {props.name}!</h2>;
    };

  const [isActive, setIsActive] = useState(false);
  const [dataItems, setDataItems] = useState([]);
  const [pagination, setPagination] = useState([]);
  const toggleClass = () => {
    setIsActive(!isActive);
  };
//  var items = ["images/g-a.png","images/g-b.png","images/g-c.png",
//   "images/g-d.png","images/g-e.png","images/g-f.png"];

useEffect(() => {
  // Code that should run before the component is fully rendered

  changePage(1);
  // Cleanup function (optional, runs when the component unmounts)
  return () => {
    console.log("Component is unmounting!");
  };
}, []);

const changePage = (pageNumber)=>{
  console.log("Page changed to:", pageNumber);
  var URL = `https://gallery.varsityreghub.com/images?limit=${10}&start=${pageNumber??1}`;

  axios.get(URL,{headers: {
    // 'token': `${this.atoken}`
  }}
    ).then((response) => {
     console.log(response);
    setDataItems(response.data.images)
    setPagination(response.data.pagination)
  }).catch((e)=>{
    console.log(e.response);

    if(e.response.data['error']){
      toast(e.response.data['error']);
    }else{
      for (let a in e.response.data){
        toast('A technical error occured');
        // toast(e.response.data[a.toString()][0]);
        // console.log(e.response.data[a.toString()][0]);
       }
    }

})
}

const getPageLinks = pages => {
  let content = [];
  for (let i = 0; i < pages; i++) {
    content.push( <span className={pagination.current_page == i+1 ? "active":""} onClick={()=>{changePage(i+1);}} key={i}> {i+1}</span>);
  }
  return content;
};

  return (
    <div className="Gallery">
    <MyHeader/>
    <ToastContainer />
     <div className="gallery-banner" style={{marginBottom:0}} >
      {/* <img className="banner" src="images/title.png" />  */}
      <img className="gallery-banner-image" src="images/gallery-banner.png" />

      <div className='myflex'>
      <div className='gallery-banner-divs '>
      <div><p className='gallery-title'><b>Share Your Favourite moments with everyone.</b></p></div>
      <div><p className='gallery-subtitle'>A dynamic, real-time photo-sharing experience where guests can upload and view photos taken during the celebration.</p></div>
      
      <ImageButtons />
      
      </div>
      </div>
     </div>
     
     <br/>
     <div className='center-div'>
        <p>Live Gallery</p>
       
      </div>


      <div class="image-grid">
        {dataItems.map((item, index) => (
          //  <img src={imageBaseURL+item.image} alt={"Placeholder Image 1"+index}/>
           <Gimage style={{width: "100%",height:"100%"}} location={imageBaseURL+item.image} name={item.image}/>
        // <StaggeredGridItem
        //     index={index}
        //     // spans={span}
        //     // style={{transition: "left 0.3s ease,top 0.3s ease"}}
        // >
        //     <Gimage style={{width: "100%",height:"100%"}} location={imageBaseURL+item.image} name={item.image}/>
        // </StaggeredGridItem>
    ))}
    </div>
    <div class="pagination">
        {(parseInt(pagination.current_page) > 1) && <span  onClick={()=>{changePage(parseInt(pagination.current_page)-1);}} > Prev</span>}
        {getPageLinks(pagination.total_pages)}
        {(parseInt(pagination.current_page)< pagination.total_pages) && <span  onClick={()=>{changePage(parseInt(pagination.current_page)+1);}} > Next</span>}
        {/* <a href="#">Next</a> */}
    </div>

      <div className='myflex'>

   
      {/* <div className='center-div'>
        <p>#Azkar’24</p>
      </div> */}
    </div>
    </div>
  );
}

export default Gallery;
