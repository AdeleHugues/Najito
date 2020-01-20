import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import CocktailSearchScreen from "./components/CocktailSearchScreen";
import CocktailScreen from "./components/CocktailScreen";
import IngredientSearchScreen from "./components/IngredientSearchScreen";

const defaultNavigationOptions = {
  headerStyle: {
    backgroundColor: "#a700a7"
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontWeight: "bold"
  }
};

const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  let iconName;
  if (routeName === "Cocktails") {
    iconName = `ios-wine`;
  } else if (routeName === "Ingredients") {
    iconName = `ios-menu`;
  }
  return <Ionicons name={iconName} size={25} color={tintColor} />;
};

const CocktailStack = createStackNavigator(
  {
    CocktailSearch: CocktailSearchScreen,
    Cocktail: CocktailScreen
  },
  {
    defaultNavigationOptions: defaultNavigationOptions
  }
);

const IngredientStack = createStackNavigator(
  {
    IngredientSearch: IngredientSearchScreen,
    Cocktail: CocktailScreen
  },
  {
    defaultNavigationOptions: defaultNavigationOptions
  }
);

const TabNavigator = createBottomTabNavigator(
  {
    Cocktails: CocktailStack,
    Ingredients: IngredientStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) =>
        getTabBarIcon(navigation, focused, tintColor)
    }),
    tabBarOptions: {
      activeTintColor: "tomato",
      inactiveTintColor: "gray",
      labelStyle: {
        fontSize: 14
      }
    }
  }
);

const AppContainer = createAppContainer(TabNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
