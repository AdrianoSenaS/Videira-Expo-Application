import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useTheme } from '../themes/ThemeContext';
import { lightTheme, darkTheme } from '../themes/Themes';
import DadosIgreja from "../services/SelecaoIgreja";

const SelecaoIgreja: React.FC = ({navigation}:any) => {
    const { theme } = useTheme();
    const currentTheme = theme === 'light' ? lightTheme : darkTheme;

    return (
        <View style={{ flex: 1, backgroundColor: currentTheme.backgroundColor }}>
            <View style={{ backgroundColor: currentTheme.backgroundColor, margin: 10, borderWidth: 1, borderRadius: 5, borderColor: currentTheme.bordercolor }}>
                <FlatList data={DadosIgreja}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => navigation.navigate('InfoIgreja', item)} style={{ width: '97%', alignSelf: 'flex-end', padding: 20, borderBottomWidth: 1, borderColor: currentTheme.bordercolor }}>
                            <Text style={{ color: currentTheme.textColor }}>{item.nome}</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </View>
    );
}
export default SelecaoIgreja;