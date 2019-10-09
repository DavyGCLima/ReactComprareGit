import React, { useState } from 'react';
import moment from 'moment';
import api from '../../services/api';

import { Container, Form } from './styles';

import CompareList from '../../components/CompareList';

import logo from '../../assets/logo.png';

function Home() {
  const [repositories, setRepositories] = useState([]);
  const [repositoryInput, setRepositoryInput] = useState('');
  const [hasError, setHasError] = useState(false);
  const [laoding, setLoading] = useState(false);

  async function handleAddRepository(event) {
    event.preventDefault();

    setLoading(true);

    try {
      const { data: repository } = await api.get(`/repos/${repositoryInput}`);

      repository.lastCommit = moment(repository.pushed_at).fromNow();

      setRepositoryInput('');
      setRepositories([...repositories, repository]);
      setHasError(false);
    } catch (error) {
      setHasError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Container>
      <img src={logo} alt="GitRepos Compare" />

      <Form hasError={hasError} onSubmit={handleAddRepository}>
        <input
          type="text"
          placeholder="Usuário/Repositório"
          value={repositoryInput}
          onChange={(event) => setRepositoryInput(event.target.value)}
        />
        <button type="submit">{laoding ? <i className="fa fa-spinner fa-pulse" /> : 'OK'}</button>
      </Form>

      <CompareList repositories={repositories} />
    </Container>
  );
}

export default Home;
