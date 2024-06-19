import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { DefaultStyles } from "../../DefaultStyles";
import Touch from "../../Components/Touch";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../Types/navigation";

type Props = {};

const Page = {
  Welcome: {
    title: "Welcome To ChatApp",
    text: "Connect to your friends easily and chat with them",
    url: "https://static-00.iconduck.com/assets.00/chat-icon-1024x1024-o88plv3x.png"
  },
  GroupChat: {
    title: "Make a Group Chat",
    text: "Make group and easily chat with all friends whenever you want",
    url: "https://herobot.app/wp-content/uploads/2022/11/11-Reasons-Why-A-Chat-Application-Is-Great-For-Business_1.jpg"
  },
  Call: {
    title: "Audio and Video Call",
    text: "Do Audio and Video call easily and talk with your friends anywhere",
    url: "https://www.searchenginejournal.com/wp-content/uploads/2019/11/8-superstar-video-conferencing-chat-apps-for-business-5de073204c94e.png"
  }
};

const Pages = {
  Welcome: "Welcome",
  GroupChat: "GroupChat",
  Call: "Call"
} as const;

type PagesType = keyof typeof Pages;

const PageNames = ["Welcome", "GroupChat", "Call"];

const Info = (props: Props) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const [currentPage, setCurrentPage] = useState<PagesType>("Welcome");

  function changePage() {
    currentPage === "Welcome"
      ? setCurrentPage("GroupChat")
      : setCurrentPage("Call");
  }

  function navigateToAuth() {
    navigation.navigate("Register");
  }

  return (
    <View style={DefaultStyles.container}>
      <Image
        style={styles.Image}
        source={{
          uri: Page[currentPage].url
        }}
      />
      <View style={styles.BottomView}>
        <Text style={[DefaultStyles.Title, styles.TitlePadd]}>
          {Page[currentPage].title}
        </Text>
        <Text style={[DefaultStyles.Text, styles.TextPadd]}>
          {Page[currentPage].text}
        </Text>
        {/* Navigation Dots */}
        <View style={styles.InfoNavDotsContainer}>
          {PageNames.map((pageName, index) => (
            <View
              key={index}
              style={
                pageName === currentPage
                  ? styles.InfoNavDotActive
                  : styles.InfoNavDot
              }
            ></View>
          ))}
        </View>
        {/* Navigation Dots */}
        <View style={styles.InfoNavTextContainer}>
          <Touch onPress={() => navigateToAuth()} style={styles.InfoNavText}>
            Skip
          </Touch>
          <Touch onPress={() => changePage()} style={styles.InfoNavText}>
            Next
          </Touch>
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
    paddingBottom: 40,
    paddingHorizontal: 10
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
