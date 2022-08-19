import Input from './components/Input';
import Boton from './components/Boton';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";

function App() {
  const [nombre, setNombre] = useState("")
  const [clave, setClave] = useState("")

  return (
    <>
      <h1>Desafío Estado de los Componentes y Eventos</h1>
      <Input nombre={nombre} setNombre={setNombre} clave={clave} setClave={setClave}/>
      <Boton nombre={nombre} clave={clave}/>
    </>

  );
}

export default App;
