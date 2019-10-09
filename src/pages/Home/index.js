import React, { useState } from 'react';
import { Container, Form } from './styles';
import api from '../../services/api';

import CompareList from '../../components/CompareList';

import logo from '../../assets/logo.png';

function Home() {
  const [repositories, setRepositories] = useState([]);
  const [repositoryInput, setRepositoryInput] = useState('');

  async function handleAddRepository(event) {
    event.preventDefault();

    try {
      const response = await api.get(`/repos/${repositoryInput}`);

      setRepositoryInput('');
      setRepositories([...repositories, response.data]);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Container>
      <img src={logo} alt="GitRepos Compare" />

      <Form onSubmit={handleAddRepository}>
        <input
          type="text"
          placeholder="Usuário/Repositório"
          value={repositoryInput}
          onChange={(event) => setRepositoryInput(event.target.value)}
        />
        <button type="submit">OK</button>
      </Form>

      <CompareList repositories={repositories} />
    </Container>
  );
}

export default Home;
