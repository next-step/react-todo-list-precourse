import React from 'react';
import { createRoot } from 'react-dom/client';
import MainContainer from './components/main/MainContainer';

const root = createRoot(document.getElementById('app'));
root.render(React.createElement(MainContainer));
