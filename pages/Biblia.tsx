import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  FlatList,
  ScrollView,
  BackHandler
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Picker } from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTheme } from '../themes/ThemeContext';
import { lightTheme, darkTheme } from '../themes/Themes';
import * as FileSystem from 'expo-file-system';
import { useFocusEffect } from '@react-navigation/native';
import acf from '../data/formatted_ACF.json';
import ara from '../data/formatted_ARA.json';
import arc from '../data/formatted_ARC.json';
import as21 from '../data/formatted_AS21.json';
import jfaa from '../data/formatted_JFAA.json';
import kja from '../data/formatted_KJA.json';
import kjf from '../data/formatted_KJF.json';
import naa from '../data/formatted_NAA.json';
import nbv from '../data/formatted_NBV.json';
import ntlh from '../data/formatted_NTLH.json';
import nvi from '../data/formatted_NVI.json';
import nvt from '../data/formatted_NVT.json';
import tb from '../data/formatted_TB.json';

const versions = [
  { label: 'ACF Almeida Corrigida e Fiel', value: 'acf' },
  { label: 'ARA Almeida Revista e Atualizada', value: 'ara' },
  { label: 'ARC Almeida Revista e Corrigida', value: 'arc' },
  { label: 'AS21 Almeida Século 21', value: 'as21' },
  { label: 'JFAA João Ferreira de Almeida Atualizada', value: 'jfaa' },
  { label: 'KJA King James Atualizada', value: 'kja' },
  { label: 'KJF King James Fiel', value: 'kjf' },
  { label: 'NAA Nova Almeida Atualizada', value: 'naa' },
  { label: 'NBV Nova Bíblia Viva', value: 'nbv' },
  { label: 'NTLH Nova Tradução na Linguagem de Hoje **', value: 'ntlh' },
  { label: 'NVI Nova Versão Internacional', value: 'nvi' },
  { label: 'NVT Nova Versão Transformadora', value: 'nvt' },
  { label: 'TB Tradução Brasileira', value: 'tb' }
];

const bibleVersions: { [key: string]: any } = {
  acf, ara, arc, as21, jfaa, kja, kjf, naa, nbv, ntlh, nvi, nvt, tb
};

const verseColors = [
  { bg: '#FFE082', text: '#000' },
  { bg: '#BBDEFB', text: '#000' },
  { bg: '#E0E0E0', text: '#000' },
];

const BlibliaScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const { theme } = useTheme();
  const currentTheme = theme === 'light' ? lightTheme : darkTheme;
  const [selectedVersion, setSelectedVersion] = useState('acf');
  const [selectedBookIndex, setSelectedBookIndex] = useState<number | null>(null);
  const [selectedChapterIndex, setSelectedChapterIndex] = useState<number | null>(null);
  const [highlightedVerses, setHighlightedVerses] = useState<{ [key: number]: number }>({});
  const [activeColorIndex, setActiveColorIndex] = useState(0);
  const [fontSize, setFontSize] = useState(16);
  const [bibleData, setBibleData] = useState<any>(null);

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        if (selectedChapterIndex !== null) {
          setSelectedChapterIndex(null);
          return true;
        } else if (selectedBookIndex !== null) {
          setSelectedBookIndex(null);
          return true;
        }
        return false;
      };
      BackHandler.addEventListener('hardwareBackPress', onBackPress);
      return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [selectedBookIndex, selectedChapterIndex])
  );

  useEffect(() => {
    const loadBible = async () => {
      try {
        const localPath = `${FileSystem.documentDirectory}${selectedVersion}.json`;
        const fileInfo = await FileSystem.getInfoAsync(localPath);
        if (fileInfo.exists) {
          const content = await FileSystem.readAsStringAsync(localPath);
          setBibleData(JSON.parse(content));
        } else {
          setBibleData(bibleVersions[selectedVersion] || bibleVersions.acf);
        }
      } catch {
        setBibleData(bibleVersions.acf);
      }
      setSelectedBookIndex(null);
      setSelectedChapterIndex(null);
      setHighlightedVerses({});
    };
    loadBible();
  }, [selectedVersion]);

  useEffect(() => {
    const loadHighlights = async () => {
      if (selectedBookIndex !== null && selectedChapterIndex !== null) {
        const key = `${selectedVersion}-${selectedBookIndex}-${selectedChapterIndex}`;
        const saved = await AsyncStorage.getItem(key);
        if (saved) setHighlightedVerses(JSON.parse(saved));
      }
    };
    loadHighlights();
  }, [selectedBookIndex, selectedChapterIndex]);

  const saveHighlights = async (newHighlights: { [key: number]: number }) => {
    if (selectedBookIndex !== null && selectedChapterIndex !== null) {
      const key = `${selectedVersion}-${selectedBookIndex}-${selectedChapterIndex}`;
      await AsyncStorage.setItem(key, JSON.stringify(newHighlights));
    }
  };

  const clearHighlights = async () => {
    setHighlightedVerses({});
    if (selectedBookIndex !== null && selectedChapterIndex !== null) {
      const key = `${selectedVersion}-${selectedBookIndex}-${selectedChapterIndex}`;
      await AsyncStorage.removeItem(key);
    }
  };

  const books = bibleData || [];
  const oldTestament = books.filter((book: any) => book.testament === 'VT');
  const newTestament = books.filter((book: any) => book.testament === 'NT');

  const handleBack = () => {
    if (selectedChapterIndex !== null) {
      setSelectedChapterIndex(null);
    } else if (selectedBookIndex !== null) {
      setSelectedBookIndex(null);
    } else {
      navigation.goBack();
    }
  };

  const handleChapterChange = (direction: 'prev' | 'next') => {
    if (selectedBookIndex === null || selectedChapterIndex === null) return;
    const totalChapters = books[selectedBookIndex].chapters.length;
    let newIndex = selectedChapterIndex;

    if (direction === 'prev' && selectedChapterIndex > 0) {
      newIndex = selectedChapterIndex - 1;
    } else if (direction === 'next' && selectedChapterIndex < totalChapters - 1) {
      newIndex = selectedChapterIndex + 1;
    }

    if (newIndex !== selectedChapterIndex) {
      setSelectedChapterIndex(newIndex);
      setHighlightedVerses({});
    }
  };

  const renderVerse = (verse: string, index: number) => {
    const colorIndex = highlightedVerses[index];
    const isHighlighted = colorIndex !== undefined;
    const verseColor = verseColors[colorIndex || 0];

    return (
      <TouchableOpacity
        key={index}
        onPress={() => {
          const newHighlights = { ...highlightedVerses, [index]: activeColorIndex };
          setHighlightedVerses(newHighlights);
          saveHighlights(newHighlights);
        }}>
        <Text
          style={{
            fontSize,
            marginVertical: 4,
            backgroundColor: isHighlighted ? verseColor.bg : 'transparent',
            color: isHighlighted ? verseColor.text : currentTheme.textColor,
            padding: 8,
            borderRadius: 8,
          }}>
          {index + 1}. {verse}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: currentTheme.backgroundColor }}>
      <StatusBar barStyle={theme === 'light' ? 'dark-content' : 'light-content'} />

      <View style={{ padding: 10 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
          <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={handleBack}>
            <Ionicons name="chevron-back" size={30} color={currentTheme.buttonColor} />
            <Text style={{ color: currentTheme.buttonColor, fontSize: 18 }}>Bíblia</Text>
          </TouchableOpacity>
        </View>

        <Text style={{ color: currentTheme.textColor, fontWeight: 'bold' }}>Versão da Bíblia:</Text>
        <View style={{ borderWidth: 1, borderColor: currentTheme.bordercolor, marginTop: 5, borderRadius: 6 }}>
          <Picker selectedValue={selectedVersion} onValueChange={setSelectedVersion} style={{ backgroundColor: currentTheme.backgroundColor, color: currentTheme.textColor }}>
            {versions.map(version => (
              <Picker.Item key={version.value} label={version.label} value={version.value} />
            ))}
          </Picker>
        </View>

        {selectedBookIndex !== null && selectedChapterIndex !== null && (
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
            <Text style={{ color: currentTheme.textColor }}>
              {books[selectedBookIndex].name} - Capítulo {selectedChapterIndex + 1}
            </Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              {verseColors.map((color, i) => (
                <TouchableOpacity
                  key={i}
                  onPress={() => setActiveColorIndex(i)}
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: 12,
                    marginHorizontal: 4,
                    backgroundColor: color.bg,
                    borderWidth: activeColorIndex === i ? 2 : 0,
                    borderColor: currentTheme.buttonColor
                  }}
                />
              ))}
              <TouchableOpacity onPress={clearHighlights} style={{ marginLeft: 8 }}>
                <Text style={{ color: currentTheme.buttonColor }}>Limpar</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>

      <View style={{ flex: 1, padding: 10 }}>
        {selectedBookIndex === null ? (
          <ScrollView>
            <Text style={{ color: currentTheme.textColor, fontWeight: 'bold', fontSize: 18, marginBottom: 10 }}>Velho Testamento</Text>
            <FlatList
              data={oldTestament}
              numColumns={2}
              keyExtractor={(_, i) => 'vt' + i}
              columnWrapperStyle={{ justifyContent: 'space-between' }}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={{ backgroundColor: currentTheme.bordercolor, padding: 12, borderRadius: 10, margin: 6, flex: 1 }}
                  onPress={() => setSelectedBookIndex(books.indexOf(item))}>
                  <Text style={{ color: currentTheme.textColor, fontWeight: 'bold' }}>{item.name} ({item.abbrev.toUpperCase()})</Text>
                </TouchableOpacity>
              )}
            />
            <Text style={{ color: currentTheme.textColor, fontWeight: 'bold', fontSize: 18, marginTop: 20, marginBottom: 10 }}>Novo Testamento</Text>
            <FlatList
              data={newTestament}
              numColumns={2}
              keyExtractor={(_, i) => 'nt' + i}
              columnWrapperStyle={{ justifyContent: 'space-between' }}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={{ backgroundColor: currentTheme.bordercolor, padding: 12, borderRadius: 10, margin: 6, flex: 1 }}
                  onPress={() => setSelectedBookIndex(books.indexOf(item))}>
                  <Text style={{ color: currentTheme.textColor, fontWeight: 'bold' }}>{item.name} ({item.abbrev.toUpperCase()})</Text>
                </TouchableOpacity>
              )}
            />
          </ScrollView>
        ) : selectedChapterIndex === null ? (
          <FlatList
            data={books[selectedBookIndex].chapters}
            numColumns={2}
            columnWrapperStyle={{ justifyContent: 'space-between' }}
            keyExtractor={(_, i) => i.toString()}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                style={{ backgroundColor: currentTheme.bordercolor, padding: 12, borderRadius: 10, margin: 6, flex: 1, alignItems: 'center' }}
                onPress={() => setSelectedChapterIndex(index)}>
                <Text style={{ color: currentTheme.textColor, fontWeight: 'bold' }}>Capítulo {index + 1}</Text>
              </TouchableOpacity>
            )}
          />
        ) : (
          <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
              <TouchableOpacity onPress={() => setFontSize(size => Math.max(12, size - 2))}>
                <Text style={{ fontSize: 18, color: currentTheme.buttonColor }}>A-</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setFontSize(size => Math.min(32, size + 2))}>
                <Text style={{ fontSize: 22, color: currentTheme.buttonColor }}>A+</Text>
              </TouchableOpacity>
            </View>

            <ScrollView>
              {books[selectedBookIndex].chapters[selectedChapterIndex].map(renderVerse)}
            </ScrollView>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
              <TouchableOpacity onPress={() => handleChapterChange('prev')} disabled={selectedChapterIndex === 0}>
                <Text style={{ color: currentTheme.buttonColor }}>← Capítulo anterior</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleChapterChange('next')} disabled={selectedChapterIndex === books[selectedBookIndex].chapters.length - 1}>
                <Text style={{ color: currentTheme.buttonColor }}>Próximo capítulo →</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default BlibliaScreen;
