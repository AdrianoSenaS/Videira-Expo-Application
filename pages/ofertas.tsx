import React, { useState } from 'react';
import {
  View, Text, SafeAreaView, StatusBar,
  TouchableOpacity, TextInput, ScrollView
} from 'react-native';
import { useTheme } from '../themes/ThemeContext';
import { lightTheme, darkTheme } from '../themes/Themes';
import Ionicons from '@expo/vector-icons/Ionicons';

const OfertaScreen: React.FC = ({ navigation }: any) => {
  const { theme } = useTheme();
  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  const [tipo, setTipo] = useState('Dízimo');
  const [valor, setValor] = useState('');

  const tiposOferta = ['Dízimo', 'Oferta Missionária', 'Projeto Social', 'Primícias'];

  const handlePagamento = () => {
    if (!valor) return alert('Informe o valor da oferta.');
    navigation.navigate('PagamentoOferta', { tipo, valor });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: currentTheme.backgroundColor }}>
      <StatusBar barStyle={theme === 'light' ? 'dark-content' : 'light-content'} />

      <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: 10 }}>
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={30} color={currentTheme.buttonColor} />
          <Text style={{ color: currentTheme.buttonColor, fontSize: 18 }}>Ofertas</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <Text style={{
          fontSize: 24,
          color: currentTheme.textColor,
          marginBottom: 20,
          textAlign: 'center'
        }}>
          Fazer uma Oferta
        </Text>

        <Text style={{ fontSize: 16, color: currentTheme.textColorSecondary, marginBottom: 10 }}>
          Selecione o tipo de oferta:
        </Text>

        {tiposOferta.map((opcao) => (
          <TouchableOpacity
            key={opcao}
            onPress={() => setTipo(opcao)}
            style={{
              backgroundColor: tipo === opcao ? currentTheme.buttonColor : currentTheme.colorSecondary,
              padding: 12,
              borderRadius: 10,
              marginBottom: 10,
            }}
          >
            <Text style={{
              color: tipo === opcao ? '#fff' : currentTheme.textColor,
              fontSize: 16,
              textAlign: 'center'
            }}>
              {opcao}
            </Text>
          </TouchableOpacity>
        ))}

        <Text style={{ fontSize: 16, color: currentTheme.textColorSecondary, marginBottom: 10, marginTop: 20 }}>
          Valor da oferta (R$):
        </Text>

        <TextInput
          placeholder="Ex: 100.00"
          placeholderTextColor={currentTheme.textColorSecondary}
          keyboardType="numeric"
          value={valor}
          onChangeText={setValor}
          style={{
            backgroundColor: currentTheme.colorSecondary,
            color: currentTheme.textColor,
            padding: 12,
            borderRadius: 10,
            fontSize: 16,
            marginBottom: 30
          }}
        />

        <TouchableOpacity
          style={{
            backgroundColor: currentTheme.buttonColor,
            padding: 14,
            borderRadius: 10,
            alignItems: 'center',
          }}
          onPress={handlePagamento}
        >
          <Text style={{ color: '#fff', fontSize: 16 }}>Ir para Pagamento</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OfertaScreen;
