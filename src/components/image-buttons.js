
import React, { useRef, useState } from 'react';
import Modal from 'react-modal';
import Cropper from 'react-easy-crop';
import Resizer from "react-image-file-resizer";


Modal.setAppElement('#root'); // For accessibility, specify your root element.

const ImageButtons = (props)=>{

  const [isActive, setIsActive] = useState(false);

  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);
  const [croppedArea, setCroppedArea] = useState(null);

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const resizeFile = (file) =>
    new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        300,
        300,
        "JPEG",
        100,
        0,
        (uri) => {
          resolve(uri);
        },
        "base64"
      );
    });
    
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      try {
        Resizer.imageFileResizer(
          event.target.files[0],
          300,
          300,
          "JPEG",
          100,
          0,
          (uri) => {
            console.log(uri);
            localStorage.setItem('image',uri);
            window.location.href = '/azkar/preview' //}
          },
          "base64",
          200,
          200
        );
      } catch (err) {
        console.log(err);
      }
      // // Convert file to a data URL for preview
      // const reader = new FileReader();
      // reader.readAsDataURL(file);
      // reader.onload = () => {
      //   setImageSrc(reader.result);
      //   // setIsActive(true);
      //   // setIsModalOpen(true); // Open the modal for cropping
      //   localStorage.setItem('image',reader.result);
      //   window.location.href = '/azkar/preview'
      // };
    }
  };
  const fileInputRefb = useRef(null);
  const [fileNameb, setFileNameb] = useState('');

  const triggerFileInputb = () => {
    fileInputRefb.current.click();
  };

  const handleFileChangeb = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileNameb(file.name);
      try {
        Resizer.imageFileResizer(
          event.target.files[0],
          300,
          300,
          "JPEG",
          100,
          0,
          (uri) => {
            console.log(uri);
            localStorage.setItem('image',uri);
            window.location.href = '/azkar/preview' //}
          },
          "base64",
          200,
          200
        );
      } catch (err) {
        console.log(err);
      }
      // // Convert file to a data URL for preview
      // const reader = new FileReader();
      // reader.readAsDataURL(file);
      // reader.onload = () => {
      //   setImageSrc(reader.result);
      //   // setIsActive(true);
      //   // setIsModalOpen(true); // Open the modal for cropping
      //   localStorage.setItem('image',reader.result);
      //   window.location.href = '/azkar/preview'
      // };
    }
  };

 

  const onCropComplete = (croppedAreaPercentage, croppedAreaPixels) => {
    setCroppedArea(croppedAreaPixels); // Save the cropped area details
  };

  const handleCropSave = () => {
    console.log('Cropped Area:', croppedArea);
    setIsModalOpen(false);
  };


    return (
     
     <div> <div  className={ isActive ? 'visible' : '' + "   mymodal"}>
      {/* <div className='modal-content'>
      {imageSrc && <img className="gallery-icon  " src={imageSrc} />}
      <div className='upload-two-by-side'>
      {imageSrc && <div  id="cancel-button"  onClick={() => {setIsActive(false);setImageSrc(null);setFileName(null);setFileNameb(null);}}><p>Cancel</p></div>}  

      {imageSrc && <div  id="upload-button" onClick={handleCropSave}> <img className="gallery-icon" src="images/gallery-icon.png" height="25px" /> <p>Upload Image</p></div>}
      </div>
      </div> */}
        {/* <Modal 
            isOpen={isModalOpen}
            onRequestClose={() => setIsModalOpen(false)}
            contentLabel="Edit Image"
            className="modal"
            overlayClassName="overlay"
            >
            <h2>Edit Image</h2>
            {imageSrc && (
            <div className="crop-container">
                <Cropper
                image={imageSrc}
                crop={{ x: 0, y: 0 }}
                zoom={1}
                aspect={4 / 3}
                onCropChange={() => {}}
                onCropComplete={onCropComplete}
                onZoomChange={() => {}}
                />
            </div>
            )}
            <button onClick={handleCropSave}>Save Crop</button>
            <button onClick={() => setIsModalOpen(false)}>Cancel</button>
            </Modal> */}
     </div>
    <div className='two-by-side'>

    <input
        type="file"
        ref={fileInputRef}
        className="hidden-input"
        accept="image/*"
        capture="environment"
        onChange={handleFileChange}
      />
     
        <div id="camera-button" onClick={triggerFileInput} className="gallery-button" ><img className="gallery-icon" src="images/picasa-icon.png" height="25px" /><p>Upload from Camera.</p></div>
        
        <input
        type="file"
        ref={fileInputRefb}
        className="hidden-input"
        accept="image/*"
        onChange={handleFileChangeb}
      />
      
        <div id="gallery-button" onClick={triggerFileInputb} className="gallery-button" ><img className="gallery-icon" src="images/gallery-icon.png" height="25px" /><p>Upload from Gallery.</p></div>
     

 </div>
 </div>);



}

export default ImageButtons;