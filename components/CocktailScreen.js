import React from "react";
import { StyleSheet, Text, View, Image, ActivityIndicator } from "react-native";
import { findCocktailById } from "../helpers/cocktaildbapi";
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
  instructionsTitle: { fontSize: 22, marginBottom: 10 },
  instructionsText: {
    fontSize: 16,
    marginLeft: 15,
    marginRight: 15
  }
});

export default class CocktailScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      cocktail: null
    };
  }

  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;

    return {
      // Show cocktail name as screen title
      title: params.cocktailName
    };
  };

  componentDidMount() {
    const cocktailId = this.props.navigation.getParam("cocktailId");

    findCocktailById(cocktailId).then(cocktail => {
      this.setState({ cocktail, isLoading: false });
    });
  }

  render() {
    if (this.state.isLoading) return <ActivityIndicator />;
    else {
      const { cocktail } = this.state;

      return (
        <View style={styles.container}>
          <Image style={styles.image} source={{ uri: cocktail.image }}></Image>
          <Text style={styles.instructionsTitle}>Instructions</Text>
          <Text style={styles.instructionsText}>{cocktail.instructions}</Text>
        </View>
      );
    }
  }
}
