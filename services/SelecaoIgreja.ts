import { Alert } from "react-native";

const igrejas = [
    { id: '0', nome: 'Videira Chapadão do Céu' },
]
export default igrejas;

export const SelecionarIgreja = (item: any) => {
    Alert.alert('Você clicou no:', item.nome);
}
