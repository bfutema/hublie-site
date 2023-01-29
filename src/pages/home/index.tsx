import { Navbar } from '@/components';
import React from 'react';

import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Navbar />
      <h1>home</h1>
    </Container>
  );
};

export default Home