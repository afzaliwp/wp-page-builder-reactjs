import React from 'react';
import { render } from 'react-dom';
import App from './Components/App';
import { AppProvider } from './state';

const root = document.getElementById( 'page-builder-root' );

render( 
<AppProvider>
    <App />
</AppProvider>
, root );

