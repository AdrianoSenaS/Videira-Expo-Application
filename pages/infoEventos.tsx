import React from "react";
import { View, ImageBackground, Text, TouchableOpacity, SafeAreaView } from "react-native";
import { useTheme } from '../themes/ThemeContext';
import { lightTheme, darkTheme } from '../themes/Themes';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { CriarEventoAgenda } from "../services/Agenda";
import OpenMaps from "../services/OpenMaps";

const InfoEvento: React.FC = ({ route, navigation }: any) => {
    const { id, data, evento, destaque, image, local, sobre } = route.params
    const { theme } = useTheme();
    let Destaques = ''
    const currentTheme = theme === 'light' ? lightTheme : darkTheme;
    if (destaque == 'true') {
        Destaques = "Destaques"
    } else {
        Destaques = 'Próximos Eventos'
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: currentTheme.backgroundColor }}>
            <View style={{ width: '100%', height: 250, backgroundColor: currentTheme.colorSecondary }}>
                <ImageBackground style={{ width: '100%', height: '100%' }} source={{ uri: image }} >
                    <View style={{ padding: 10, }}>
                        <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} onPress={() => navigation.goBack()}>
                                <Ionicons name="chevron-back" size={30} color={currentTheme.buttonColor} />
                                <Text style={{ color: currentTheme.buttonColor, fontSize: 18 }}>{Destaques}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
            </View>
            <View style={{ padding: 5 }}>
                <View style={{ borderRadius: 5, borderWidth: 1, borderColor: currentTheme.bordercolor }}>
                    <View style={{ padding: 10, borderBottomWidth: 1, borderBlockColor: currentTheme.bordercolor }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: currentTheme.textColor }}>{evento}</Text>
                    </View>
                    <View style={{ paddingLeft: 12 }}>
                        <View style={{ paddingTop: 25, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                            <View style={{ width: 30 }}>
                                <FontAwesome6 name="calendar-day" size={24} color={currentTheme.buttonColor} />
                            </View>
                            <Text style={{ paddingLeft: 10, color: currentTheme.textColor }}>{data}</Text>
                        </View>
                        <TouchableOpacity onPress={() => CriarEventoAgenda(data)} style={{ marginLeft: 40, justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', width: 200 }}>
                            <Text style={{ alignItems: 'center', color: currentTheme.buttonColor, fontSize: 13 }}>
                                Salvar na agenda
                            </Text>
                            <View style={{ marginLeft: 5, alignItems: 'center' }}>
                                <AntDesign name="arrowright" size={12} color={currentTheme.buttonColor} />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ paddingLeft: 10 }}>
                        <View style={{ paddingTop: 25, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                            <View style={{ width: 30 }}>
                                <MaterialCommunityIcons name="google-maps" size={24} color={currentTheme.buttonColor} />
                            </View>
                            <Text style={{ paddingLeft: 10, color: currentTheme.textColor }}>{local}</Text>
                        </View>
                        <TouchableOpacity onPress={OpenMaps} style={{ marginLeft: 40, marginBottom: 20, justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', width: 200 }}>
                            <Text style={{ alignItems: 'center', color: currentTheme.buttonColor, fontSize: 13 }}>
                                Veja a rota no mapa
                            </Text>
                            <View style={{ marginLeft: 5, alignItems: 'center' }}>
                                <AntDesign name="arrowright" size={12} color={currentTheme.buttonColor} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ marginTop: 10, borderWidth: 1, borderColor: currentTheme.bordercolor, borderRadius: 5, backgroundColor: currentTheme.backgroundColor }}>
                    <View style={{ padding: 10, borderBottomWidth: 1, borderBlockColor: currentTheme.bordercolor, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <View style={{ width: 30 }}>
                            <FontAwesome name="file-text" size={24} color={currentTheme.buttonColor} />
                        </View>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: currentTheme.textColor }}>Sobre</Text>
                    </View>
                    <View style={{ padding: 10, marginLeft: 40, marginBottom: 20, justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', }}>
                        <Text style={{ color: currentTheme.textColor, marginTop: 10 }}>{sobre}</Text>
                    </View>
                </View>
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end', padding: 10 }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Ticket')}
                    style={{ backgroundColor: currentTheme.buttonColor, borderRadius: 10, width: '100%', height: 45, alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                    <Text style={{ fontSize: 16, color: '#fff', fontWeight: '600' }}>Tickets</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}


export default InfoEvento