import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

import { getProduto } from '../services/ProdutoService';

export default function Produto(props) {
  const [produto, setProduto] = useState({});

  useEffect(() => {
    async function loadContent() {
      const produto = await getProduto(props.route.params.idProduto);
      setProduto(produto);
    }
    loadContent();
  });

  return <View>
    <Text>Tela produto</Text>
    <Text>{produto.id}</Text>
    <Text>{produto.produto}</Text>
    <Text>{produto.descricao}</Text>
  </View>
}
