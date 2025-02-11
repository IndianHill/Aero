import React from "react";
import { DrawerNavigator } from "react-navigation";
import HomeScreen from '../Containers/HomeScreen'
import ListviewExample from "../Containers/ListviewExample";
import CardExample from "../Containers/CardExample";
import DrawerContent from "../Containers/DrawerContent";

import styles from "./Styles/NavigationStyles";

const NavigationDrawer = DrawerNavigator({
    HomeScreen: { screen: HomeScreen },
    ListviewExample: { screen: ListviewExample },
    CardExample: { screen: CardExample },
  },
  {
    initialRouteName: "HomeScreen",
    contentComponent: props => <DrawerContent {...props} />,
  }
);

export default NavigationDrawer;
