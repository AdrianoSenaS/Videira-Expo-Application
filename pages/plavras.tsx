import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import { useTheme } from '../themes/ThemeContext';
import { lightTheme, darkTheme } from '../themes/Themes';
import Ionicons from '@expo/vector-icons/Ionicons';

const PalavraCelulaScreen: React.FC = ({ route, navigation }: any) => {
  const { theme } = useTheme();
  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  const palavras = [
    {
      id: '1',
      titulo: 'O Poder da Unidade',
      descricao: 'Uma palavra sobre a importância da comunhão.',
      pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      capa: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStVOEyuUt0Vh3xMpiaxAGViE8hXDWXEGq9XA&s',
    },
    {
      id: '2',
      titulo: 'Fé que Move Montanhas',
      descricao: 'Como manter a fé em tempos difíceis.',
      pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      capa: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStVOEyuUt0Vh3xMpiaxAGViE8hXDWXEGq9XA&s',
    },
    // pode vir da API depois
  ];

  const renderItem = ({ item }: any) => (


    <View style={{
      backgroundColor: currentTheme.colorSecondary,
      margin: 10,
      borderRadius: 12,
      overflow: 'hidden',
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 6,
    }}>
      <Image
        source={{ uri: item.capa }}
        style={{ width: '100%', height: 180 }}
        resizeMode="cover"
      />
      <View style={{ padding: 12 }}>
        <Text style={{ color: currentTheme.textColor, fontSize: 18, fontWeight: 'bold' }}>{item.titulo}</Text>
        <Text style={{ color: currentTheme.textColorSecondary, marginTop: 4 }}>{item.descricao}</Text>

        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 12 }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('LeitorPDFScreen', { pdf: item })}
            style={{ backgroundColor: currentTheme.buttonColor, padding: 10, borderRadius: 8, width: '100%', alignItems: 'center', }}
          >
            <Text style={{ color: '#fff' }}>Ler</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: currentTheme.backgroundColor }}>
      <StatusBar barStyle={theme === 'light' ? 'dark-content' : 'light-content'} />
      <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: 10 }}>
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={30} color={currentTheme.buttonColor} />
          <Text style={{ color: currentTheme.buttonColor, fontSize: 18 }}>Palavras</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={palavras}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </SafeAreaView>
  );
};

export default PalavraCelulaScreen;
