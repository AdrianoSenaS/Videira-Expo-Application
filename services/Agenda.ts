import { Alert, Platform } from 'react-native';
import * as Calendar from 'expo-calendar'

    //Função para verificação de dispositivos
export const CriarEventoAgenda = async (item: any) => {
    //Verifica qual plataforma está utilizando
    if (Platform.OS === 'ios') {
        CriarEventoAgendaIOS(item);
    } 
    if(Platform.OS === 'android'){
        CriarEventoAgendaAndroid(item);
    }
}
    //Função Cria evento na agenda e calendário caso não houver um para Android
const CriarEventoAgendaAndroid = async (item: any) => {
    const { status } = await Calendar.requestCalendarPermissionsAsync();
    //Verifica se o ususário deu permissão para o app acessar o calendário/Agenda
    if (status !== 'granted') {
        Alert.alert('Permissão necessária', 'Permissão para acessar o calendário foi negada.');
    } else {
        try {
            const calendars = await Calendar.getCalendarsAsync();
            const defaultCalendar = calendars.find(calendar =>
                calendar.accessLevel === Calendar.CalendarAccessLevel.OWNER
            );

            if (!defaultCalendar) {
                // Criar um calendário se não existir
                await Calendar.createCalendarAsync({
                    title: 'Meu Calendário',
                    color: 'blue',
                    entityType: Calendar.EntityTypes.EVENT,
                    source: {
                        isLocalAccount: true,
                        name: 'Expo Calendar',
                        type: ''
                    },
                    name: 'MeuCalendarioExpo',
                    ownerAccount: 'personal',
                    accessLevel: Calendar.CalendarAccessLevel.OWNER
                });
            }

            await Calendar.createEventAsync(defaultCalendar.id, {
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


const CriarEventoAgendaIOS = async (item: any) => {

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

            await Calendar.createEventAsync(defaultCalendar.id, {
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
