import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import ImgHome from "../assets/peoples-image.svg";
import arrow from "../assets/arrow.svg";
import trash from "../assets/trash.svg";

import {
  Container,
  Image,
  ContainerItens,
  H1,
  Button,
  IconRotate,
  Users,
  User,
  ButtonTrash,
} from "../styles/styles";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      try {
        const response = await axios.get("https://addusersback.up.railway.app/users");
        setUsers(response.data);
      } catch (error) {
        console.error("Erro ao buscar usuários:", error);
      }
    }

    getUsers();
  }, []);

  const handleRemoveUser = async (id) => {
    try {
      await axios.delete(`https://addusersback.up.railway.app/user/${id}`);
      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      console.error("Erro ao deletar usuário", error);
    }
  };

  return (
    <>
      <Container $usersContainer>
        <Image src={ImgHome} alt="Home Logo" />
        <ContainerItens $usersContainerItens>
          <H1>Usuários</H1>
          <Users>
            {users.map((user) => (
              <User key={user.id}>
                <p>{user.name}</p>
                <p>{user.age} Anos</p>
                <ButtonTrash
                  $trashButton
                  onClick={() => handleRemoveUser(user.id)}
                >
                  <Image src={trash} alt="Icon Trash" />
                </ButtonTrash>
              </User>
            ))}
          </Users>
          <Link to="/">
            <Button $backUsersButton>
              <IconRotate src={arrow} /> Voltar
            </Button>
          </Link>
        </ContainerItens>
      </Container>
    </>
  );
};

export default App;
