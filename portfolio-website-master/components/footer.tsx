import React from "react";
import { DiJavascript1 } from 'react-icons/di';

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        <div className="flex justify-center items-center" >
          ------- Made with 💗 and  <DiJavascript1 style={{ color: '#F7DF1E', fontSize: '1rem' }} /> -------
        </div>
        <div><span style={{fontWeight:"bold"}}>Indranil Sarmah</span></div>

      </small>
      
    </footer>
  );
}
