import React from 'react'
import teleIcon from "./Images/telegram.png";
import linkedInIcon from "./Images/linkedin.png";
import twtIcon from "./Images/twt.png";

export const FooterContactLinks = ({classType}) => {
  return (
    <div className={`${classType} contactUsLinks`}>
        <p>find us on:</p>
        <div>
          <button>
            <img src={teleIcon} />
          </button>
          <button>
            <img src={twtIcon} />
          </button>
          <button>
            <img src={linkedInIcon} />
          </button>
        </div>
      </div>
  )
}
