import React from 'react';

const BusinessListItem = ({business}) => {
  const businessID = business.id;

  return (
    <li className="list-group-item">
      {business.name}
    </li>
  );
}

export default BusinessListItem;