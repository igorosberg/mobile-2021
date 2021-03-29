import React from "react";
import { Text, View, TextInput, StyleSheet, Button } from "react-native";

import { cadastrarProduto } from '../services/ProdutoService';


export default function Cadastrar() {
  const [nome, setNome] = React.useState('');
  const [descricao, setDescricao] = React.useState('');
  const [botao, setBotao] = React.useState('');

  return <View style={styles.container}>
    <Text>Nome do produto</Text>    
    <TextInput
      style={styles.input}
      onChangeText={setNome}
      value={nome}/>

    <Text>Descrição do produto</Text>    
    <TextInput
      style={styles.input}
      onChangeText={setDescricao}
      value={descricao}/>

    <Text>Texto do botão</Text>    
    <TextInput
      style={styles.input}
      onChangeText={setBotao}
      value={botao}/>
    <Button
      title="Cadastrar"
      onPress={() => cadastrarProduto({
        produto: nome,
        descricao: descricao,
        img: 'https://image.flaticon.com/icons/png/512/16/16410.png',
        botao: botao,
      })} />
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    paddingTop: 25,
    padding: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});
