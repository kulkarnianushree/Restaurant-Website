import React from "react";
import Header from "./components/Layout/Header";
import Summary from "./components/Layout/Summary/Summary";
import MealsItem from "./components/Meals/MealsItem";
import Meals from "./components/Meals/Meals";
const App =()=> {
  const MealsList = [
    {id:1,title:'pizza', description:'EveryDay Special',price:'$20'},
    {id:2,title:'Burger',description:'Evening Special',price:'$10'},
    {id:3,title:'Gobi',description:'Hot Fav Receipe',price:'$15'},
    {id:4,title:'Panipuri',description:'Girls Special',price:'$5'}
  ]
  return (
    <React.Fragment>
      <Header/>
      <Summary/>
      <MealsItem Meals = {MealsList}/>
      <Meals data={MealsList}/>
    </React.Fragment>

  );
}

export default App;
