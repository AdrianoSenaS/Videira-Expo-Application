import { Alert } from 'react-native';
import * as Calendar from 'expo-calendar'


export const CriarEventoAgenda = async (item: any) => {

    const { status } = await Calendar.requestCalendarPermissionsAsync();
    if (status !== 'granted') {
        Alert.alert('Permissão necessária', 'Permissão para acessar o calendário foi negada.');
    } else {
        try {
            const defaultCalendar = await Calendar.getDefaultCalendarAsync();
            if (!defaultCalendar) {
                Alert.alert('Erro', 'Não foi possível encontrar o calendário padrão.');
                return;
            }

            const eventId = await Calendar.createEventAsync(defaultCalendar.id, {
                title: 'Meu Evento',
                startDate: new Date('2025-01-01T10:00:00'), // Data de início
                endDate: new Date('2025-01-01T11:00:00'), // Data de término
                location: 'Endereço do evento',
                notes: 'Detalhes adicionais sobre o evento',
                timeZone: 'America/Sao_Paulo', // Ajuste o fuso horário conforme necessário
            });

            Alert.alert('Sucesso', `Evento criado com Sucesso`);
        } catch (error) {
            Alert.alert('Erro', 'Não foi possível criar o evento');
        }
    }

}