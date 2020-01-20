import React from "react";
import { View, StyleSheet } from "react-native";
import { observer } from "mobx-react";

export default class MainView extends React.Component {
  _onInput = text => {
    this.props.cocktailStore.searchByName(text);
  };

  render() {
    const { cocktailStore, navigation } = this.props;

    return (
      <View style={styles.container}>
        <Input
          placeholder="Entrez un nom de cocktail"
          onSubmitEditing={this._onInput}
        />
        <CocktaiList cocktailStore={cocktailStore} navigation={navigation} />
      </View>
    );
  }
}
