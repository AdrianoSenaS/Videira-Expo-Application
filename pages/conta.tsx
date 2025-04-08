import React from 'react';
import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useTheme } from '../themes/ThemeContext';
import { lightTheme, darkTheme } from '../themes/Themes';

const ContaScreen: React.FC = ({ navigation }: any) => {
  const { theme } = useTheme();
  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  const usuario = {
    nome: 'João da Silva',
    email: 'joao@email.com',
    telefone: '(11) 91234-5678',
    cpf: '123.456.789-00',
    endereco: 'Rua das Flores, 123 - São Paulo/SP',
    pagamento: 'Cartão de Crédito (final 1234)',
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: currentTheme.backgroundColor }}>
      <StatusBar barStyle={theme === 'light' ? 'dark-content' : 'light-content'} />

      <TouchableOpacity style={{ padding: 10 }} onPress={() => navigation.goBack()}>
        <Text style={{ color: currentTheme.textColor, fontSize: 16 }}>Voltar</Text>
      </TouchableOpacity>

      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <Image source={currentTheme.logo} style={{ width: 100, height: 100, alignSelf: 'center', marginBottom: 20 }} resizeMode="contain" />

        <Text style={{ fontSize: 24, color: currentTheme.textColor, marginBottom: 20, textAlign: 'center' }}>Minha Conta</Text>

        {Object.entries(usuario).map(([key, value]) => (
          <View key={key} style={{
            marginBottom: 15,
            backgroundColor: currentTheme.colorSecondary,
            padding: 15,
            borderRadius: 10,
          }}>
            <Text style={{ color: currentTheme.textColorSecondary, fontSize: 14 }}>{key.toUpperCase()}</Text>
            <Text style={{ color: currentTheme.textColor, fontSize: 16 }}>{value}</Text>
          </View>
        ))}

        <TouchableOpacity
          style={{
            marginTop: 30,
            backgroundColor: currentTheme.buttonColor,
            padding: 14,
            borderRadius: 10,
            alignItems: 'center'
          }}
          onPress={() => navigation.navigate('EditarConta')}
        >
          <Text style={{ color: '#fff', fontSize: 16 }}>Editar Dados</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ContaScreen;
