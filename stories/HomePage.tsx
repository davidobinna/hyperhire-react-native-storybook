
import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { router } from "expo-router";


const createArrayRange = (key: number) => {
   return Array.from({ length: key}, (_, index) => index + 1 );
}


const HomePage = () => {
const rangeArray = createArrayRange(15);

    return (
        <View style={styles.container}>
        <View style={styles.group1}>
          <View style={styles.group2}>
            <View style={styles.iconRow}>
                <TouchableOpacity onPress={() => {router.back()}}>
              <AntDesign name="arrowleft" style={styles.icon} color="black" />
              </TouchableOpacity>
              <Text style={styles.asian}>Asian</Text>
              <EvilIcons name="search" size={24} style={styles.icon2} color="black" />
            </View>
          </View>
          <View style={styles.group3}>
            <Text style={styles.competion}>Competion</Text>
            <Text style={styles.loremIpsum}>
              An account is needed per one host, if you&#39;re ready{"\n"}have an
              account of the host of the competition you{"\n"}want to sign up to.
              you can login and register.
            </Text>
          </View>
          <View style={styles.group4}>
            <View style={styles.scrollArea}>
              <ScrollView
                contentContainerStyle={styles.scrollArea_contentContainerStyle}
              >
               {rangeArray.map((item) => (
                <View key={item} style={styles.rect}>
                <Text style={styles.textone}>
                    20th Asian Game - Achi Nagoya{"\n"}2026(Winter)
                </Text>
                <Text style={styles.texttwo}>YYYY-MM-DD-YYY-MM-DD</Text>
                <Text style={styles.textthree}>
                    Pyeongchang: Gangwon-do. Korea Very{"\n"}long city name
                </Text>
                </View>
               ))}
              </ScrollView>
            </View>
          </View>
        </View>
      </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff"
    },
    group1: {
      width: 323,
      height: 721,
      marginTop: 51,
      alignSelf: "center"
    },
    group2: {
      width: 323,
      height: 48,
      flexDirection: "row"
    },
    icon: {
      color: "rgba(128,128,128,1)",
      fontSize: 40
    },
    asian: {
      fontFamily: "roboto-regular",
      color: "#121212",
      fontSize: 19,
      marginLeft: 47,
      marginTop: 10
    },
    icon2: {
      color: "rgba(128,128,128,1)",
      fontSize: 40,
      marginLeft: 164
    },
    iconRow: {
      height: 44,
      flexDirection: "row",
      flex: 1,
      marginRight: 1
    },
    group3: {
      width: 315,
      height: 92,
      marginTop: 15
    },
    competion: {
      fontFamily: "roboto-regular",
      color: "#121212",
      fontSize: 25
    },
    loremIpsum: {
      fontFamily: "roboto-regular",
      color: "rgba(101,94,94,1)",
      marginTop: 9
    },
    group4: {
      width: 325,
      height: 559,
      marginTop: 5,
      marginLeft: -2
    },
    scrollArea: {
      width: 325,
      height: 650,
      backgroundColor: "transparent",
      marginTop: 15
    },
    scrollArea_contentContainerStyle: {
      paddingVertical: 1,
    },
    rect: {
      width: 323,
      height: 149,
      backgroundColor: "rgba(56,57,223,1)",
      borderRadius: 18,
      marginLeft: 2,
      marginBottom: 15,
    },
    textone: {
      fontFamily: "roboto-regular",
      color: "rgba(239,239,239,1)",
      fontSize: 16,
      marginTop: 18,
      marginLeft: 29
    },
    texttwo: {
      fontFamily: "roboto-regular",
      color: "rgba(255,255,255,1)",
      fontSize: 16,
      marginTop: 14,
      marginLeft: 29
    },
    textthree: {
      fontFamily: "roboto-regular",
      color: "rgba(255,255,255,1)",
      fontSize: 15,
      marginTop: 10,
      marginLeft: 29
    }
  });

export default HomePage;