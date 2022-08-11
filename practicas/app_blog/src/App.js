import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./componentes/Header";
import Inicio from "./componentes/Inicio";
import Blog from "./componentes/Blog";
import Acerca_de from "./componentes/Acerca_de";
import styled from 'styled-components';
import Post from "./componentes/Post";
import Error404 from "./componentes/Erro404"

const App = () => {
  return (
    <BrowserRouter>
      <ContenedorPrincipal>
          <Header />
          <Main>
          <Routes>
              <Route path="*" element={<Error404 />}/>
              <Route path="/" element={<Inicio /> } />
                <Route path="/blog" element={
                   <Blog /> 
                } />
                <Route path="/articulo/:id" element={
                  <Post />
                }/>
                <Route path="/acerca-de" element={
                  <Acerca_de />
                } />
          </Routes>
          </Main>
      </ContenedorPrincipal>
    </BrowserRouter>
  );
}

const ContenedorPrincipal = styled.div`
  padding: 40px;
  width: 90%;
  max-width: 700px;
`;

const Main = styled.main`
  background: #fff;
  padding: 40px;
  border-radius: 10px;
  box-sahdow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;
 
export default App;