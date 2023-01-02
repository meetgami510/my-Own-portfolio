import Navabar from "./Componets/Navbar/Navabar";
import './App.css'
import Intro from "./Componets/Intro/Intro";
import Services from "./Componets/Services/Services"
import Experianse from "./Componets/Experianse/Experianse";
import Works from "./Componets/Works/Works";
import Portfoliyo from "./Componets/Portfoliyo/Portfoliyo";
import Testimonial from "./Componets/Testimonial/Testimonial"
import Contect from "./Componets/Contect/Contect";
function App() {
  return (
    <div className="App">
      <Navabar/>
      <Intro/>
      <Services/>
      <Experianse/>
      <Works/>
      <Portfoliyo/>
      <Testimonial/>
      <Contect/>
    </div>
  );
}

export default App;
