/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { StyleForm, Grid } from './style';
import ButtonCard from '../../molecules/ButtonCard';

interface IPanelResults {
  /**
   * This is main value showd in card
   */
  data: any[];
}

const PanelResults = ({ data }: IPanelResults) => (
  <StyleForm style={{}}>
    <Grid>
      {data.map((dataValues) => (
        <ButtonCard
          value={dataValues.value}
          textColor={dataValues.textColor}
          cardColor={dataValues.cardColor}
        />
      ))}
    </Grid>
  </StyleForm>
);

export default PanelResults;
