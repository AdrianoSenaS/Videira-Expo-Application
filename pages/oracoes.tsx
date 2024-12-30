// App.tsx
import React from 'react';
import { View, Text, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native';
import { useTheme } from '../themes/ThemeContext';
import { lightTheme, darkTheme } from '../themes/Themes';
import Ionicons from '@expo/vector-icons/Ionicons';

const OracaoScreen: React.FC = ({ navigation }: any) => {
  const { theme } = useTheme();
  const currentTheme = theme === 'light' ? lightTheme : darkTheme;


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: currentTheme.backgroundColor }}>
      <StatusBar barStyle={theme === 'light' ? 'dark-content' : 'light-content'} />
      <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: 10 }}>
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={30} color={currentTheme.buttonColor} />
          <Text style={{ color: currentTheme.buttonColor, fontSize: 18 }}>Pedidos de oração</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: currentTheme.backgroundColor }}>
        <Text style={{ color: currentTheme.textColor }}> Página para Orações</Text>
      </View>
    </SafeAreaView>
  );
};
export default OracaoScreen;
