
import logo from './logo.svg';
import Navbar from "./Components/Navbar";
import './App.css';
import TextForm from './Components/TextForm'

let name = "Medusa"
function App() {
  return (
    <>
   <Navbar title="TextUtils"/>
   <div className="container my-3" >
      <TextForm heading="Enter the text to analyse"/>
      
   </div>
    </>
  );
}

export default App;
