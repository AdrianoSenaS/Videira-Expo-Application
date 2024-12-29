// App.tsx
import React from 'react';
import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, ImageBackground } from 'react-native';
import { useTheme } from '../themes/ThemeContext';
import { lightTheme, darkTheme } from '../themes/Themes';
import Ionicons from '@expo/vector-icons/Ionicons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import VideiraScreen from './Videira';
import SelecaoIgreja from './selecaoIgreja'

const IgrejaScreen: React.FC = ({ navigation }: any) => {
  const { theme } = useTheme();
  const currentTheme = theme === 'light' ? lightTheme : darkTheme;
  const Tab = createMaterialTopTabNavigator();
  let Videira = 'Videira Chapadão do Céu';


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: currentTheme.backgroundColor }}>
      <StatusBar barStyle={theme === 'light' ? 'dark-content' : 'light-content'} />
      <View style={{ justifyContent: 'flex-start', alignItems: 'center', backgroundColor: currentTheme.backgroundColor, height: 250 }}>
        <ImageBackground source={currentTheme.logoIgrejas} style={{ width: '100%', height: '100%' }}>
          <View style={{ width: '100%', height: '100%', backgroundColor: currentTheme.IgejaColor }}>
            <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: 10 }}>
              <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} onPress={() => navigation.goBack()}>
                <Ionicons name="chevron-back" size={30} color={currentTheme.buttonColor} />
                <Text style={{ color: currentTheme.buttonColor, fontSize: 18 }}>Igreja</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
      <Tab.Navigator screenOptions={{ tabBarStyle: { backgroundColor: currentTheme.backgroundColor }, tabBarLabelStyle: { color: currentTheme.textColor } }}>
        <Tab.Screen name={Videira} component={VideiraScreen} />
        <Tab.Screen name="Igrejas" component={SelecaoIgreja} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default IgrejaScreen;


