import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Cocktail from "../domain/Cocktail";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start"
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 15
  },
  instructionsTitle: { fontSize: 24, marginBottom: 10 },
  instructionsText: {
    fontSize: 18,
    marginLeft: 15,
    marginRight: 15
  }
});

export default class CocktailScreen extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;

    return {
      // Show cocktail name as screen title
      title: params.cocktail.name
    };
  };

  render() {
    const { navigation } = this.props;
    const cocktail = navigation.getParam("cocktail");

    return (
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: cocktail.image }}></Image>
        <Text style={styles.instructionsTitle}>Instructions</Text>
        <Text style={styles.instructionsText}>{cocktail.instructions}</Text>
      </View>
    );
  }
}
