/* eslint-disable react/require-default-props */
import PropTypes from 'prop-types';
import React from 'react';
import Card from '../MainCard/card.styled';

function GridCard({ xs, md, lg, children }) {
  const style = `grid grid-cols-${xs} md:grid-cols-${md} lg:grid-cols-${lg} gap-5`;
  return (
    <Card>
      <div className={style}>
        {children}
      </div>
    </Card>
  );
}
GridCard.propTypes = {
  xs: PropTypes.string.isRequired,
  md: PropTypes.string.isRequired,
  lg: PropTypes.string.isRequired,
  children: PropTypes.node
};
export default GridCard;
