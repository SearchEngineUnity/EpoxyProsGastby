import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

function CompanyInfo({ email, address, title, colWidth, number }) {
  return (
    <div className={colWidth}>
      <h4>{title}</h4>
      <p>
        <FaMapMarkerAlt /> {address}
      </p>
      <p>
        <FaPhone /> {number}
      </p>
      <p>
        <FaEnvelope /> {email}
      </p>
    </div>
  );
}

export default CompanyInfo;
