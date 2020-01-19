import React from "react";
import { Text, View } from "react-native";

export default class CocktailSearchScreen extends React.Component {
  static navigationOptions = {
    title: "Cocktails"
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>CocktailSearchScreen</Text>
      </View>
    );
  }
}
