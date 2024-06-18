import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { DefaultStyles } from "../../DefaultStyles";
import Touch from "../../Components/Touch";

type Props = {};

const Info = (props: Props) => {
  return (
    <View style={DefaultStyles.container}>
      <Image
        style={styles.Image}
        source={{
          uri: "https://static-00.iconduck.com/assets.00/chat-icon-1024x1024-o88plv3x.png"
        }}
      />
      <View style={styles.BottomView}>
        <Text style={[DefaultStyles.Title, styles.TitlePadd]}>
          Welcome To ChatApp
        </Text>
        <Text style={[DefaultStyles.Text, styles.TextPadd]}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint,
          suscipit.
        </Text>
        {/* Navigation Dots */}
        <View style={styles.InfoNavDotsContainer}>
          <View style={styles.InfoNavDotActive}></View>
          <View style={styles.InfoNavDot}></View>
          <View style={styles.InfoNavDot}></View>
        </View>
        {/* Navigation Dots */}
        <View style={styles.InfoNavTextContainer}>
          <Touch style={styles.InfoNavText}>Prev</Touch>
          <Touch style={styles.InfoNavText}>Skip</Touch>
          <Touch style={styles.InfoNavText}>Next</Touch>
        </View>
      </View>
    </View>
  );
};

export default Info;

const styles = StyleSheet.create({
  Image: {
    flex: 2,
    width: "80%",
    height: "100%",
    resizeMode: "contain"
  },
  BottomView: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    backgroundColor: "teal",
    position: "relative"
  },
  TitlePadd: {
    paddingVertical: 30
  },
  TextPadd: {
    paddingBottom: 20
  },
  InfoNavDotsContainer: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    columnGap: 10,
    width: "100%"
    // backgroundColor: "red"
  },
  InfoNavDot: {
    width: 13,
    height: 13,
    borderRadius: 14,
    backgroundColor: "#aaa"
  },
  InfoNavDotActive: {
    width: 18,
    height: 18,
    borderRadius: 13,
    backgroundColor: "#fff"
  },
  InfoNavTextContainer: {
    width: "95%",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end"
  },
  InfoNavText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "500"
  }
});
