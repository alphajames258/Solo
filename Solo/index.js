import React from 'react'
import  { createRoot }  from 'react-dom/client';
import App from './App.js'
import fetch from 'node-fetch';
import './style.css';


const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App/>);


export default fetch



