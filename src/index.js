import React from 'react';

import ReactDOM from 'react-dom/client';

import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Gallery from './Gallery';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Preview from './preview';
import DeleteDialog from './DeleteDialog';

// basename={'azkar'} >
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true}} basename={'azkar'} > 
   
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route index element={<Home/>} />
    <Route path="/gallery" element={<Gallery/>} />
    <Route path="/preview" element={<Preview/>} />
    <Route path="/delete" element={<DeleteDialog/>} />
  </Routes>
  </BrowserRouter>
   
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
