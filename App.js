
/*
 *** Parcel Feature ***
 * Created A Server
 * HMR - Hot Module Replacement
 * File Watcher algorithm - C++
 * BUNDLING
 * MINIFY
 * Cleaning our Code
 * Dev abd Production Build
 * Super Fast build algorithm
 * Image Optimization
 * Caching while development
 * Compression
 * Compatible with older version of browser
 * HTTPS on dev
 * port Number
 * Consistent Hashing Algorithm
 * Zero Config
 * Tree shaking
 *
 *
 * Transitive Dependencies
 */




import React from 'react';
import ReactDOM from 'react-dom/client';


const heading_h1 = React.createElement(
    "h1",
    { id: "heading-h1" },
    "This is Heading H1"
);
const heading_h2 = React.createElement(
    "h2",
    { id: "heading-h2" },
    "This is Heading H2"
);
const containerMain = React.createElement(
    "div",
    { id: "container", key:1,className: "container-main" },
    [heading_h1, heading_h2]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(containerMain);