import { Linking } from "react-native";

const OpenMail = () => {
    Linking.openURL('mailto:frank@wwdcdemo.example.com')
}

export default OpenMail