import React from 'react';
import { createRoot } from 'react-dom/client'
import './index.css'
import CustomComponent from './Component'
import StreamlitProvider from './provider/StreamlitProvider';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <StreamlitProvider>
      <CustomComponent />
    </StreamlitProvider>
  </React.StrictMode>
);
