// App.tsx
import React from 'react';
import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, ScrollView, Image, FlatList } from 'react-native';
import { useTheme } from '../themes/ThemeContext';
import { lightTheme, darkTheme } from '../themes/Themes';
import Ionicons from '@expo/vector-icons/Ionicons';

const EventoSreen: React.FC = ({ navigation }: any) => {
  const { theme } = useTheme();
  const currentTheme = theme === 'light' ? lightTheme : darkTheme;
  const data = [
    {
      id: '1',
      destaque: 'true',
      image: 'https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      data: 'QUA, 01 JAN 00:00',
      evento: 'Jantar Culto da virada',
      local: 'Igreja videira',
      checkout:'Inscições abertas',
      sobre: 'descrição do evento da igreja'
    }
  ]

  const data1 = [
    {
      id: '1',
      destaque: '',
      image: 'https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      data: 'QUA, 01 JAN 00:00',
      evento: 'Jantar Culto da virada',
      local: 'Igreja videira',
      checkout:'Inscições abertas',
      sobre: 'descrição do evento da igreja'
    },
    {
      id: '2',
      destaque: '',
      image: 'https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      data: 'QUA, 01 JAN 00:00',
      evento: 'Jantar Culto da virada tudo para sempre - juntos ',
      local: 'Igreja videira',
      checkout:'',
      sobre: 'descrição do evento da igreja'
    },
    {
      id: '3',
      destaque: '',
      image: 'https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      data: 'QUA, 01 JAN 00:00',
      evento: 'Jantar Culto da virada',
      local: 'Igreja videira',
      checkout:'',
      sobre: 'descrição do evento da igreja'
    },
    {
      id: '4',
      destaque: '',
      image: 'https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      data: 'QUA, 01 JAN 00:00',
      evento: 'Jantar Culto da virada tudo para sempre - juntos ',
      local: 'Igreja videira',
      checkout:'',
      sobre: 'descrição do evento da igreja'
    },
    {
      id: '5',
      destaque: '',
      image: 'https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      data: 'QUA, 01 JAN 00:00',
      evento: 'Jantar Culto da virada',
      local: 'Igreja videira',
      checkout:'',
      sobre: 'descrição do evento da igreja'
    },
    {
      id: '6',
      destaque: '',
      image: 'https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      data: 'QUA, 01 JAN 00:00',
      evento: 'Jantar Culto da virada tudo para sempre - juntos ',
      local: 'Igreja videira',
      checkout:'Inscições abertas',
      sobre: 'descrição do evento da igreja'
    },
    {
      id: '7',
      destaque: '',
      image: 'https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      data: 'QUA, 01 JAN 00:00',
      evento: 'Jantar Culto da virada',
      local: 'Igreja videira',
      checkout:'',
      sobre: 'descrição do evento da igreja'
    },
    {
      id: '8',
      destaque: '',
      image: 'https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      data: 'QUA, 01 JAN 00:00',
      evento: 'Jantar Culto da virada tudo para sempre - juntos ',
      local: 'Igreja videira',
      checkout:'',
      sobre: 'descrição do evento da igreja'
    }
  ]


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: currentTheme.backgroundColor }}>
      <StatusBar barStyle={theme === 'light' ? 'dark-content' : 'light-content'} />

      <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: 10 }}>
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={30} color={currentTheme.buttonColor} />
          <Text style={{ color: currentTheme.buttonColor, fontSize: 18 }}>Eventos</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={{ backgroundColor: currentTheme.backgroundColor }}>
          <View style={{ padding: 15, backgroundColor: currentTheme.backgroundColor }}>
            <Text style={{ color: currentTheme.textColor, fontSize: 20, fontWeight: 'bold' }}> Destaques</Text>
          </View>
          <FlatList
            scrollEnabled={false}
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={(item) => (
              <TouchableOpacity onPress={() => navigation.navigate('InfoEvento', item.item)}>
                <View style={{ margin: 20, backgroundColor: currentTheme.colorSecondary, width: "80%", borderRadius: 10 }} >
                  <Image source={{ uri: item.item.image }} style={{ height: 150, width: "100%", borderTopLeftRadius: 10, borderTopRightRadius: 10 }}/>
                  <Text style={{ margin: 10, color: currentTheme.buttonColor, fontSize: 13 }}>
                    {item.item.data}
                  </Text>
                  <Text style={{ marginLeft: 10, fontSize: 16, fontWeight: 'bold', color: currentTheme.textColor }}>
                    {item.item.evento}
                  </Text>
                  {(()=>{
                    if( item.item.checkout !== ''){
                      return <View style={{flex:1, alignItems:'flex-start', justifyContent:'flex-end', marginTop:10, marginLeft:10}}>
                        <View style={{alignItems:'center', justifyContent:'center', backgroundColor:currentTheme.coloTextEvent, borderRadius:10, padding:5, paddingLeft:10, paddingRight:10 }}>
                          <Text style={{color:currentTheme.textColor}}>{item.item.checkout}</Text>
                        </View>
                      </View>
                    }
                   })()}
                  <Text style={{ marginTop: 10, fontSize: 12, padding: 10, color: currentTheme.textColorSecondary }}>
                    {item.item.local}
                  </Text>
                </View>
               
              </TouchableOpacity>
            )} />
          <View style={{ padding: 15, backgroundColor: currentTheme.backgroundColor }}>
            <Text style={{ color: currentTheme.textColor, fontSize: 20, fontWeight: 'bold' }}> Próximos eventos</Text>
          </View>
          <FlatList
            scrollEnabled={false}
            data={data1}
            keyExtractor={(item) => item.id}
            renderItem={(item) => (
              <TouchableOpacity onPress={() => navigation.navigate('InfoEvento', item.item)}>
                <View style={{ padding: 10, flexDirection: 'row' }}>
                  <View style={{ marginLeft: 10 }}>
                    <Image source={{ uri: item.item.image }} style={{ width: 150, height: 100, borderRadius: 10 }} />
                  </View>
                  <View style={{ paddingLeft: 10, width: '60%' }}>
                    <Text style={{ color: currentTheme.buttonColor, fontSize: 13 }}>
                      {item.item.data}
                    </Text>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: currentTheme.textColor }}>
                      {item.item.evento}
                    </Text>
                   {(()=>{
                    if( item.item.checkout !== ''){
                      return <View style={{flex:1, alignItems:'flex-start', justifyContent:'flex-end'}}>
                        <View style={{alignItems:'center', justifyContent:'center', backgroundColor:currentTheme.coloTextEvent, borderRadius:10, padding:5, paddingLeft:10, paddingRight:10 }}>
                          <Text style={{color:currentTheme.textColor}}>{item.item.checkout}</Text>
                        </View>
                      </View>
                    }
                   })()}
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default EventoSreen;
