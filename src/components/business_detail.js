import React from 'react';

const BusinessDetail = (props) => {
  console.log('the business is: ', props.business);

  if(props.business === null){
    return(
      <div>Loading...</div>
    )
  }

  const bus = props.business.data;

  return (
    <div className="business-detail col-md-6 col-md-offset-3">Details:
      <button className="return-button btn btn-primary" onClick={props.returnToList}>Return To List</button>
      <br />
      <br />
      <div className="details">
        <div className="bus-name">{bus.name}</div>
        <div className="address">
          {bus.address} {bus.address2}{'\n'}
          {bus.city}, {bus.state} {bus.zip}{'\n'}
          {'\n'}
          Country: {bus.country}{'\n'}
          {'\n'}
          Phone #: {bus.phone}{'\n'}
        </div>
        <a href={bus.website}>{bus.website}</a>
        <div>
          {'\n'}
          Created At: {bus.created_at}{'\n'}
          Id: {bus.id}{'\n'}
          Uuid: {bus.uuid}
        </div>
      </div>
    </div>
  );
};

export default BusinessDetail;