import React from 'react';
import infoPng from './Images/info.png';

export const InfoPart = () => {
  return (
    <div className='container-xl infopartMainDiv'>
        <img src={infoPng} className='pic'/>
        <div className='content'>
            <p>Got Talent?</p>
            <h2>Millions of Jobs. Find the one that suits you.</h2>
            <p>Search all the open positions on the web. Read reviews on over 600,000 companies worldwide.</p>
            <ul>
                <li>Find your perfect job</li>
                <li>Personalized search</li>
                <li>Unique roles and exciting teams</li>
            </ul>
        </div>
    </div>
  )
}
