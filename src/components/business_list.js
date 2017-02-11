import React from 'react';
import BusinessListItem from './business_list_item';

const BusinessList = (props) => {
  console.log('list from parent is: ', props.businessList);
  const businesses = props.businessList.map((business) => {
    return <BusinessListItem
      key={business.uuid}
      business={business} />
  })

  return (
    <div>
      <ul className="list-group">
        {businesses}
      </ul>
    </div>
  )
}

export default BusinessList;

