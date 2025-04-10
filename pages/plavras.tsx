import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, SafeAreaView, StatusBar, Dimensions } from 'react-native';
import { useTheme } from '../themes/ThemeContext';
import { lightTheme, darkTheme } from '../themes/Themes';
import Ionicons from '@expo/vector-icons/Ionicons';

const { width } = Dimensions.get('window');
const itemWidth = (width - 40) / 3; // 3 itens por linha com margens

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
    {
      id: '3',
      titulo: 'Fé que Move Montanhas',
      descricao: 'Como manter a fé em tempos difíceis.',
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
    {
      id: '2',
      titulo: 'Fé que Move Montanhas',
      descricao: 'Como manter a fé em tempos difíceis.',
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
    {
      id: '2',
      titulo: 'Fé que Move Montanhas',
      descricao: 'Como manter a fé em tempos difíceis.',
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
    {
      id: '2',
      titulo: 'Fé que Move Montanhas',
      descricao: 'Como manter a fé em tempos difíceis.',
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
    {
      id: '2',
      titulo: 'Fé que Move Montanhas',
      descricao: 'Como manter a fé em tempos difíceis.',
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
    {
      id: '2',
      titulo: 'Fé que Move Montanhas',
      descricao: 'Como manter a fé em tempos difíceis.',
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
      margin: 5,
      borderRadius: 12,
      overflow: 'hidden',
      width: itemWidth,
    }}>
      <TouchableOpacity onPress={() => navigation.navigate('LeitorPDFScreen', { pdf: item })}>
        <Image
          source={{ uri: item.capa }}
          style={{ width: '100%', height: 140 }}
          resizeMode="cover"
        />
        <View style={{ padding: 8 }}>
          <Text numberOfLines={2} style={{ color: currentTheme.textColor, fontSize: 14, fontWeight: 'bold' }}>{item.titulo}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: currentTheme.backgroundColor }}>
      <StatusBar barStyle={theme === 'light' ? 'dark-content' : 'light-content'} />
      <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: 10, marginLeft: 10 }}>
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={30} color={currentTheme.buttonColor} />
          <Text style={{ color: currentTheme.buttonColor, fontSize: 18 }}>Palavras</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={palavras}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        numColumns={3}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 10 }}
      />
    </SafeAreaView>
  );
};

export default PalavraCelulaScreen;