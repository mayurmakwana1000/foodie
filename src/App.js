import Food from "./Food";
import './App.css';
import Navbar from "./Navbar";
function App() {
  let foods = [
    {
      id: '1',
      date: '2023 08 09',
      title: 'banana',
      price: '200'
    },
    {
      id: '2',
      date: '2023 04 08',
      title: 'Mango',
      price: '400'
    }, {
      id: '3',
      date: '2023 10 07',
      title: 'Apple',
      price: '150'
    }, {
      id: '4',
      date: '2023 08 06',
      title: 'Guava',
      price: '200'
    }
  ];

  return (
    <>
    <Navbar />
      <Food date = {foods[0].date} title ={foods[0].title} price = {foods[0].price} />
      <Food date = {foods[1].date} title ={foods[1].title} price = {foods[1].price} />
      <Food date = {foods[2].date} title ={foods[2].title} price = {foods[2].price} />
      <Food date = {foods[3].date} title ={foods[3].title} price = {foods[3].price} />
    </>
  );
}

export default App;
