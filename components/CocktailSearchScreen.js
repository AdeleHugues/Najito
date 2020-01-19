import React from "react";
import MainView from "./MainView";
import CocktailStore from "../stores/CocktailStore";

export default class CocktailSearchScreen extends React.Component {
  static navigationOptions = {
    title: "Cocktails"
  };

  render() {
    const cocktailStore = new CocktailStore();
    // All React Navigation screens receive this object as prop
    const { navigation } = this.props;

    // Navigation object is passed down to children components
    return <MainView cocktailStore={cocktailStore} navigation={navigation} />;
  }
}
