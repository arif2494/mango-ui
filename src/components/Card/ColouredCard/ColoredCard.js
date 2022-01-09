/* eslint-disable react/require-default-props */
import PropTypes from 'prop-types';
import React from 'react';
import CardVariant from '../style/coloredCard.styled';

function ColoredCard({ title, button, children, imgUrl, styling, icon, variant }) {
  return (
    <div className={styling}>
      <CardVariant variant={variant}>
        {imgUrl && <img src={imgUrl} alt="" />}
        <div className="p-5">
          {icon && <div className="text-6xl flex justify-center my-5">{icon}</div>}
          <h1>{title}</h1>
          {children}
          {
          button && button
          }
        </div>
      </CardVariant>
    </div>
  );
}
ColoredCard.propTypes = {
  title: PropTypes.string,
  button: PropTypes.node,
  children: PropTypes.node,
  icon: PropTypes.node,
  imgUrl: PropTypes.string,
  styling: PropTypes.string,
  variant: PropTypes.string
};
export default ColoredCard;
