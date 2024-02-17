import React from 'react';
import ReactDOM from 'react-dom/client';

//import css in order
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/icons/css/ionicons.css';
import './styles/main.css';

//import js libraries
//import 'bootstrap/dist/js/bootstrap.min.js';

import * as serviceWorker from './serviceWorker';

//import components
import {Navbar, BackToTop} from './components/layout';
import {Intro, About, Contact, Portfolio } from './components/pages';
import Preloader from './components/common/Preloader';
import { Toaster } from 'sonner'; //notifications
import Modal from 'react-modal';

// Set the root element for accessibility outside of StrictMode
Modal.setAppElement("#root");

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Navbar />
        <Intro />
        <About />
        <Portfolio />
        <Contact />
        <BackToTop />
        <Preloader />
        <Toaster richColors position="bottom-center" expand={true}/>
    </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
