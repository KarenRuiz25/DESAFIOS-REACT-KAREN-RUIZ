//1-Traigo la libreria de react
import React from 'react'; 

//2-Traigo la libreria de reactdom (para visualizar mi app en react)
import ReactDOM from 'react-dom/client';

import './css/styles.css'; //import del css (esta linea ya me ejecuta el archivo css)

//3-Agarrar una app que ya exista de react (Aca va a ir nuestro ecommerce)
import App from "./App" //importo el componente App

//4-Mostrar la app en el DOM
const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(<App />);

