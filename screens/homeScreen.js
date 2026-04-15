import React from 'react';
import { View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import ButtonHomeScreen from '../components/buttonHomeScreen';
import { SvgAtualizarLocalizacao, SvgCadastroDeEquipamento, SvgConfiguracoes, SvgEmManutencao, SvgEncerrarChamado, SvgEnviosERecebimentos, SvgEquipamentosConsertados, SvgEquipamentosEmEstoque, SvgGestaoDeSetup, SvgHistoricoDeSetups, SvgHistoricoDeTransferencias, SvgHistoricoMovimentacoes, SvgRastrearEquipamento, SvgSolicitacoesDeSetup, SvgSolicitacoesEquipamentos, SvgSolicitarEquipamento } from '../images/dist'; '../images/dist/index';

const botoes = [
  { key: 1, textButton: "Solicitar Equipamento", SvgElement: SvgSolicitarEquipamento },
  { key: 2, textButton: "Em Manutenção", SvgElement: SvgEmManutencao },
  { key: 3, textButton: "Cadastro de Equipamento", SvgElement: SvgCadastroDeEquipamento },
  { key: 4, textButton: "Atualizar Localização", SvgElement: SvgAtualizarLocalizacao },
  { key: 5, textButton: "Rastrear Equipamento", SvgElement: SvgRastrearEquipamento },
  { key: 6, textButton: "Solicitações de Equipamentos", SvgElement: SvgSolicitacoesEquipamentos },
  { key: 7, textButton: "Solicitações de Setup", SvgElement: SvgSolicitacoesDeSetup },
  { key: 8, textButton: "Equipamentos em Estoque", SvgElement: SvgEquipamentosEmEstoque },
  { key: 9, textButton: "Envios e Recebimentos", SvgElement: SvgEnviosERecebimentos },
  { key: 10, textButton: "Encerrar Chamado", SvgElement: SvgEncerrarChamado },
  { key: 11, textButton: "Equipamentos Consertados", SvgElement: SvgEquipamentosConsertados },
  { key: 12, textButton: "Histórico de Transferências", SvgElement: SvgHistoricoDeTransferencias },
  { key: 13, textButton: "Gestão de Setup", SvgElement: SvgGestaoDeSetup },
  { key: 14, textButton: "Histórico de Movimentações", SvgElement: SvgHistoricoMovimentacoes },
  { key: 15, textButton: "Histórico de Setups", SvgElement: SvgHistoricoDeSetups },
  { key: 16, textButton: "Configurações", SvgElement: SvgConfiguracoes },
]

const HomeScreen = () => (
  <View style={styles.containerScreen}>

    <View style={styles.headerContainer}>
      <Text style={{ color: '#fff' }}>Oi</Text>
    </View>
    <View style={styles.mainContainer}>

      <FlatList style={styles.flalist}
        data={botoes}
        renderItem={({ item }) => <ButtonHomeScreen SvgElement={item.SvgElement} textButton={item.textButton} />}
        numColumns={3}
        columnWrapperStyle={{ justifyContent: 'space-around'}}
        contentContainerStyle={{paddingBottom: 50, overflow: 'hidden', borderWidth: 0}}
        showsVerticalScrollIndicator={false}
      />

    </View>

  </View>
);

const styles = StyleSheet.create({
  containerScreen: {
    flex: 1,
    backgroundColor: '#7D2B70',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  mainContainer: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    paddingHorizontal: 20,
    paddingTop: 10,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'stretch',
    paddingBottom: 50
  },
  headerContainer: {
    height: 100,
    marginTop: StatusBar.currentHeight || 0
  },
  flalist: {
    overflow: 'hidden',
  },
});

export default HomeScreen;