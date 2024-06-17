import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import AuthNav from "./AuthNav";
import HomeNav from "./HomeNav";

type Props = {};

const Stack = createNativeStackNavigator();

const MainNav = (props: Props) => {
  return (
      <Stack.Navigator screenOptions={{ headerShown: true }}>
        <Stack.Screen name="AuthNav" component={AuthNav} />
        <Stack.Screen name="HomeNav" component={HomeNav} />
      </Stack.Navigator>
  );
};

export default MainNav;
