import React from 'react';
import { View, FlatList, StyleSheet, Text, StatusBar, Image } from 'react-native';
import ButtonHomeScreen from '../components/buttonHomeScreen';
import PRIMARY_COLOR from '../globalConfigs';

const SolicitarEquipamentoScreen = () => (
    <View style={styles.containerScreen}>

        <View style={styles.containerTitleBar}>
            <Text>Oii</Text>
        </View>

    </View>
)

const styles = StyleSheet.create({
    containerScreen: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
    },
    containerTitleBar: {
        paddingTop: StatusBar.currentHeight || 0,
        height: 110,
        backgroundColor: PRIMARY_COLOR,
        elevation: 1,
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15,

    }
});

export default SolicitarEquipamentoScreen