import { React, useState, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import ImgHome from "../assets/home-image.svg";
import arrow from "../assets/arrow.svg";

import {
  Container,
  Image,
  ContainerItens,
  H1,
  InputLabel,
  Input,
  Button,
} from "../styles/styles";

const App = () => {
  const InputName = useRef();
  const InputAge = useRef();

  async function addUser() {
    const data = await axios.post("https://addusersback.up.railway.app/user", {
      name: InputName.current.value,
      age: InputAge.current.value,
    });
    console.log(data);
  }

  return (
    <>
      <Container>
        <Image src={ImgHome} alt="Home Logo" />
        <ContainerItens>
          <H1>Olá!</H1>
          <InputLabel>Nome</InputLabel>
          <Input placeholder="Digite seu nome" type="text" ref={InputName} />
          <InputLabel>Idade</InputLabel>
          <Input placeholder="Digite sua idade" type="number" ref={InputAge} />
          <Link to="/users">
            <Button onClick={addUser}>
              Cadastrar <img src={arrow} />
            </Button>
          </Link>
        </ContainerItens>
      </Container>
    </>
  );
};

export default App;
