// 'use client' directive (Note: This is not a standard React or JavaScript directive. Make sure it's relevant for your specific environment or tooling.)
'use client';

// Import necessary functionalities from React library
import React, { useState } from 'react';

// Define the type for component properties
type Props = {
  main: string;
  submain: string;
  path: string;
  path2: string;
}

// Define the Ancor component
const Ancor = ({ main, submain, path, path2 }: Props) => {
  // Define state to track hover status
  const [focus, setFocus] = useState<boolean>(false);

  return (
    // Anchor tag that responds to hover events
    <a href="#" onMouseEnter={() => setFocus(true)} onMouseLeave={() => setFocus(false)} className='py-3 flex items-center space-x-3 cursor-pointer'>
      
      {/* SVG icon with two paths that changes color based on hover status */}
      <svg aria-hidden="true" height="24" viewBox="0 0 24 24" fill='currentColor' version="1.1" width="24" data-view-component="true" className={`mr-3 transition ease-in duration-100 ${focus ? "text-blue-600" : "text-neutral-500"}`}>
        <path d={path}></path>
        <path d={path2}></path>
      </svg>
      
      {/* Text container that changes color based on hover status */}
      <div className={`${focus ? "text-blue-600" : "text-neutral-500"} transition ease-in duration-100 text-[14px]`}>
        
        {/* Main text with dynamic color */}
        <div className={`font-semibold transition ease-in duration-100 ${focus ? "text-blue-600" : "text-neutral-800"} text-base leading-5`}>{main}</div>
        
        {/* Submain text */}
        {submain}
      </div>
    </a>
  )
}

// Export the Ancor component as the default export from this module
export default Ancor;
