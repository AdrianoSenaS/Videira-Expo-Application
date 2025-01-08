import React from "react";
import { View, Text, TouchableOpacity, SafeAreaView, StatusBar } from "react-native";
import { useTheme } from '../themes/ThemeContext';
import { lightTheme, darkTheme } from '../themes/Themes';
import Ionicons from '@expo/vector-icons/Ionicons';

const Ticket: React.FC = ({navigation}:any) => {
    const { theme } = useTheme();
    const currentTheme = theme === 'light' ? lightTheme : darkTheme
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: currentTheme.backgroundColor }}>
            <View style={{ width: '100%', height: 250, backgroundColor: currentTheme.backgroundColor }}>
                <StatusBar barStyle={theme === 'light' ? 'dark-content' : 'light-content'} />
                <View style={{ padding: 10, }}>
                <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} onPress={() => navigation.goBack()}>
                        <Ionicons name="chevron-back" size={30} color={currentTheme.buttonColor} />
                        <Text style={{ color: currentTheme.buttonColor, fontSize: 18 }}>Voltar</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </View>
        </SafeAreaView>
    )

}

export default Ticket