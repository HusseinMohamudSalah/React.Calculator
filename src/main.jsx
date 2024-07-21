import React from 'react'
import ReactDOM, { createRoot } from 'react-dom/client'
import App from "./App"



const display = document.getElementById("root");

const root = createRoot(display);


root.render(
  <>
  <App/>
  </>
)
