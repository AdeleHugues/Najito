import React from "react";
import { Text, View } from "react-native";

export default class IngredientSearchScreen extends React.Component {
  static navigationOptions = {
    title: "Ingrédients"
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>IngredientSearchScreen</Text>
      </View>
    );
  }
}
