import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  style: Object;
  onPress?: () => void;
};

const Touch = (props: Props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Text style={[props.style, styles.Padd]}>{props.children}</Text>
    </TouchableOpacity>
  );
};

export default Touch;

const styles = StyleSheet.create({
  Padd: {
    paddingHorizontal: 10,
    paddingVertical: 10
  }
});
