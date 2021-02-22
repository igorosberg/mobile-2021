import axios from 'axios';

var getProdutos = async () => {
  const response = await axios.get('http://lop.ect.ufrn.br/produtos');
  return response.data;
}

export { getProdutos };