import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { observer } from "mobx-react";
import CocktailItem from "./CocktailItem";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10
  }
});

@observer
export default class CocktailList extends React.Component {
  render() {
    const { cocktails, navigation } = this.props;

    return (
      <FlatList
        style={styles.container}
        data={cocktails}
        keyExtractor={cocktail => cocktail.id}
        renderItem={({ item }) => {
          return <CocktailItem cocktail={item} navigation={navigation} />;
        }}
      />
    );
  }
}
