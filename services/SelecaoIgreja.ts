import { Alert } from "react-native";

const DadosIgreja = [
    { id: '0', nome: 'Videira Chapadão do Céu' }
]
export default DadosIgreja;

export const SelecionarIgreja = (item: any) => {
    Alert.alert('Você clicou no:', item.nome);
}
