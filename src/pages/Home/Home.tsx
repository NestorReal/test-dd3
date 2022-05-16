import React, { useState } from 'react';
import Instructions from '../../components/organisms/Instructions';
import Tittle from '../../components/organisms/Tittle';
import PannelResults from '../../components/organisms/PannelResults';
import Keyboard from '../../components/organisms/Keyboard';
import Stats from '../../components/organisms/Stats';
import Container from '../../components/reusableStyledComponents/Container';

import { HomePageContainer, ContainerStats } from './styled';

const Home = () => {
  const [instructions, showInstructions] = useState(true);
  const [stats, showStats] = useState(false);
  const instructionsValue = localStorage.getItem("instructions") !== null

  const data = [
    {
      value: '',
      cardColor: 'rgba(147, 155, 159, 0.3)',
      textColor: '#FFFFFF',
    },
    {
      value: '',
      cardColor: 'rgba(147, 155, 159, 0.3)',
      textColor: '#FFFFFF',
    },
    {
      value: '',
      cardColor: 'rgba(147, 155, 159, 0.3)',
      textColor: '#FFFFFF',
    },
    {
      value: '',
      cardColor: 'rgba(147, 155, 159, 0.3)',
      textColor: '#FFFFFF',
    },
    {
      value: '',
      cardColor: 'rgba(147, 155, 159, 0.3)',
      textColor: '#FFFFFF',
    },
  ];
  const dataStats = {
    plays: 8,
    victories: 2,
    time: '04:10',
    word: '',
  };
  return (
    <HomePageContainer>
      {instructions && !instructionsValue? (
        <Instructions
          onchange={(value: any) => {
            showInstructions(false);
            localStorage.setItem('instructions', value);
          }}
        />
      ) : (
        <div>
          <Container display="flex" alignItems="center" justifyContent="center" marginBottom={10}>
            <Tittle showStats={() => showStats(!stats)} />
          </Container>
          <Container display="flex" alignItems="center" justifyContent="center" marginBottom={5}>
            <PannelResults data={data} />
          </Container>
          <Container display="flex" alignItems="center" justifyContent="center" marginBottom={5}>
            <PannelResults data={data} />
          </Container>
          <Container display="flex" alignItems="center" justifyContent="center" marginBottom={5}>
            <PannelResults data={data} />
          </Container>
          <Container display="flex" alignItems="center" justifyContent="center" marginBottom={5}>
            <PannelResults data={data} />
          </Container>
          <Container display="flex" alignItems="center" justifyContent="center" marginBottom={10}>
            <PannelResults data={data} />
          </Container>
          <Container display="flex" alignItems="center" justifyContent="center" marginBottom={1}>
            <Keyboard />
          </Container>
        </div>
      )}
      {stats ? (
        <ContainerStats>
          <Stats
            plays={dataStats.plays}
            victories={dataStats.victories}
            time={dataStats.time}
            word={dataStats.word}
            onChange={() => showStats(false)}
          />
        </ContainerStats>
      ) : null}
    </HomePageContainer>
  );
};

export default Home;
