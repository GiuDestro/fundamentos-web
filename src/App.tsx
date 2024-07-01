import React from "react";
import './App.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import { AuthProvider } from "./contexts/AuthContext";
import Login from "./paginas/login/Login";
import Cadastro from "./paginas/cadastro/Cadastro";
import ListaTemas from "./components/temas/listaTemas/ListaTemas";
import Home from "./paginas/home/Home";
import FormularioTema from "./components/temas/formularioTema/FormularioTema";
import DeletarTema from "./components/temas/deletarTema/DeletarTema";
import Footer from "./components/footer/Footer";


function App() {
  return (
    <>
    <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/home" element={<Home />} />
              <Route path="/temas" element={<ListaTemas />} />
              <Route path="/cadastroTema" element={<FormularioTema />} />
              <Route path="/editarTema/:id" element={<FormularioTema />} />
              <Route path="/deletarTema/:id" element={<DeletarTema />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
        </AuthProvider>
    </>
  );
}
export default App;