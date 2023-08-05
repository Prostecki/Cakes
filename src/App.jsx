import '../App.css';
import { HeaderMenu } from './Components/Header/Menu';
import Products from './Components/ProductList/Products' //If it's variable = we don't use curle braces
function App() {

  const catalog = [
    { id: 1,
      img:'https://cake-time.ru/wp-content/uploads/2021/11/pre1_8.jpg',
      name: 'Yagodni',
      describe: 'Очень пропитанные сливочные коржи с сырно сливочным кремом и миксом из кисленьких сезонных ягод: малины, ежевики, голубики, клубники. В составе мука пшеничная, сахар, яйца, крахмал, сливочный сыр cremette, сливки 33%, ягоды: малина, ежевика, голубика, клубника. Начинка подходит для 3Д тортов, подходит для любого яруса ярусного торта'
    },
    {
      id: 2,
      img: 'https://cake-time.ru/wp-content/uploads/2021/11/pre1_6.jpg',
      name: 'Smetannik',
      describe: 'Сметанные коржи с низким сожержанием сахара, сметанный кисленький крем, нежная текстура пропитанного бисквита, гипоаллергенная начинка, подходящая для детей и мам на ГВ В составе сметана, мука пшеничная, яйца, растительное масло, сода. Начинка не подходит для 3Д тортов, подходит только для верхнего яруса ярусного торта.'
    }
  
  ];

  return (
    <>
      <HeaderMenu>

      </HeaderMenu>
      <Products item={catalog} />
    </>
  );
}

export default App;
