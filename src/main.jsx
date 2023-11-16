import React from 'react'
import { createRoot } from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap-icons/font/bootstrap-icons.css'

import 'react-toastify/dist/ReactToastify.css'

import Layout from './Layout';

const root = createRoot(document.querySelector('#root'));
root.render(<Layout />)