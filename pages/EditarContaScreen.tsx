import React, { useState } from 'react';
import { View, Text, SafeAreaView, StatusBar, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useTheme } from '../themes/ThemeContext';
import { lightTheme, darkTheme } from '../themes/Themes';

const EditarContaScreen: React.FC = ({ navigation }: any) => {
  const { theme } = useTheme();
  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  const [nome, setNome] = useState('João da Silva');
  const [email, setEmail] = useState('joao@email.com');
  const [telefone, setTelefone] = useState('(11) 91234-5678');
  const [cpf, setCpf] = useState('123.456.789-00');
  const [endereco, setEndereco] = useState('Rua das Flores, 123 - São Paulo/SP');
  const [pagamento, setPagamento] = useState('Cartão de Crédito (final 1234)');

  const salvar = () => {
    // Aqui você pode salvar os dados
    console.log({ nome, email, telefone, cpf, endereco, pagamento });
    navigation.goBack();
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: currentTheme.backgroundColor }}>
      <StatusBar barStyle={theme === 'light' ? 'dark-content' : 'light-content'} />

      <TouchableOpacity style={{ padding: 10 }} onPress={() => navigation.goBack()}>
        <Text style={{ color: currentTheme.textColor, fontSize: 16 }}>Voltar</Text>
      </TouchableOpacity>

      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <Text style={{ color: currentTheme.textColor, fontSize: 24, marginBottom: 20, textAlign: 'center' }}>
          Editar Conta
        </Text>

        {[
          { label: 'Nome', value: nome, setter: setNome },
          { label: 'Email', value: email, setter: setEmail },
          { label: 'Telefone', value: telefone, setter: setTelefone },
          { label: 'CPF', value: cpf, setter: setCpf },
          { label: 'Endereço', value: endereco, setter: setEndereco },
          { label: 'Forma de Pagamento', value: pagamento, setter: setPagamento },
        ].map(({ label, value, setter }) => (
          <TextInput
            key={label}
            placeholder={label}
            placeholderTextColor={currentTheme.textColorSecondary}
            value={value}
            onChangeText={setter}
            style={{
              backgroundColor: currentTheme.colorSecondary,
              color: currentTheme.textColor,
              padding: 12,
              borderRadius: 10,
              marginBottom: 15,
              fontSize: 16
            }}
          />
        ))}

        <TouchableOpacity
          onPress={salvar}
          style={{
            backgroundColor: currentTheme.buttonColor,
            padding: 14,
            borderRadius: 10,
            alignItems: 'center',
            marginTop: 10
          }}
        >
          <Text style={{ color: '#fff', fontSize: 16 }}>Salvar</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditarContaScreen;
