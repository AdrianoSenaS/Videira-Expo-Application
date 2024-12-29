import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useTheme } from '../themes/ThemeContext';
import { lightTheme, darkTheme } from '../themes/Themes';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Entypo from '@expo/vector-icons/Entypo';
import OpenMaps from "../services/OpenMaps";
import OpenMail from "../services/OpenMail";
import OpenTel from "../services/OpenTel";
import AntDesign from '@expo/vector-icons/AntDesign';
import OpenInstagram from "../services/OpenInstagram";

const VideiraScreen: React.FC = () => {
    const { theme } = useTheme();
    const currentTheme = theme === 'light' ? lightTheme : darkTheme;
    let Pastor = 'Jozzueh Castro'

    return (

        <View style={{ flex: 1, backgroundColor: currentTheme.backgroundColor, padding: 10, }}>
            <ScrollView>
                <View style={{ borderWidth: 1, borderColor: currentTheme.bordercolor, borderRadius: 5, marginTop: 10 }}>
                    <View style={{ padding: 10, borderBottomWidth: 1, borderColor: currentTheme.bordercolor }}>
                        <Text style={{ color: currentTheme.textColor, fontSize: 18 }}> Videira Chapadão do Céu</Text>
                    </View>
                    <View style={{ paddingTop: 10 }}>
                        <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'space-between', alignItems: 'center' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 5 }}>
                                <FontAwesome name="user" size={18} color={currentTheme.buttonColor} />
                                <Text style={{ maxWidth: '90%', color: currentTheme.textColor, marginLeft: 12 }}>Pr. {Pastor}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ paddingTop: 5 }}>
                        <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'space-between', alignItems: 'center' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <MaterialCommunityIcons name="google-maps" size={20} color={currentTheme.buttonColor} />
                                <Text style={{ color: currentTheme.textColor, maxWidth: '80%', marginLeft: 10 }}>Igreja Videira Chapadão do Céu, R. H, Chapadão do Céu - GO, 75828-000</Text>
                            </View>
                            <TouchableOpacity onPress={OpenMaps}>
                                <Text style={{ color: currentTheme.buttonColor, paddingRight: 10, fontSize: 16 }}>Rota</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ paddingTop: 10 }}>
                        <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'space-between', alignItems: 'center' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Entypo name="phone" size={20} color={currentTheme.buttonColor} />
                                <Text style={{ color: currentTheme.textColor, maxWidth: '90%', marginLeft: 10 }}>+55 64 9969-6690</Text>
                            </View>
                            <TouchableOpacity onPress={OpenTel}>
                                <Text style={{ color: currentTheme.buttonColor, paddingRight: 10, fontSize: 16 }}>Ligar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ paddingTop: 20 }}>
                        <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'space-between', alignItems: 'center' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Entypo name="mail" size={20} color={currentTheme.buttonColor} />
                                <Text style={{ color: currentTheme.textColor, maxWidth: '90%', marginLeft: 10 }}>email@example.com</Text>
                            </View>
                            <TouchableOpacity onPress={OpenMail}>
                                <Text style={{ color: currentTheme.buttonColor, paddingRight: 10, fontSize: 16 }}>Enviar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ paddingBottom: 10 }}></View>
                </View>
                <View style={{ borderWidth: 1, borderColor: currentTheme.bordercolor, borderRadius: 5, marginTop: 20 }}>
                    <View style={{ padding: 10, borderBottomWidth: 1, borderColor: currentTheme.bordercolor }}>
                        <Text style={{ color: currentTheme.textColor, fontSize: 18 }}> Programação</Text>
                    </View>
                    <View style={{ backgroundColor: currentTheme.colorSecondary, padding: 10 }}>
                        <Text style={{ color: currentTheme.textColorSecondary, fontSize: 16, marginLeft: 5 }}>
                            Domingo
                        </Text>
                    </View>
                    <View style={{ padding: 15, flexDirection: 'row', justifyContent: 'flex-start' }}>
                        <Text style={{ color: currentTheme.textColor, marginLeft: 6, maxWidth: '50%' }}>
                            18:00
                        </Text>
                        <Text style={{ color: currentTheme.textColor, marginLeft: 10 }}>
                            Culto da Família
                        </Text>
                    </View>
                </View>
                <View style={{ paddingBottom: 20 }}></View>
                <View style={{ borderWidth: 1, borderColor: currentTheme.bordercolor, borderRadius: 5 }}>
                    <View style={{ padding: 10, borderBottomWidth: 1, borderColor: currentTheme.bordercolor }}>
                        <Text style={{ color: currentTheme.textColor, fontSize: 18 }}> Redes Sociais</Text>
                    </View>
                    <View style={{ padding: 15, flexDirection: 'row', justifyContent: 'flex-start' }}>
                        <TouchableOpacity onPress={OpenInstagram} style={{ marginLeft: 20 }}>
                            <AntDesign name="instagram" size={25} color={currentTheme.buttonColor} />
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>

    );
}

export default VideiraScreen;