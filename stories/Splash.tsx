// components/Splash.tsx

import React from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SimpleLineIcons, Ionicons, Fontisto } from '@expo/vector-icons';

type SplashProps = {
  name?: string;
  onSubmit: (name: string) => void;
};


export const Splash: React.FC<SplashProps> = ({ name = '', onSubmit }) => {
  const [nameValue, setNameValue] = React.useState(name);

  const handleSubmit = () => {
    onSubmit(nameValue);
  };

 return ( 
    <ImageBackground
      source={require('./assets/splash.svg')}
      style={styles.backgroundImage}
    >
         <View style={styles.overlay}>
          <View style={styles.container}>
            <Text style={styles.sooAndCarrots}>Soo {"\n"}and Carrots</Text>
         </View>

         <View style={styles.group2}>
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <View style={styles.iconRow}>
              <SimpleLineIcons name="login" style={styles.icon} size={24} color="black" />
                <Text style={styles.signUpForFree}>Sign Up for Free</Text>
                <Ionicons name="chevron-forward-circle-outline" style={styles.icon4} size={24} color="black" />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2}>
              <View>
              <Fontisto name="email" size={24} style={styles.icon2} color="black" />
                <Text style={styles.continueWithEmail}>
                  Continue with Email
                </Text>
                <Ionicons name="chevron-forward-circle-outline" style={styles.icon5} size={24} color="black" />
              </View>
            </TouchableOpacity>
          </View>        
    </View>
    </ImageBackground>
     
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: 300,
    height: 550,
    justifyContent: 'space-between',
    alignSelf: 'center', 
  },

  overlay: {
    flex: 1,
    justifyContent: 'space-between',
    width: '100%',
    padding: 0,
  },
  container: {
    width: 199,
    height: 92,
    paddingLeft: 22,
    paddingTop: 10,
  },
  sooAndCarrots: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 38
  },

  group2: {
    //width: 310,
    width: 200,
    height: 100,
    marginLeft: 40,
    //marginLeft: 32
    //height: 69,
    //marginTop: 424,
    
  },
  button: {
   // width: 310, //native
   // height: 69, //native
    width: '100%',
    height: 30,
    backgroundColor: "rgba(17,98,242,1)",
    borderRadius: 31,
    flexDirection: "row"
  },
  icon: {
    color: "rgba(240,222,222,1)",
    //fontSize: 32,
    //marginTop: 4. 
    //height: 32,
    //width: 32,
    fontSize: 15,
    height: 15,
    width: 20,
    marginLeft: -1,
    marginTop: -4,
  },
  signUpForFree: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    //fontSize: 24,
    //marginLeft: 9,
    //marginTop: 8
    fontSize: 11,
    marginLeft: 15,
    marginTop: -5
  },
  icon4: {
    color: "rgba(255,255,255,1)",
 //   fontSize: 40,
  //  height: 44,
   // width: 40,
    //marginLeft: 28
    fontSize: 15,
    height: 15,
    width: 20,
    marginLeft: 28,
    marginTop: -4,
  },
  iconRow: {
    height: 44,
    flexDirection: "row",
    flex: 1,
    marginRight: 19,
    marginLeft: 13,
    marginTop: 14
  },
  

  button2: {
    // width: 310, //native
   // height: 69, //native
    marginTop: 20,
    width: '100%',
    height: 30,
    backgroundColor: "rgba(108,103,103,1)",
    borderRadius: 31,
  },
  icon2: {
    color: "rgba(255,255,255,1)",
    //fontSize: 29,
    fontSize: 18,
    height: 0,
    width: 0,
    //marginTop: 16,
    marginTop: 1,
    marginLeft: 13
  },
  continueWithEmail: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    //fontSize: 18,
    fontSize: 11,
    marginTop: 8,
    //marginLeft: 53
    alignSelf: 'center'
  },
  icon5: {
    
    color: "rgba(255,255,255,1)",
    //fontSize: 40,
    fontSize: 20,
    height: 0,
    width: 0,
    //marginTop: -11,
    marginTop: -15,
    //marginLeft: 251
    marginLeft: 150 ,  
},
});


