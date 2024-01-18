import React, { Component } from 'react';
import './ListCard.scss';
import { ProductObjectType } from '../App';

interface CardProps {
  changeSelectedCard: (cardObj: ProductObjectType) => void;
  productDetails: ProductObjectType;
}

class Card extends Component<CardProps> {
  handleClick = () => {
    this.props.changeSelectedCard(this.props.productDetails);
  };

  render() {
    const { title, description } = this.props.productDetails;

    return (
      <div className='cardStyle' onClick={this.handleClick}>
        <h3>{title}</h3>
        <hr className='lineStyle' />
        <p>{description}</p>
      </div>
    );
  }
}

export default Card;
