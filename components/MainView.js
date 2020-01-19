import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { observer } from "mobx-react";
import Input from "./Input";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start"
  },
  cocktailContainer: {
    flex: 1,
    marginHorizontal: 10
  }
});

@observer
export default class MainView extends React.Component {
  _onInput = text => {
    this.props.cocktailStore.searchByName(text);
  };

  render() {
    return (
      <View style={styles.container}>
        <Input
          placeholder="Entrez un nom de cocktail"
          onSubmitEditing={this._onInput}
        />
        <FlatList
          style={styles.cocktailContainer}
          data={this.props.cocktailStore.cocktails}
          keyExtractor={drink => drink.idDrink}
          renderItem={({ item }) => {
            return <Text>{item.strDrink}</Text>;
          }}
        />
      </View>
    );
  }
}
