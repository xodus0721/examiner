import React from 'react';

const Date = (props) => {
    const {
      date, icon
    } = props.info;
    
    return (

      <>
        <div className="box">
          <div className="box-margin">{date}</div>
          <div className="box-margin">{icon}</div>
        </div>
      </>
    );
};

Date.defaultProps = {
  info: {
    date: 0,
    icon: '',
  }
}

export default Date;