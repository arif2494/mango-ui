/* eslint-disable react/require-default-props */
import PropTypes from 'prop-types';
import React from 'react';
import Card from './card.styled';

function MainCard({ title, button, children }) {
  return (
    <Card className="border">
      <div className="p-3">
        <h1 className="my-5">{title}</h1>
        {children}
        <div>
          {
          button && button
        }
        </div>
      </div>
    </Card>
  );
}
MainCard.propTypes = {
  title: PropTypes.string,
  button: PropTypes.node,
  children: PropTypes.node
};
export default MainCard;
