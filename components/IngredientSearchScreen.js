import React from "react";
import { View, StyleSheet } from "react-native";
import { searchCocktailsByIngredientName } from "../helpers/cocktaildbapi";
import Input from "./Input";
import CocktaiList from "./CocktailList";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start"
  }
});

export default class IngredientSearchScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cocktails: []
    };
  }

  static navigationOptions = {
    title: "Cocktails"
  };

  _onInput = text => {
    searchCocktailsByIngredientName(text).then(cocktails => {
      this.setState({ cocktails });
    });
  };

  render() {
    // All React Navigation screens receive this object as prop
    const { navigation } = this.props;
    const { cocktails } = this.state;

    return (
      <View style={styles.container}>
        <Input
          placeholder="Enter a ingredient name"
          onSubmitEditing={this._onInput}
        />
        <CocktaiList cocktails={cocktails} navigation={navigation} />
      </View>
    );
  }
}
