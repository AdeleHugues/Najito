import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    margin: 10
  },
  text: {
    marginLeft: 10,
    fontSize: 20
  },
  image: { height: 75, width: 75 }
});

export default class CocktailItem extends React.Component {
  render() {
    const { cocktail, navigation } = this.props;

    return (
      <View>
        <TouchableOpacity
          style={styles.container}
          onPress={() => {
            navigation.navigate("Cocktail", {
              cocktail: cocktail
            });
          }}
        >
          <Image style={styles.image} source={{ uri: cocktail.thumbnail }} />
          <Text style={styles.text}>{cocktail.name}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
