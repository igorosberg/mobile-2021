import axios from 'axios';

var getProdutos = async () => {
  const response = await axios.get('http://192.168.100.4:3031/produtos');
  return response.data;
}

export { getProdutos };