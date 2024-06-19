import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Info from "../Screens/Auth Screens/Info";
import Login from "../Screens/Auth Screens/Login";
import Register from "../Screens/Auth Screens/Register";

type Props = {};

const Stack = createNativeStackNavigator();

const AuthNav = (props: Props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Info" component={Info} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

export default AuthNav;