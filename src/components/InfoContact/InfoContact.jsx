import React from 'react';
import infoContact from '../../data/infoContact.json'
import './infoContact.css'
const InfoContact = () => {
  

  return (
    <div className='info-container'>
        <a href="">{infoContact.email}</a>
        <a href="">{infoContact.tel}</a>
        <button>{infoContact.wp}</button>
    </div>
  );
};

export default InfoContact;
