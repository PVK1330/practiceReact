import './App.css';
import Shoes from './components/Shoes';
import Wedo from './components/Wedo';
import Navbar from './components/raffel/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from './components/raffel/ProductDetails';
import TicketDetails from './components/raffel/TicketDetails';
import Shipping from './components/raffel/Shipping';
import Payment from './components/raffel/Payment';

function App() {
  return (
    <>
      {/* <Wedo /> */}
      {/* <Shoes /> */}
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<ProductDetails/>}>
          <Route path="ticketdetails" element={<TicketDetails />} />
          <Route path="shipping" element={<Shipping/>}/>
          <Route path="payment" element={<Payment/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
