import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { observer } from "mobx-react";
import Input from "./Input";
import CocktailItem from "./CocktailItem";

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
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <Input
          placeholder="Entrez un nom de cocktail"
          onSubmitEditing={this._onInput}
        />
        <FlatList
          style={styles.cocktailContainer}
          data={this.props.cocktailStore.cocktails}
          keyExtractor={cocktail => cocktail.id}
          renderItem={({ item }) => {
            return <CocktailItem cocktail={item} navigation={navigation} />;
          }}
        />
      </View>
    );
  }
}
