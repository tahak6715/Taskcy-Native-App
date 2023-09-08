import { View, Text, Image, SafeAreaView } from 'react-native'
import React from 'react'
import styless from '../components/react_native_styles/styling'
import Buttona from '../components/basic_comps/Button'
import AppNavigator from './IntroSlider'

const Splash = ({ navigation }) => {

    const handleButtonClick = () => {
        
        navigation.navigate('Product');
      };
  return (
    <SafeAreaView>
    <View>
      <Image
        source={require('../components/images/cover.png')}
        style={{resizeMode:'cover', width: ''}}
      />

      <View style={[styless.paper,styless.pt5,styless.rounded,styless.positionRelative,styless.top]}>
        <Text style={[styless.textPurple,styless.fs1,styless.textCenter,styless.textBold]}>Taskcy</Text>
        <Text style={[styless.textBlack,styless.textCenter,styless.mt3,styless.fs2,styless.textBold]} >Building Better</Text>
        <Text style={[styless.textBlack,styless.textBold,styless.textCenter,styless.mb2,styless.fs2]} >Workplaces</Text>
        <Text style={[styless.textCenter,styless.textLight,styless.textBlack,styless.textBold,styless.fs]}>Create a unique emotional story that</Text>
        <Text style={[styless.textCenter,styless.textLight,styless.textBlack,styless.textBold,styless.fs]}>describe better than words</Text>
        <Buttona color="#8a2be2" style={[styless.mx5,styless.my5,styless.bgPurple,styless.rounded,styless.p1]} title="Get Started" onPress={handleButtonClick} />
      </View>
      
    </View>
    </SafeAreaView>
  )
}

export default Splash
