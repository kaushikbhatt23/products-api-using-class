import React, { Component } from 'react';
import './App.scss';
import ProductList from './Components/ProductList';
import ProductDescription from './Components/ProductDescription';



export type ProductObjectType = {
  [key: string]: any;
};


interface ComponentState {
  loading: Boolean;
  cardState: ProductObjectType
}



class App extends Component<{},ComponentState>{

  myMap: Map<number, ProductObjectType> = new Map();


  state = {
    loading:true,
    cardState: {},
  };


  


  componentDidMount() {     // instead of useEffect 
    this.fetchData();
  }

  fetchData = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products');
      const jsonData = await response.json();
      this.myMap = new Map(jsonData.products.map((item: ProductObjectType) => [item.id, item]));

      this.setState({
        loading: false,
      });
      // console.log(this.myMap.get(1))
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  changeSelectedCard = (cardObj: ProductObjectType) => {
    this.setState({
      cardState: cardObj,
    },()=>console.log(this.state.cardState));
  };



  getSelectedCardData=()=>this.state.cardState;


  render() {
    const { loading } = this.state;
    return (
      <div className="App">
        {loading ? (
          <p>Loading.....</p>
        ) : (
          <div className='AppStyle'>
            <ProductList changeSelectedCard={this.changeSelectedCard} myMap={this.myMap}/>
            <ProductDescription  getSelectedCardData={this.getSelectedCardData}/>
          </div>
        )}
      </div>
    );
  }
}

export default App;
