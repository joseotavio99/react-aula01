import { FiSearch } from "react-icons/fi";
import './style.css';

function App() {
  return (
    <div className="container">
      <h1 className="title"> Buscador de cep </h1>
      <div className="containerInput">
        <input type="text" placeholder="Digite aqui..."/>

        <button className="buttonSearch">
          <FiSearch size={25} color="#FFF"/>
        </button> 
      </div>

        <main className="main">
          <h2> Cep: 784548484</h2>
          <span> Rua teste algum </span>
          <span> Complemento dlkçsakdçlas </span>
          <span> Vila rosa</span>
          <span> campo grande </span>
        </main>
    </div>
  );
}

export default App;
