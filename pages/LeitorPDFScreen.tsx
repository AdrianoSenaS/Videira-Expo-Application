import React from 'react';
import { View, Text, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native';
import { useTheme } from '../themes/ThemeContext';
import { lightTheme, darkTheme } from '../themes/Themes';
import Ionicons from '@expo/vector-icons/Ionicons';
import { WebView } from 'react-native-webview';

const LeitorPDFScreen: React.FC = ({ route, navigation }: any) => {
  const { pdf } = route.params;
  const { theme } = useTheme();
  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  const viewerUrl = `https://docs.google.com/gview?embedded=true&url=${encodeURIComponent(pdf.pdfUrl)}`;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: currentTheme.backgroundColor }}>
      <StatusBar barStyle={theme === 'light' ? 'dark-content' : 'light-content'} />

      <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: 10, paddingHorizontal: 10 }}>
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={30} color={currentTheme.buttonColor} />
          <Text style={{ color: currentTheme.buttonColor, fontSize: 18 }}>Voltar</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1, overflow: 'hidden' }}>
        <WebView
          source={{ uri: viewerUrl }}
          style={{ flex: 1 }}
          originWhitelist={['*']}
          useWebKit
          javaScriptEnabled
          startInLoadingState
        />
      </View>
    </SafeAreaView>
  );
};

export default LeitorPDFScreen;