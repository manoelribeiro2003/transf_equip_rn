import { View, StyleSheet, Text, StatusBar } from 'react-native';
import PRIMARY_COLOR from '../../config/theme';

const SolicitarEquipamentoScreen = () => (
    <View style={styles.containerScreen}>
        <Text>Tela Solicitar Equipamento</Text>
    </View>
)

const styles = StyleSheet.create({
    containerScreen: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default SolicitarEquipamentoScreen