import React from "react";
import { Platform } from "react-native";
import { createStackNavigator, createBottomTabNavigator } from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import CalTab from "../screens/CalTab";
import FriendTab from "../screens/FriendTab";
import SettingsTab from "../screens/SettingsTab";


const FriendsStack = createStackNavigator({
  Links: FriendTab,
});

FriendsStack.navigationOptions = {
  tabBarLabel: "Friends",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? `ios-people${focused ? "" : "-outline"}` : "md-people"}

    />
  ),
};

const CalStack = createStackNavigator({
  Cal: CalTab,
});

CalStack.navigationOptions = {
  tabBarLabel: "Calendar",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-calendar${focused ? "" : "-outline"}`
          : "md-calendar"
      }
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsTab,
});

SettingsStack.navigationOptions = {
  tabBarLabel: "Settings",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? `ios-settings${focused ? "" : "-outline"}` : "md-settings"}
    />
  ),
};



const tabNav = createBottomTabNavigator(
  {
  FriendsStack,
  CalStack,
  SettingsStack,
});

export default tabNav;