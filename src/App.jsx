import '../App.css';
import HeaderMenu from './Components/Header/Menu';
import Products from './Components/Cakelist/Products'; //If it's variable = we don't use curle braces
import Slider from './Components/Imageslider/Slider';
import Footer from './Components/Footer/Footer';
import Telegramform from './Components/Contactform/Telegramform';
import Appearmodal from './Components/Contactform/AppearModal/Appearmodal';
import { Carousel } from 'bootstrap';

function App() {

  const logoHeader = [
    { img: 'src/img/logoAT.jpg'}
  ];

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
    },
    {
      id: 3,
      img: 'https://cake-time.ru/wp-content/uploads/2021/11/pre1_5.jpg',
      name: 'Napoleon',
      describe: 'Рубленое тесто, сделанное по фирменному рецепту кондитерской, заварной крем на белом шоколаде с настоящей бурбонской ванилью.'
    }
  
  ];

  const carouselItems = [
    {
        id: 1,
        title: 'Churros',
        content: 'Wonderful taste and smell from our bakery',
        imageUrl: 'https://images.wallpaperscraft.com/image/single/churro_baking_powdered_sugar_114558_1280x720.jpg'
    },
    {
        id: 2,
        title: 'Oat cookies',
        content: 'Delicious and natural ingredients',
        imageUrl: 'https://images.wallpaperscraft.com/image/single/cookies_almonds_daffodils_911197_1280x720.jpg'
    },
    {
        id: 3,
        title: 'Slide 3',
        content: 'Content 3',
        imageUrl: 'https://images.wallpaperscraft.com/image/single/almond_pudding_cranberries_berries_876142_1280x720.jpg'
    },
    ];

  return (
    <>
      <HeaderMenu logo={logoHeader} />

      <Products cakes={catalog} />

      <Slider sliders={carouselItems} />

      <Telegramform>

        <Appearmodal />

      </Telegramform>

      <Footer />
    </>
  );
};

export default App;
