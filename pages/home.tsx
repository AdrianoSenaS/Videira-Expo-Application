import React from 'react';
import { SafeAreaView, Image, StatusBar, ImageBackground, View, TouchableOpacity, Text } from 'react-native';
import { useTheme } from '../themes/ThemeContext';
import { lightTheme, darkTheme } from '../themes/Themes';
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Entypo from '@expo/vector-icons/Entypo';

const HomeScreen: React.FC = ({ route, navigation }: any) => {
  const { theme, toggleTheme } = useTheme();
  let currentTheme = theme === 'light' ? lightTheme : darkTheme;
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: currentTheme.backgroundColor }}>
      <StatusBar barStyle={theme === 'light' ? 'dark-content' : 'light-content'} />
      <ImageBackground source={currentTheme.backgroundImage} style={{ flex: 1, justifyContent: 'center', width: '100%' }}>
        <View style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', backgroundColor: currentTheme.HomeColor }}>
          <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start' }}>
            <Image style={{ width: 150, height: 57, marginLeft: 10 }} source={currentTheme.logo} />
          </View>
          <View style={{ justifyContent: 'flex-end', alignItems: 'center', flexDirection: 'row' }}>
            <TouchableOpacity style={{ paddingRight: 30 }} onPress={toggleTheme}>
              <Feather name={currentTheme.iconTheme} size={24} color={currentTheme.textColor} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Conta')} style={{ paddingRight: 10 }}>
              <Feather name="user" size={24} color={currentTheme.textColor} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flex: 1, backgroundColor: currentTheme.HomeColor, height: '100%', width: '100%' }}>
          <View style={{ flex: 1, margin: 'auto' }}>
            <View style={{ justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', marginTop: 60 }}>
              <View style={{ alignItems: 'center', width: 120, height: 150 }}>
                <TouchableOpacity onPress={() => navigation.navigate('Igreja')} style={{ alignItems: 'center', justifyContent: 'center', width: 90, height: 90, borderRadius: 20, borderStyle: 'solid', borderWidth: 2, borderColor: currentTheme.bordercolor, backgroundColor: currentTheme.buttonColorHome }}>
                  <AntDesign name="home" size={70} color={currentTheme.textColor} />
                </TouchableOpacity>
                <Text style={{ color: currentTheme.textColor, fontSize: 16, marginTop: 5 }}>Igreja </Text>
              </View>
              <View style={{ alignItems: 'center', width: 120, height: 150 }}>
                <TouchableOpacity onPress={() => navigation.navigate('Eventos')} style={{ alignItems: 'center', justifyContent: 'center', width: 90, height: 90, borderRadius: 20, borderStyle: 'solid', borderWidth: 2, borderColor: currentTheme.bordercolor, backgroundColor: currentTheme.buttonColorHome }}>
                  <SimpleLineIcons name="event" size={60} color={currentTheme.textColor} />
                </TouchableOpacity>
                <Text style={{ color: currentTheme.textColor, fontSize: 16, marginTop: 5 }}>Eventos </Text>
              </View>
              <View style={{ alignItems: 'center', width: 120, height: 150 }}>
                <TouchableOpacity onPress={() => navigation.navigate('Escola')} style={{ alignItems: 'center', justifyContent: 'center', width: 90, height: 90, borderRadius: 20, borderStyle: 'solid', borderWidth: 2, borderColor: currentTheme.bordercolor, backgroundColor: currentTheme.buttonColorHome }}>
                  <Ionicons name="school-outline" size={70} color={currentTheme.textColor} />
                </TouchableOpacity>
                <Text style={{ color: currentTheme.textColor, fontSize: 16, marginTop: 5 }}>Escola Videira</Text>
              </View>
            </View>

            <View style={{ justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', marginTop: 20 }}>
              <View style={{ alignItems: 'center', width: 120, height: 150 }}>
                <TouchableOpacity onPress={() => navigation.navigate('Oracao')} style={{ alignItems: 'center', justifyContent: 'center', width: 90, height: 90, borderRadius: 20, borderStyle: 'solid', borderWidth: 2, borderColor: currentTheme.bordercolor, backgroundColor: currentTheme.buttonColorHome }}>
                  <FontAwesome6 name="book-bible" size={60} color={currentTheme.textColor} />
                </TouchableOpacity>
                <Text style={{ color: currentTheme.textColor, fontSize: 16, marginTop: 5 }}>Pedidos de</Text>
                <Text style={{ color: currentTheme.textColor, fontSize: 16 }}>oração</Text>
              </View>
              <View style={{ alignItems: 'center', width: 120, height: 150 }}>
                <TouchableOpacity onPress={() => navigation.navigate('Ofertas')} style={{ alignItems: 'center', justifyContent: 'center', width: 90, height: 90, borderRadius: 20, borderStyle: 'solid', borderWidth: 2, borderColor: currentTheme.bordercolor, backgroundColor: currentTheme.buttonColorHome }}>
                  <MaterialCommunityIcons name="offer" size={70} color={currentTheme.textColor} />
                </TouchableOpacity>
                <Text style={{ color: currentTheme.textColor, fontSize: 16, marginTop: 5 }}>Ofertas</Text>
              </View>
              <View style={{ alignItems: 'center', width: 120, height: 150 }}>
                <TouchableOpacity onPress={() => navigation.navigate('Palavras')} style={{ alignItems: 'center', justifyContent: 'center', width: 90, height: 90, borderRadius: 20, borderStyle: 'solid', borderWidth: 2, borderColor: currentTheme.bordercolor, backgroundColor: currentTheme.buttonColorHome }}>
                  <Entypo name="open-book" size={70} color={currentTheme.textColor} />
                </TouchableOpacity>
                <Text style={{ color: currentTheme.textColor, fontSize: 16, marginTop: 5 }}>Palavra da</Text>
                <Text style={{ color: currentTheme.textColor, fontSize: 16 }}>célula</Text>
              </View>
            </View>

            <View style={{ justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', alignContent: 'center', marginTop: 20 }}>
              <View style={{ alignItems: 'center', width: 120, height: 150 }}>
                <TouchableOpacity onPress={() => navigation.navigate('Endereco')} style={{ alignItems: 'center', justifyContent: 'center', width: 90, height: 90, borderRadius: 20, borderStyle: 'solid', borderWidth: 2, borderColor: currentTheme.bordercolor, backgroundColor: currentTheme.buttonColorHome }}>
                  <MaterialCommunityIcons name="google-maps" size={70} color={currentTheme.textColor} />
                </TouchableOpacity>
                <Text style={{ color: currentTheme.textColor, fontSize: 16, marginTop: 5 }}>Endereço</Text>
                <Text style={{ color: currentTheme.textColor, fontSize: 16 }}> células</Text>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default HomeScreen;