import styled from "styled-components";

import BackgroundHome from "../assets/background-image-home.svg";
import BackgroundUsers from "../assets/background-image-peoples.svg";

export const Container = styled.div`
  background: ${(props) =>
    props.$usersContainer
      ? `url(${BackgroundUsers})`
      : `url(${BackgroundHome})`};
  background-repeat: no-repeat;
  background-size: cover;

  padding: 50px 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 45px;
`;

export const Image = styled.img``;

export const ContainerItens = styled.div`
  background: linear-gradient(
    157.44deg,
    rgba(255, 255, 255, 0.6) 0.84%,
    rgba(255, 255, 255, 0.6) 0.85%,
    rgba(255, 255, 255, 0.15) 100%
  );
  border-radius: 61px 61px 0 0;
  padding: 50px 36px;
`;

export const H1 = styled.h1`
  letter-spacing: -0.408px;
  font-weight: bold;
  font-size: 35px;
  line-height: 22px;
  font-style: normal;

  text-align: center;
  margin-bottom: 45px;
  color: #fff;
`;

export const InputLabel = styled.p`
  color: #000;
  font-size: 15px;
  margin: 10px 25px;
  text-transform: uppercase;
`;

export const Input = styled.input`
  width: 342px;
  height: 58px;
  border-radius: 10px;
  border: none;
  outline: none;
  margin-bottom: 25px;
  padding-left: 25px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  color: #fff;
  font-weight: normal;
  font-size: 20px;
  line-height: 28px;
  font-style: normal;
`;

export const Button = styled.button`
  display: flex;
  gap: 20px;
  margin: 50px 0;
  padding: 10px;
  background: ${(props) =>
    props.$backUsersButton ? `rgba(0,0,0,0)` : `rgba(0,0,0)`};
  border-radius: 5px;
  border: ${(props) => (props.$backUsersButton ? `solid 1px #fff` : `none`)};
  width: 342px;
  height: 58px;
  cursor: pointer;
  color: #fff;
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 28px;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }
`;

export const Users = styled.ul`
  list-style: none;
`;

export const User = styled.li`
  width: 342px;
  height: 58px;
  border-radius: 10px;
  margin-bottom: 25px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: #fff;
  font-weight: normal;
  font-size: 20px;
  line-height: 28px;
  font-style: normal;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  gap: 30px;
`;

export const IconRotate = styled.img`
  transform: rotate(180deg);
`;

export const ButtonTrash = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;
