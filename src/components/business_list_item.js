import React from 'react';

const BusinessListItem = ({business, onBusinessSelect}) => {
  const businessID = business.id;

  return (
    <li onClick={() => onBusinessSelect(business)} className="list-group-item">
      {business.name}
    </li>
  );
}

export default BusinessListItem;