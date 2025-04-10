// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeProvider } from './themes/ThemeContext';
import HomeScreen from './pages/home';
import IgrejaScreen from './pages/igreja'
import Configuracao from './pages/config';
import ContaScreen from './pages/conta';
import EnderecoSreen from './pages/endereco';
import EscolaSrecreen from './pages/escola';
import EventoSreen from './pages/eventos';
import OfertaScreen from './pages/ofertas';
import OracaoScreen from './pages/oracoes';
import PalavaraScreen from './pages/plavras';
import InfoIgrejaScreen from './pages/infoIgreja';
import InfoEvento from './pages/infoEventos';
import InfoCursos from './pages/infoCursos';
import EditarContaScreen from './pages/EditarContaScreen';
import LeitorPDFScreen from './pages/LeitorPDFScreen';
import Ticket from './pages/Tickets';
import BlibliaScreen from './pages/Biblia';

const Stack = createStackNavigator();

const  App: React.FC = ({ route, navigation }: any) => {
  return (
    <ThemeProvider>
      <NavigationContainer >
        <Stack.Navigator initialRouteName="Home" >
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name='Igreja' component={IgrejaScreen} options={{ headerShown: false }} />
          <Stack.Screen name='Configuracao' component={Configuracao} options={{ headerShown: false }} />
          <Stack.Screen name='Conta' component={ContaScreen} options={{ headerShown: false }} />
          <Stack.Screen name='Endereco' component={EnderecoSreen} options={{ headerShown: false }} />
          <Stack.Screen name='Escola' component={EscolaSrecreen} options={{ headerShown: false }} />
          <Stack.Screen name='Eventos' component={EventoSreen} options={{ headerShown: false }} />
          <Stack.Screen name='Ofertas' component={OfertaScreen} options={{ headerShown: false }} />
          <Stack.Screen name='Oracao' component={OracaoScreen} options={{ headerShown: false }} />
          <Stack.Screen name='Palavras' component={PalavaraScreen} options={{ headerShown: false }} />
          <Stack.Screen name='InfoIgreja' component={InfoIgrejaScreen} options={{ headerShown: false }} />
          <Stack.Screen name='InfoEvento' component={InfoEvento} options={{ headerShown: false }} />
          <Stack.Screen name='InfoCusrsos' component={InfoCursos} options={{ headerShown: false }} />
          <Stack.Screen name="EditarConta" component={EditarContaScreen} options={{ headerShown: false }} />
          <Stack.Screen name="LeitorPDFScreen" component={LeitorPDFScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Ticket" component={Ticket} options={{ headerShown: false }} />
          <Stack.Screen name="Biblia" component={BlibliaScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
