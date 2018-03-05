import React from 'react';
import styled from 'styled-components';
import {BoxedContainer, FullContainer} from '../../components/Container';
import ReactStart from './ReactStart.png'
import Banner from '../../components/Banner';
import { rgba, darken } from 'polished'
import { withTheme } from 'styled-components'


const Training = (props) => {
  return (

      <FullContainer>
        <Banner height={440} color={rgba(props.theme.primary, 0.8)} src={ReactStart}>
        </Banner>
        <BoxedContainer>
          <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/3ndGumxHXvo" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </BoxedContainer>
      </FullContainer>

  )
}
export default withTheme(Training);
