import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories } from './style';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explore" />
      <Title>Explore repositories no GitHub</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/8649384?s=460&u=ab7f4f470e88a588c9468db00deac2d2336fb708&v=4"
            alt="Leticia Enz"
          />
          <div>
            <strong>rockseat/unform</strong>
            <p>Easy peasy high scalabe React e React Native forms!</p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/8649384?s=460&u=ab7f4f470e88a588c9468db00deac2d2336fb708&v=4"
            alt="Leticia Enz"
          />
          <div>
            <strong>rockseat/unform</strong>
            <p>Easy peasy high scalabe React e React Native forms!</p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/8649384?s=460&u=ab7f4f470e88a588c9468db00deac2d2336fb708&v=4"
            alt="Leticia Enz"
          />
          <div>
            <strong>rockseat/unform</strong>
            <p>Easy peasy high scalabe React e React Native forms!</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
