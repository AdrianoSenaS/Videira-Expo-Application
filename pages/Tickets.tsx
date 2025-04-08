import React, { useState } from "react";
import { View, Text, TouchableOpacity, SafeAreaView, StatusBar, Image, } from "react-native";
import { useTheme } from '../themes/ThemeContext';
import { lightTheme, darkTheme } from '../themes/Themes';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import AntDesign from "@expo/vector-icons/AntDesign";

const Ticket: React.FC = ({ navigation }: any) => {
    const event = {
        name: "Festival de Música",
        startDate: "10/04/2025",
        expiryDate: "15/04/2025",
        price: 120.00
    };
    const { theme } = useTheme();
    const currentTheme = theme === 'light' ? lightTheme : darkTheme
    const [quantity, setQuantity] = useState(1);

    // Função para aumentar a quantidade
    const increaseQuantity = () => setQuantity(quantity + 1);

    // Função para diminuir a quantidade (mínimo 1)
    const decreaseQuantity = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    // Calcula o total
    const totalPrice = event.price * quantity;

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
                <View style={{ padding: 10, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ color: currentTheme.textColor, fontWeight: 'bold', fontSize: 25 }}>Reserve agora</Text>
                </View>
                <View style={{ padding: 5 }}>
                    <View style={{ borderRadius: 5, borderWidth: 1, borderColor: currentTheme.bordercolor }}>
                        <View style={{ padding: 10, borderBottomWidth: 1, borderBlockColor: currentTheme.bordercolor }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: currentTheme.textColor }}>{event.name}</Text>
                        </View>
                        <View style={{ paddingLeft: 12 }}>
                            <View style={{ paddingTop: 25, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                <View style={{ width: 30 }}>
                                    <FontAwesome6 name="calendar-day" size={24} color={currentTheme.buttonColor} />
                                </View>
                                <Text style={{ paddingLeft: 10, color: currentTheme.textColor }}>Inicio</Text>
                            </View>
                            <TouchableOpacity style={{ marginLeft: 40, justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', width: 200 }}>
                                <Text style={{ alignItems: 'center', color: currentTheme.buttonColor, fontSize: 13 }}>
                                    {event.startDate}
                                </Text>

                            </TouchableOpacity>
                        </View>
                        <View style={{ paddingLeft: 10 }}>
                            <View style={{ paddingTop: 25, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                <View style={{ width: 30 }}>
                                    <FontAwesome6 name="calendar-day" size={24} color={currentTheme.buttonColor} />
                                </View>
                                <Text style={{ paddingLeft: 10, color: currentTheme.textColor }}>Expira</Text>
                            </View>
                            <TouchableOpacity style={{ marginLeft: 40, marginBottom: 20, justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', width: 200 }}>
                                <Text style={{ alignItems: 'center', color: currentTheme.buttonColor, fontSize: 13 }}>
                                    {event.expiryDate}
                                </Text>

                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ marginTop: 10, borderWidth: 1, borderColor: currentTheme.bordercolor, borderRadius: 5, backgroundColor: currentTheme.backgroundColor }}>
                        <View style={{ padding: 10, borderBottomWidth: 1, borderBlockColor: currentTheme.bordercolor, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                            <View style={{ width: 30 }}>

                                <AntDesign name="wallet" size={24} color={currentTheme.buttonColor} />
                            </View>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: currentTheme.textColor }}>Valor R$ {event.price.toFixed(2)}</Text>
                        </View>
                        <View style={{ padding: 10, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', }}>
                            <Text style={{ color: currentTheme.textColor, fontSize: 18, fontWeight: "bold", marginLeft: 10 }}>Total: R$ {totalPrice.toFixed(2)}</Text>
                            <View style={{ flexDirection: "row", alignItems: "center", marginRight: 10 }}>
                                <TouchableOpacity
                                    onPress={decreaseQuantity}
                                    style={{ padding: 10, backgroundColor: currentTheme.buttonColor, borderRadius: 5 }}
                                >
                                    <Text style={{ color: '#fff',fontSize: 18 }}>−</Text>
                                </TouchableOpacity>

                                <Text style={{ color: currentTheme.textColor, marginHorizontal: 15, fontSize: 18 }}>{quantity}</Text>

                                <TouchableOpacity
                                    onPress={increaseQuantity}
                                    style={{ padding: 10, backgroundColor: currentTheme.buttonColor, borderRadius: 5 }}
                                >
                                    <Text style={{ color: '#fff', fontSize: 18 }}>+</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>
                </View>

            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end', padding: 10 }}>
                <TouchableOpacity
                    
                    style={{ backgroundColor: currentTheme.buttonColor, borderRadius: 10, width: '100%', height: 45, alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                    <Text style={{ fontSize: 16, color: '#fff', fontWeight: '600' }}>Avançar para Pagamento</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
   

}

export default Ticket