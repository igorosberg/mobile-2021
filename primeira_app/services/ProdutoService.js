import axios from 'axios';

var getProdutos = async () => {
  const response = await axios.get('http://10.0.0.164:3031/produtos');
  return response.data;
}

var getProduto = async (id) => {
  const response = await axios.get('http://10.0.0.164:3031/produtos/' + id);
  return response.data;
}

var removerProduto = async (id) => {
  console.log(id);
  const response = await axios.delete('http://10.0.0.164:3031/produtos/' + id);
  return response.data;
}

var cadastrarProduto = async (produto) => {
  const response = await axios.post('http://10.0.0.164:3031/produtos', produto);
  return response.data;
}

export { getProdutos, getProduto, removerProduto, cadastrarProduto };