// pages/index.js
import React from 'react';


const Home = () => {
  return (
    <div className='flex flex-col gap-10'>
      <div id="About" className='h-[1000px] backdrop-blur bg-black/20 rounded-xl shadow-xl py-8 px-16'>
        <h2 className='text-[60px]'>About Us</h2>
      </div>
      <div id="Projects" className='h-[1000px] backdrop-blur bg-black/20 rounded-xl shadow-xl py-2 px-5'>
        <h2 className='text-[60px]'>Projects</h2>
        {/* Inhalt für Abschnitt 2 */}
      </div>
      <div id="Articles" className='h-[1000px] backdrop-blur bg-black/20 rounded-xl shadow-xl py-2 px-5 mb-20'>
        <h2 className='text-[60px]'>Articles</h2>
        
      </div>
    </div>
  );
};

export default Home;
