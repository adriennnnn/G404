import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Image } from 'react-native';
// import MenuNavbar from './components/MenuNavbar.js';




export default function App() {

  const [isOpen, setisOpen] = useState(false);
  
  return (
      <View style={styles.container}>
        
        <View style={styles.headers}>
            <Image
              style={styles.tinyLogo}
              source={{uri: 'https://www.garage404.com/wp-content/uploads/2022/03/garage-purple-1.png'}}
            />
            <TouchableOpacity style={styles.btnh} onPress={() => {alert('PAUSE !!!!!!!')}}>
              <Text style={{color: 'white'}}>contact</Text>
            </TouchableOpacity> 
            {/* <path xmlns="http://www.w3.org/2000/svg" d="M1,9h14V7H1V9z M1,14h14v-2H1V14z M1,2v2h14V2H1z"/> */}
            {/* <TouchableOpacity style={styles.btnh} onPress={() => {alert('ceci est un menu, normalement')}}> */}
                {/* <MenuNavbar /> */}
            {/* </TouchableOpacity>  */}
            <TouchableOpacity style={styles.btnBurger} onPress={() => setisOpen(!isOpen) }>
              <Text style={styles.Burger} >&#9776; </Text>

            </TouchableOpacity> 
        </View>
        <View style={styles.body}>
 
              <View style={ State(isOpen) }>
                <View style={styles.BurgerBody}>
                  <TouchableOpacity style={styles.btnBurgerDown} onPress={() => {alert('et non')}}>
                    <Text style={styles.BurgerDownText} >Acceuil </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.btnBurgerDown} onPress={() => {alert('et non')}}>
                    <Text style={styles.BurgerDownText} >Nos offres </Text>
                  </TouchableOpacity> 
                  <TouchableOpacity style={styles.btnBurgerDown} onPress={() => {alert('et non')}}>
                    <Text style={styles.BurgerDownText} >A propos </Text>
                  </TouchableOpacity>  
                </View>
              </View>
          <ImageBackground source={imageBgBody} resizeMode="cover" style={styles.imageBody}>
            <Text style={styles.textBodyTitle}>
              ÉCOLE DU NUMÉRIQUE POUR ADULTES, ADOS ET ENFANTS
              </Text>
          </ImageBackground>
        </View>
       

      </View>
  );
}
const imageBgBody = { uri: "https://www.garage404.com/wp-content/uploads/2022/03/pack-algora-commerciales-10-scaled.jpg" };

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: 'skyblue',
    // alignItems: 'center',
    // justifyContent: 'center',
    height: '100%',
  },
  tinyLogo : {
    width: 75,
    height: 50,
    marginLeft: 5,
  },
  headers: {
    // backgroundColor: 'white',
    // marginTop: 0,
    // paddingHorizontal: '100%',
    // display: 'inline-block',    
    height: 125,
    // paddingTop: 0,
    // marginButtom: 150,
    backgroundColor: '#F1EFDC',
    paddingTop: 30,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  body : {
    
  },
  imageBody: {
    height: '100%',
    alignItems: 'center',
  },
  textBodyTitle : {
    paddingTop: 100,
    justifyContent: 'center',
    textAlign: 'center',
    color: 'white',
    fontSize: '50px',
    fontWeight: 'bold',
    fontFamily: 'GillSans-SemiBold',
  },
  btnb: {
    backgroundColor : 'gray',
    paddingTop: 5,
    paddingBottom:5,
    paddingHorizontal: 10,
    margin: 10,
    borderRadius: 10,
  },
  btnh: {
    backgroundColor : '#6D3C98',
    paddingTop: 5,
    paddingBottom:5,
    paddingHorizontal: 10,
    margin: 10,
    borderRadius: 10,
    // justifyContent: 'center',
    // alignItems: 'center',
  }, btnBurger:{
    marginRight: 15,
    
  },
  Burger: {
    color : '#6D3C98',
    fontSize: 40
  },
  BurgerOn: {
    // width: 0,
    // height: 0,
    display: 'flex'
  },
  BurgerUp: {
    // width: 0,
    // height: 0,
    display: 'none'
  },
  BurgerBody:{
    borderTopColor : '#61C6BE',
    borderTopWidth: 3,
    backgroundColor : 'white',
    
  },
  btnBurgerDown: {
    marginLeft: 10,
    borderTopColor : '#61C6BE',
    
    borderLeftWidth: 2,
    borderColor : '#61C6BE',
    
  },
  BurgerDownText: {
    marginLeft: 10,
    margin: 5,
  }
});

function State(value) {
  if (value === true) {
    return styles.BurgerOn;
  }else{
    return styles.BurgerUp;
  }
};
