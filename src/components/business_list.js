import React from 'react';

const BusinessList = (props) => {
  console.log('list from parent is: ', props.businessList);
  const businesses = props.businessList.map((business) => {
    console.log('each business is: ', business)
  })

  return (
    <div>
      Inside the list!.
    </div>
  )
}

export default BusinessList;

