import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

import { getProduto } from '../services/ProdutoService';

import Card from "../components/Card";

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
    {
      produto.id && <Card
      id={produto.id}
      produto={produto.produto}
      descricao={produto.descricao}
      img={produto.img}
      botao={produto.botao}
      hideButton
    />
    }
  </View>
}
