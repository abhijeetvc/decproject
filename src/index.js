import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ReadInput from './ReadInput';
import ClassDemo from './ClassDemo';
import PropsDemo from './PropsDemo';
import PropsExample from './PropsExample';
import ComponentLifeCycle from './ComponentLifeCycle';
import UseEffectDemo from './UseEffectDemo';
import UseEffectExample from './UseEffectExample';
import CallBackEvent from './CallBackEvent';
import ContextDemo from './ContextDemo';
import ApiCall from './ApiCall';
import UseMemoDemo from './UseMemoDemo';
import UseReducerHook from './UseReducerHook';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <UseReducerHook/>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
