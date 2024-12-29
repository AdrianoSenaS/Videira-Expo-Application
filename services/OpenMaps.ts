import { Platform, Linking } from "react-native";

const OpenMaps = () => {
    if (Platform.OS === 'ios') {
        Linking.openURL('https://maps.apple.com/?address=Rua%20Ip%C3%AA,%20471,%20Chapad%C3%A3o%20Do%20C%C3%A9u%20-%20GO,%2075828-000,%20Brasil&auid=5189128560730467807&ll=-18.394303,-52.663898&lsp=9902&q=Igreja%20videira%20Chapadao%20Do%20C%C3%A9u&t=h')
    } else {
        Linking.openURL('https://maps.app.goo.gl/Gge4BonhfHhPBdVa6')
    }

}

export default OpenMaps