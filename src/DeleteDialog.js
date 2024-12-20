

import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import MyHeader from './Myheader';

import {StaggeredAlignment,StaggeredGrid,StaggeredGridItem,StaggeredGridItemFunctional,StaggeredItemSpan} from "react-staggered-grid";
import ImageButtons from './components/image-buttons';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';


function DeleteDialog() {
  // var deleteimage = localStorage.getItem('deleteimage') ;
  var deletename = localStorage.getItem('deletename');
  // var deletecode = deletename
  var imageBaseURL = "https://gallery.varsityreghub.com/galleryimage/"
  
  var imageSrc = imageBaseURL+deletename

  const [myform, setForm] = useState({});
  // const [deletecode, setDeleteCode] = useState("");
  

  const Gimage = (props)=>{
    return (  <div className="gallery-image-div">
      <img className="gallery-image" src={props.location} /> 
      <div className='gallery-image-button'><span>Delete</span></div>
      </div>)
  }

 const deleteImage = (delname)=>{
  var delcode = myform.code??""; 
  if (delcode === null || delcode.trim() === "") {
    console.log("Code is an empty string!");
    toast("Code is missing")
    // window.location.href = '/azkar/gallery'
  }
  var url = `https://gallery.varsityreghub.com/deleteimage/${deletename}/${delcode}`;
    // console.log("see me",baseURL,data);
  var data = {}
    axios.delete(url,data,{headers: {
      // 'token': `${this.atoken}`
    }}
      ).then((response) => {
      // console.log(response);
      toast("Image deleted");
      localStorage.setItem('deletename',"");
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

  const [isActive, setIsActive] = useState(false);
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
      <div className='row' style={{width:"100%",justifyContent:"center"}}>
      <div class="col-md-12">
        <label for="inputcode" class="form-label">Delete code</label>
        <input type="text" class="form-control" id="inputcode" onChange={handleinput} name="code" 
        
          placeholder='Enter the delete code to delete' required/>
      </div>
      </div>
      <br/><br/>
      <div className='upload-two-by-side'>
      {imageSrc && <div  id="cancel-button"  onClick={() => {window.location.href = '/azkar/gallery';}}><p>Cancel</p></div>}  

      {imageSrc && <div  id="upload-button" onClick={() => {deleteImage(deletename)}}> <img className="gallery-icon" src="images/gallery-icon.png" height="25px" /> <p>Delete Image</p></div>}
      </div>
      </div>
    </div>
  );
}

export default DeleteDialog;
