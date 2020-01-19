import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import CocktailSearchScreen from "./components/CocktailSearchScreen";
import CocktailScreen from "./components/CocktailScreen";
import IngredientSearchScreen from "./components/IngredientSearchScreen";

const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  let iconName;
  if (routeName === "Cocktails") {
    iconName = `ios-wine`;
  } else if (routeName === "Ingredients") {
    // "ios-options" icon has no outlined version
    iconName = `ios-menu`;
  }

  // You can return any component that you like here!
  return <Ionicons name={iconName} size={25} color={tintColor} />;
  //return <IconComponent name={iconName} size={25} color={tintColor} />;
};

const CocktailStack = createStackNavigator({
  CocktailSearch: CocktailSearchScreen,
  Cocktail: CocktailScreen
});

const IngredientStack = createStackNavigator({
  IngredientSearch: IngredientSearchScreen,
  Cocktail: CocktailScreen
});

const TabNavigator = createBottomTabNavigator(
  {
    Cocktails: CocktailStack,
    Ingredients: IngredientStack
  },
  {
    //initialRouteName: "Cocktails",
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) =>
        getTabBarIcon(navigation, focused, tintColor)
    }),
    tabBarOptions: {
      activeTintColor: "tomato",
      inactiveTintColor: "gray"
    }
  }
);

const AppContainer = createAppContainer(TabNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
