import React from "react";
import { View, Text, Linking, TouchableOpacity, Platform } from "react-native";
import { useTheme } from '../themes/ThemeContext';
import { lightTheme, darkTheme } from '../themes/Themes';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Entypo from '@expo/vector-icons/Entypo';


const VideiraScreen: React.FC = ()=>{
    const { theme} = useTheme();
    const currentTheme = theme === 'light' ? lightTheme : darkTheme;  
    let Pastor = 'Jozueh Castro'

    const OpemMaps=()=>{
        if(Platform.OS === 'ios'){
            Linking.openURL('https://maps.apple.com/?address=Rua%20Ip%C3%AA,%20471,%20Chapad%C3%A3o%20Do%20C%C3%A9u%20-%20GO,%2075828-000,%20Brasil&auid=5189128560730467807&ll=-18.394303,-52.663898&lsp=9902&q=Igreja%20videira%20Chapadao%20Do%20C%C3%A9u&t=h')
        }else{
            Linking.openURL('https://maps.app.goo.gl/Gge4BonhfHhPBdVa6')
        }
    }

    const OpenTell = ()=>{
        Linking.openURL('tel:+64933004882')
    }

    const OpenEmail =()=>{
        Linking.openURL('mailto:frank@wwdcdemo.example.com')
    }
    return(
        <View style={{flex:1, backgroundColor:currentTheme.backgroundColor,padding:10}}>
            <View style={{borderWidth:1, borderColor:currentTheme.bordercolor, borderRadius:5}}> 
                <View style={{padding:10, borderBottomWidth:1, borderColor:currentTheme.bordercolor}}>
                    <Text style={{color:currentTheme.textColor, fontSize:18}}> Videira Chapadão do Céu</Text>
                </View>
                <View style={{paddingTop:10}}>
                    <View style={{flexDirection:'row', padding:10, alignItems:'center'}}>
                        <FontAwesome name="user" size={18} color={currentTheme.textColor} />
                        <Text style={{ maxWidth:'80%', color:currentTheme.textColor, marginLeft:10}}>Pr. {Pastor}</Text>
                    </View>
                </View>
                <View style={{paddingTop:5}}>
                    <View style={{flexDirection:'row', padding:6, justifyContent:'space-between', alignItems:'center'}}>
                       <View style={{flexDirection:'row',alignItems:'center'}}>
                       <MaterialCommunityIcons name="google-maps" size={22} color={currentTheme.textColor}/>
                       <Text style={{color:currentTheme.textColor, maxWidth:'80%', marginLeft:10}}>Igreja Videira Chapadão do Céu, R. H, Chapadão do Céu - GO, 75828-000</Text>
                       </View>
                        <TouchableOpacity onPress={OpemMaps}>
                            <Text style={{color:currentTheme.buttonColor, paddingRight:10, fontSize:16}}>Rota</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{paddingTop:10}}>
                    <View style={{flexDirection:'row', padding:6, justifyContent:'space-between', alignItems:'center'}}>
                       <View style={{flexDirection:'row',alignItems:'center'}}>
                       <Entypo name="phone" size={24} color={currentTheme.textColor} />
                       <Text style={{color:currentTheme.textColor, maxWidth:'80%', marginLeft:10}}>+55(64)9999-9955</Text>
                       </View>
                        <TouchableOpacity onPress={OpenTell}>
                            <Text style={{color:currentTheme.buttonColor, paddingRight:10, fontSize:16}}>Ligar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{paddingTop:20}}>
                    <View style={{flexDirection:'row', padding:6, justifyContent:'space-between', alignItems:'center'}}>
                       <View style={{flexDirection:'row',alignItems:'center'}}>
                       <Entypo name="mail" size={24} color={currentTheme.textColor} />
                       <Text style={{color:currentTheme.textColor, maxWidth:'80%', marginLeft:10}}>email@example.com</Text>
                       </View>
                        <TouchableOpacity onPress={OpenEmail}>
                            <Text style={{color:currentTheme.buttonColor, paddingRight:10, fontSize:16}}>Enviar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{paddingBottom:10}}></View>
            </View>
            <View style={{borderWidth:1, borderColor:currentTheme.bordercolor, borderRadius:5}}> 

            </View>
            <View style={{borderWidth:1, borderColor:currentTheme.bordercolor, borderRadius:5}}> 

            </View>
        </View>
    );
}

export default VideiraScreen;