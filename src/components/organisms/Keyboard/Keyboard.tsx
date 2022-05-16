/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { StyleForm, Grid } from './style';
import ButtonKeyboard from '../../molecules/ButtonKeyboard';
import Delete from '../../icons/Delete';

const Keyboard = () => (
  <StyleForm style={{}}>
    <div style={{ padding: '20px' }}>
      <Grid style={{ paddingTop: '10px', marginRight: '50px', marginLeft: '50px' }}>
        <ButtonKeyboard value="Q" cardColor="#D3D6DA" textColor="#56575E" />
        <ButtonKeyboard value="W" cardColor="#D3D6DA" textColor="#56575E" />
        <ButtonKeyboard value="E" cardColor="#D3D6DA" textColor="#56575E" />
        <ButtonKeyboard value="R" cardColor="#D3D6DA" textColor="#56575E" />
        <ButtonKeyboard value="T" cardColor="#D3D6DA" textColor="#56575E" />
        <ButtonKeyboard value="Y" cardColor="#D3D6DA" textColor="#56575E" />
        <ButtonKeyboard value="U" cardColor="#D3D6DA" textColor="#56575E" />
        <ButtonKeyboard value="I" cardColor="#D3D6DA" textColor="#56575E" />
        <ButtonKeyboard value="O" cardColor="#D3D6DA" textColor="#56575E" />
        <ButtonKeyboard value="P" cardColor="#D3D6DA" textColor="#56575E" />
      </Grid>
      <Grid style={{ paddingTop: '10px', marginRight: '10px', marginLeft: '70px' }}>
        <ButtonKeyboard value="A" cardColor="#D3D6DA" textColor="#56575E" />
        <ButtonKeyboard value="S" cardColor="#D3D6DA" textColor="#56575E" />
        <ButtonKeyboard value="D" cardColor="#D3D6DA" textColor="#56575E" />
        <ButtonKeyboard value="F" cardColor="#D3D6DA" textColor="#56575E" />
        <ButtonKeyboard value="G" cardColor="#D3D6DA" textColor="#56575E" />
        <ButtonKeyboard value="H" cardColor="#D3D6DA" textColor="#56575E" />
        <ButtonKeyboard value="J" cardColor="#D3D6DA" textColor="#56575E" />
        <ButtonKeyboard value="K" cardColor="#D3D6DA" textColor="#56575E" />
        <ButtonKeyboard value="L" cardColor="#D3D6DA" textColor="#56575E" />
        <ButtonKeyboard value="Ñ" cardColor="#D3D6DA" textColor="#56575E" />
      </Grid>
      <Grid style={{ paddingTop: '10px', marginRight: '60px', marginLeft: '10px' }}>
        <ButtonKeyboard value="Enter" cardColor="#D3D6DA" textColor="#56575E" />
        <ButtonKeyboard value="Z" cardColor="#D3D6DA" textColor="#56575E" />
        <ButtonKeyboard value="X" cardColor="#D3D6DA" textColor="#56575E" />
        <ButtonKeyboard value="C" cardColor="#D3D6DA" textColor="#56575E" />
        <ButtonKeyboard value="V" cardColor="#D3D6DA" textColor="#56575E" />
        <ButtonKeyboard value="B" cardColor="#D3D6DA" textColor="#56575E" />
        <ButtonKeyboard value="N" cardColor="#D3D6DA" textColor="#56575E" />
        <ButtonKeyboard value="M" cardColor="#D3D6DA" textColor="#56575E" />
        <ButtonKeyboard value={<Delete />} cardColor="#D3D6DA" textColor="#56575E" />
      </Grid>
    </div>
  </StyleForm>
);

export default Keyboard;
