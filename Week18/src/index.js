import React from 'react';
import { createRoot } from 'react-dom/client';

//import Counter from "./App";
//import App2 from "./App2";
import { App } from './App.jsx';
const container = document.getElementById('root');
const rootEl = createRoot(container)

/*
let App = (
  <>
    <Counter/>
    <App2/>
  </>
)
*/

rootEl.render(<App/>)

//rootEl.render(App);

