// App.tsx
import React from 'react';
import { View, Text, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native';
import { useTheme } from '../themes/ThemeContext';
import { lightTheme, darkTheme } from '../themes/Themes';

const OfertaScreen: React.FC = ({ navigation }: any) => {
  const { theme } = useTheme();
  const currentTheme = theme === 'light' ? lightTheme : darkTheme;


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: currentTheme.backgroundColor }}>
      <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start' }}>
        <TouchableOpacity style={{ padding: 10 }} onPress={() => navigation.goBack()}>
          <Text style={{ color: currentTheme.textColor, fontSize: 16 }}>Voltar</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: currentTheme.bordercolor }}>
        <Text style={{ color: currentTheme.textColor }}> Página para Ofertas</Text>
      </View>
    </SafeAreaView>
  );
};
export default OfertaScreen;
