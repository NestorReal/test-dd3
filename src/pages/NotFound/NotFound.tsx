import React from 'react';
import { Link } from 'react-router-dom';
import { PageContainer, PageTitle, Message } from './styled';
import Button from '../../components/atoms/Button';

const NotFound = () => (
  <PageContainer>
    <PageTitle>Error 404</PageTitle>
    <Message>Ups, algo salió mal</Message>
    <Link to="/" style={{ textDecoration: 'none' }}>
      <Button primary borderRadius={8} onClick={() => {}}>
        Regresar al inicio
      </Button>
    </Link>
  </PageContainer>
);

export default NotFound;
