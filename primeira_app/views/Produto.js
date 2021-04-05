import React, { useEffect, useState } from "react";
import { View } from "react-native";

import {
  AdMobInterstitial,
  AdMobRewarded,
  setTestDeviceIDAsync,
} from 'expo-ads-admob';

import { getProduto } from '../services/ProdutoService';

import Card from "../components/Card";

export default function Produto(props) {
  const [produto, setProduto] = useState({});

  useEffect(() => {
    async function loadContent() {
      await setTestDeviceIDAsync('EMULATOR');
      // Display an interstitial
      // Display a rewarded ad
await AdMobRewarded.setAdUnitID('ca-app-pub-3940256099942544/5224354917'); // Test ID, Replace with your-admob-unit-id
await AdMobRewarded.requestAdAsync();
await AdMobRewarded.showAdAsync();

      const produto = await getProduto(props.route.params.idProduto);
      setProduto(produto);
    }
    loadContent();
  },[]);

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
