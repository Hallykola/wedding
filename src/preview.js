import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import MyHeader from './Myheader';

import {StaggeredAlignment,StaggeredGrid,StaggeredGridItem,StaggeredGridItemFunctional,StaggeredItemSpan} from "react-staggered-grid";
import ImageButtons from './components/image-buttons';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';



function Preview() {
  var imageSrc = localStorage.getItem('image') ;
  var uploadURL = "https://gallery.varsityreghub.com/saveimage"

  const [isActive, setIsActive] = useState(false);
  const [myform, setForm] = useState({});

  const Gimage = (props)=>{
    return (  <div className="gallery-image-div">
      <img className="gallery-image" src={props.location} /> 
      <div className='gallery-image-button'><span>Delete</span></div>
      </div>)
  }
  const handleUpload = ()=>{
    if (imageSrc === null || imageSrc.trim() === "") {
      console.log("This is an empty string!");
      toast("Image is missing")
      window.location.href = '/azkar/gallery'
    }
    
    var data = {image:imageSrc, link:"",
    tags:myform.tag,
    type:"",
    description:myform.description};
      // console.log("see me",baseURL,data);
      axios.post(uploadURL,data,{headers: {
        // 'token': `${this.atoken}`
      }}
        ).then((response) => {
        // console.log(response);
        localStorage.setItem('image',"");
        window.location.href = '/azkar/gallery'
    
      }).catch((e)=>{
        // console.log(e.response)
        // window.location.href = '/'
        if(e.response.data['error']){
          toast(e.response.data['error']);
        }else{
          for (let a in e.response.data){
            toast('A technical error occured');
            // toast(e.response.data[a.toString()][0]);
            console.log(e.response.data[a.toString()][0]);
            console.log(e.response.data);
           }
        }
    })
   }

   const handleinput= (e)=>{
    const newmyform = myform;
    newmyform[e.target.name] = e.target.value;
    setForm(newmyform);
    
  }

  const toggleClass = () => {
    setIsActive(!isActive);
  };
 var items = ["images/g-a.png","images/g-b.png","images/g-c.png",
  "images/g-d.png","images/g-e.png","images/g-f.png"];
  return (
    <div className="Gallery">
    <MyHeader/>
    <ToastContainer />
    <div className='preview'>
      {imageSrc && <img className="preview-image  " src={imageSrc} />}
      <form action="" method="post">
        <div className='row' style={{width:"100%",justifyContent:"center"}}>
      <div className="col-md-12">
                  <label for="inputname" className="form-label">Name</label>
                  <input type="text" className="form-control" id="inputname" onChange={handleinput} name="tag" 
                  
                   placeholder='type in your name here' required/>
                </div>
      <div className="col-md-12">
        <label for="inputcode" className="form-label">Delete Code</label>
        <input type="text" className="form-control" id="inputcode" onChange={handleinput} name="description" 
        
          placeholder='use a word you will remember' required/>
      </div>
      </div>
      </form>
      <br/><br/>
      <div className='upload-two-by-side'>
      {imageSrc && <div  id="cancel-button"  onClick={() => {window.location.href = '/azkar/gallery';}}><p>Cancel</p></div>}  

      {imageSrc && <div  id="upload-button" onClick={() => {handleUpload()}}> <img className="gallery-icon" src="images/gallery-icon.png" height="25px" /> <p>Upload Image</p></div>}
      </div>
      </div>
    </div>
  );
}

export default Preview;
