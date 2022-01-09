/* eslint-disable react/require-default-props */
import PropTypes from 'prop-types';
import React from 'react';
import Card from '../style/card.styled';

function MainCard({ title, button, children, imgUrl, styling, icon }) {
  return (
    <div className={styling}>
      <Card>
        {imgUrl && <img src={imgUrl} alt="" />}
        <div className="p-5">
          {icon && <div className="text-6xl flex justify-center my-5">{icon}</div>}
          <h1>{title}</h1>
          {children}
          {
          button && button
          }
        </div>
      </Card>
    </div>
  );
}
MainCard.propTypes = {
  title: PropTypes.string,
  button: PropTypes.node,
  children: PropTypes.node,
  icon: PropTypes.node,
  imgUrl: PropTypes.string,
  styling: PropTypes.string
};
export default MainCard;
