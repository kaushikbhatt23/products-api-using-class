import React, { Component } from 'react';
import { ProductObjectType } from '../App';
import './ProductDescription.scss'

interface CardPropsType {
  getSelectedCardData: () => {}
}


interface MyComponentState {
  cardObj: ProductObjectType;
}



class ProductDescription extends Component<CardPropsType,MyComponentState> {


  state={
    cardObj:{}
  }


  // componentDidMount() {
  //   this.updateObjectData();
  // }

  // componentDidUpdate(prevProps: Readonly<CardPropsType>, prevState: Readonly<MyComponentState>, snapshot?: any): void {
    
  // }

  // updateObjectData() {
  //   let objectData:ProductObjectType =this.props.getSelectedCardData();

  //   this.setState({
  //     cardObj: objectData,
  //   });
  // }



  render() {
    let cardObj: ProductObjectType= this.props.getSelectedCardData();
    let len=Object.values(cardObj).length;
    // console.log(cardObj)
    return (
      <>
        {len==0?(
          <p>Nothing here</p>
        ):(
          <>
            <p>{cardObj.title}</p>
            <div>
              <img className="imageStyle" src={cardObj.images[0]} alt={cardObj.title} />
            </div>
          </>
        )}
      </>
    );
  }
}

export default ProductDescription;