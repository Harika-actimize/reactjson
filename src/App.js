import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarcomp from "./componets/navbarComp";
import ProductSlider from "./componets/slider";
import Footer from "./componets/footer";
export default function App() {
  return (
    <div className="App">
        <Navbarcomp/>
        <ProductSlider/>
        <Footer/>
    </div>
  );
}