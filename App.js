import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Image } from 'react-native';
import menuNavabar from './components/menuNavbar.js';



export default function App() {
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
            <TouchableOpacity style={styles.btnh} onPress={() => {alert('ceci est un menu, normalement')}}>
                <menuNavabar />
            </TouchableOpacity> 

        </View>
        <View style={styles.body}>
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
    justifyContent: 'space-evenly',
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
  }
});




// smsSendFunction(); {

//   SendSMS.send({
//       body: 'Please follow us on https://reactnativecode.com',
//       recipients: ['0987654321'],
//       successTypes: ['sent', 'queued']
//   }, (completed, cancelled, error) => {
//       if(completed){
//         Alert.alert('SMS Sent Successfully.')
//       }else if(cancelled){
//         console.log('SMS Sent Cancelled.');
//       }else if(error){
//         console.log('Some error occured.');
//       }
//   });
// }


