import "./App.css";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import "bootstrap/dist/css/bootstrap.min.css";
import QuantiryPicker from "./components/quantiryPicker";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <h1>Hello from react!</h1>
      <button className="btn btn-primary">Test</button>
      <QuantiryPicker></QuantiryPicker>
      <Footer></Footer>
    </div>
  );
}

export default App;

//funtion based comp.
