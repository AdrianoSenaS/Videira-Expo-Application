import React, { useState } from 'react';
import {
  View, Text, SafeAreaView, StatusBar,
  TouchableOpacity, TextInput, ScrollView
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useTheme } from '../themes/ThemeContext';
import { lightTheme, darkTheme } from '../themes/Themes';
import Ionicons from '@expo/vector-icons/Ionicons';

const OracaoScreen: React.FC = ({ navigation }: any) => {
  const { theme } = useTheme();
  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  // Simula se o usuário está logado ou não
  const isLoggedIn = true;

  const [tipoOracao, setTipoOracao] = useState('Cura');
  const [nome, setNome] = useState(isLoggedIn ? 'Meu nome' : '');
  const [descricao, setDescricao] = useState('');

  const tipos = ['Cura', 'Família', 'Libertação', 'Relacionamentos', 'Financeira', 'Outros'];

  const handleEnviarPedido = () => {
    if (!descricao || (!nome && !isLoggedIn)) {
      alert('Preencha todos os campos!');
      return;
    }

    const nomeFinal = isLoggedIn && nome === 'Meu nome' ? 'Usuário Logado' : nome;
    console.log({ tipoOracao, nomeFinal, descricao });
    alert('Pedido enviado com sucesso!');
    navigation.goBack();
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: currentTheme.backgroundColor }}>
      <StatusBar barStyle={theme === 'light' ? 'dark-content' : 'light-content'} />

      <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: 10 }}>
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={30} color={currentTheme.buttonColor} />
          <Text style={{ color: currentTheme.buttonColor, fontSize: 18 }}>Orações</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <Text style={{
          fontSize: 24,
          color: currentTheme.textColor,
          marginBottom: 20,
          textAlign: 'center'
        }}>
          Pedido de Oração
        </Text>

        <Text style={{ fontSize: 16, color: currentTheme.textColorSecondary, marginBottom: 10 }}>
          Tipo de Oração:
        </Text>
        <View style={{
          backgroundColor: currentTheme.colorSecondary,
          borderRadius: 10,
          marginBottom: 20,
        }}>
          <Picker
            selectedValue={tipoOracao}
            onValueChange={(itemValue) => setTipoOracao(itemValue)}
            style={{
              color: currentTheme.textColor,
            }}
            dropdownIconColor={currentTheme.textColor}
          >
            {tipos.map((t) => <Picker.Item key={t} label={t} value={t} />)}
          </Picker>
        </View>

        {isLoggedIn ? (
          <>
            <Text style={{ fontSize: 16, color: currentTheme.textColorSecondary, marginBottom: 10 }}>
              Nome:
            </Text>
            <TextInput
              placeholder="Digite o nome ou escreva 'Meu nome'"
              value={nome}
              onChangeText={setNome}
              placeholderTextColor={currentTheme.textColorSecondary}
              style={{
                backgroundColor: currentTheme.colorSecondary,
                color: currentTheme.textColor,
                padding: 12,
                borderRadius: 10,
                marginBottom: 20
              }}
            />
          </>
        ) : (
          <>
            <Text style={{ fontSize: 16, color: currentTheme.textColorSecondary, marginBottom: 10 }}>
              Nome da pessoa:
            </Text>
            <TextInput
              placeholder="Ex: Maria da Silva"
              value={nome}
              onChangeText={setNome}
              placeholderTextColor={currentTheme.textColorSecondary}
              style={{
                backgroundColor: currentTheme.colorSecondary,
                color: currentTheme.textColor,
                padding: 12,
                borderRadius: 10,
                marginBottom: 20
              }}
            />
          </>
        )}

        <Text style={{ fontSize: 16, color: currentTheme.textColorSecondary, marginBottom: 10 }}>
          Descrição do pedido:
        </Text>
        <TextInput
          placeholder="Escreva seu pedido de oração aqui"
          value={descricao}
          onChangeText={setDescricao}
          placeholderTextColor={currentTheme.textColorSecondary}
          multiline
          numberOfLines={4}
          style={{
            backgroundColor: currentTheme.colorSecondary,
            color: currentTheme.textColor,
            padding: 12,
            borderRadius: 10,
            marginBottom: 30,
            textAlignVertical: 'top'
          }}
        />

        <TouchableOpacity
          onPress={handleEnviarPedido}
          style={{
            backgroundColor: currentTheme.buttonColor,
            padding: 14,
            borderRadius: 10,
            alignItems: 'center'
          }}
        >
          <Text style={{ color: '#fff', fontSize: 16 }}>Enviar Pedido</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OracaoScreen;
