import React from 'react'
import yputube from './Images/youtubeBig.svg';
import mircosoft from './Images/microsoft.svg';
import google from './Images/Group.svg';
import airbnb from './Images/airbnb.svg';
import myntra from './Images/myntra_logo.png.svg';
import swiggy from './Images/swiggy.svg';
import zomato from './Images/zomato.svg';


export const TopCompanies = () => {
  return (
    <div className='topCompanies'>
        <h2 className='majorHeadingClass'>Top companies</h2>
        <div className='container-xl content'>
            <div>
                <img src={google}/>
            </div>
            <div>
                <img src={myntra}/>
            </div>
            <div>
                <img src={airbnb}/>
            </div>
            <div>
                <img src={yputube}/>
            </div>

            <div>
                <img src={swiggy}/>
            </div>

            <div>
                <img src={zomato}/>
            </div>
            <div>
                <img src={mircosoft}/>
            </div>
        </div>
    </div>
  )
}
