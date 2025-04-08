import React from 'react';
import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, Alert } from 'react-native';
import { useTheme } from '../themes/ThemeContext';
import { lightTheme, darkTheme } from '../themes/Themes';
import * as FileSystem from 'expo-file-system';
import Ionicons from '@expo/vector-icons/Ionicons';
import Pdf from 'react-native-pdf';

const LeitorPDFScreen: React.FC = ({ route, navigation }: any) => {
  const { pdf } = route.params;
  const { theme } = useTheme();
  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  const salvarOffline = async () => {
    try {
      const fileUri = `${FileSystem.documentDirectory}${pdf.titulo.replace(/\s/g, '_')}.pdf`;
      const download = await FileSystem.downloadAsync(pdf.pdfUrl, fileUri);

      Alert.alert('Sucesso', 'PDF salvo para leitura offline!');
      console.log('Arquivo salvo em:', download.uri);
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível salvar o PDF.');
      console.error(error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: currentTheme.backgroundColor }}>
      <StatusBar barStyle={theme === 'light' ? 'dark-content' : 'light-content'} />

      <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: 10, paddingHorizontal: 10 }}>
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={30} color={currentTheme.buttonColor} />
          <Text style={{ color: currentTheme.buttonColor, fontSize: 18 }}>Voltar</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1, margin: 10, borderRadius: 10, overflow: 'hidden' }}>
        <Pdf
          source={{ uri: pdf.pdfUrl }}
          style={{ flex: 1 }}
          trustAllCerts={true} // opcional se você usa HTTPS com certificado próprio
          onError={(error) => {
            console.log('Erro ao carregar PDF:', error);
            Alert.alert('Erro', 'Não foi possível carregar o PDF.');
          }}
        />
      </View>

      <TouchableOpacity
        onPress={salvarOffline}
        style={{
          backgroundColor: currentTheme.buttonColor,
          padding: 14,
          borderRadius: 10,
          alignItems: 'center',
          margin: 20
        }}
      >
        <Text style={{ color: '#fff', fontSize: 16 }}>Salvar para ler offline</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default LeitorPDFScreen;
