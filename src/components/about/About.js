// Library Imports
import React from 'react';
import styled from 'styled-components';
import ScrollableAnchor from 'react-scrollable-anchor';
// Component Imports
import AboutTextContent from './aboutTextContent/AboutTextContent';
import AboutImgComposition from './aboutImgComposition/AboutImgComposition';
// Function Imports
import { SecondaryH2 } from '../helpers/typography';
import { FormatText, media } from '../helpers/utility';
import { Row } from '../helpers/grid';
// Section container style
const AboutWrapper = styled.section`
  background-color: #f7f7f7;
  padding: 25rem 0;
  margin-top: -20vh;

  ${media.portrait`
    padding: 20rem 0;
  `};
`;

export default ({ events }) => {
  return (
    <ScrollableAnchor id={'About'}>
      <AboutWrapper>
        <FormatText textAlign="center" marginBottom="8rem">
          <SecondaryH2>The best events in Memphis, Tennesse!</SecondaryH2>
        </FormatText>

        <Row marginBottom="8rem">
          <AboutTextContent />
          <AboutImgComposition events={events} />
        </Row>
      </AboutWrapper>
    </ScrollableAnchor>
  );
};
