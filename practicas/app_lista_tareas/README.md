<aside>
⚠️ Desde el principio del curso hasta los hooks personalizados.

</aside>

---

<aside>
💡 Una pequeña app para administrar tareas, tendremos un formulario donde describiremos lo que queremos crear, podremos editar las tareas que creamos. También crearemos un botón para que no se muestren las tareas completadas. Oviamente tambipen las podemos volver a mostrar. También vamos a poder guardar los datos en el navegador, en el localStorage, para no perder los datos si regargamos.

</aside>

---

Lo primero que debemos hacer es ubicarnos en donde queremos crear la carpeta de nuestro proyecto, yo uso una carpeta llamada practicas. Ahí dentro ejecutamos el comando:

`npx create-react-app app_lista_tareas`

Este comando lo ejecutamos en nuestra consola de GitBash, en el luagr donde crearemos el proyecto. Tarda unos minutos.

- Una vez que termine, debemos hacer un poco de limpieza, entonces nos dirigimos a la carpeta source, y dejamos solo los archivos .js y .css
- Luego, abrimos todo el proyecto en nuestro editor de código y en el index.js hacemos limpieza.
    - Queda de la siguiente manera
        
        ```jsx
        import React from 'react';
        import ReactDOM from 'react-dom/client';
        import './index.css';
        import App from './App';
        
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(
          <React.StrictMode>
            <App />
          </React.StrictMode>
        );
        ```
        
- También hago limpieza en archivo App.js.
    - Queda de la siguiente manera
        
        ```jsx
        import './App.css';
        
        const App = () => {
          return (
            <div>
              <h1>Hola Mundo</h1>
            </div>
          );
        }
        
        export default App;
        ```
        
- A su vez, limpiamos los archivos css borrando todo su contenido, porque queremos agregar nuestros propios estilos CSS.
    - Agregamos estilos generales del index.css
        
        ```jsx
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        #root {
          width: 100%;
          min-height: 100vh;
          display: flex;
          justify-content: center;
          padding: 50px 0;
        }
        
        body {
          font-family: 'Roboto', sans-serif;
        }
        ```
        
    - Agregamos estilos generales del App.js
        
        ```jsx
        :root {
        	--verde: #80BE4E;
        	--azul: #007AEA;
        }
        
        .contenedor {
        	max-width: 700px;
        	width: 100%;
        	height: 100%;
        	max-height: 90vh;
        	overflow: auto;
        	box-shadow: 0 2px 10px rgba(139,139,139,.25);
        	border-radius: 3px;
        	display: grid;
        	grid-template-rows: auto auto 1fr;
        }
        ```
        

**Ya estamos listo para ejecutar npm start en la consola, y empezar a crear nuestro proyecto**.

---