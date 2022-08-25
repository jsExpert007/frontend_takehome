import { View } from "react-native";
import React from "react";
// -- NAVIGATION IMPORTS
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from '@expo/vector-icons/Ionicons';
import MyCars from "./MyCars";
import Home from "./Home";
import { Colors, Strings } from "./constants";

const BottomTabs = createBottomTabNavigator();

const ScreenConsolidation = () => {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen
        name={Strings.Home}
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              {focused ?
                <Ionicons name="home" size={28} color={Colors.blue} />
                :
                <Ionicons name="home" size={28} color={Colors.gray} />
              }
            </View>
          )
        }}
      />
      <BottomTabs.Screen
        name={Strings.MyCars}
        component={MyCars}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              {focused ?
                <Ionicons name="car" size={28} color={Colors.blue} />
                :
                <Ionicons name="car" size={28} color={Colors.gray} />
              }
            </View>
          )
        }}
      />
    </BottomTabs.Navigator>
  );
};

export default ScreenConsolidation;
