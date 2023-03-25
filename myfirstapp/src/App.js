import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import EssayForm from './EssayForm';


function App() {
  return (
    <section>
      <div class="container">
      <div className='Titre'>
       <h1> Formulaire </h1>
      </div>
      <EssayForm></EssayForm>
      </div>
    </section>  
    )
}

export default App;
