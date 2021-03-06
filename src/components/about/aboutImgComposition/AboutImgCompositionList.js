// Library Imports
import React from 'react';
import styled from 'styled-components';
import _ from 'lodash';

import { media } from '../../helpers/utility';

// Container for images
const CompositionWrapper = styled.div`
  position: relative;
`;

// Image style
const AboutImgCompositionItem = styled.img`
  width: 55%;
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.4);
  border-radius: 2px;
  position: absolute;
  z-index: 10;
  transition: all 0.2s;
  /* outline reactangle */
  outline-offset: 2rem;

  /* Positions with dynamic properties */
  left: ${props => (props.left ? props.left : 'auto')};

  right: ${props => (props.right ? props.right : 'auto')};

  top: ${props => (props.top ? props.top : 'auto')};

  /* Media Queries */
  ${media.portrait`
    position: relative;
    float: left;
    width: 33.3333%;
    box-shadow: 0 1.5rem 3rem rgba(0, 0, 0, 0.2);
  `} ${media.portrait`
     left: ${props => (props.leftmedia ? props.leftmedia : props.left)};

     right: ${props => (props.rightmedia ? props.rightmedia : props.right)};

      top: ${props => (props.topmedia ? props.topmedia : props.top)};

      transform: scale(${props => props.scale});
      z-index: ${props => props.zIndex};
  `}

  /* Scale up image on hover */
  &:hover {
    outline: 1.5rem solid rgba(86, 67, 250, 0.8);
    transform: scale(1.05) translateY(-0.5rem);
    box-shadow: 0 2.5rem 4rem rgba(0, 0, 0, 0.5);
    z-index: 20;
  }
  /* Scale down images what not hovered when one other hovered */
  ${CompositionWrapper}:hover &:not(:hover) {
    transform: scale(0.95);
  }
`;

export default ({ events }) => {
  // Sort events by id and save last 3 element to array
  const sortedEvents = _.takeRight(_.sortBy(events, 'id'), 3);

  let count = 0;
  // iterate through sortedEvents get the correct properties and positions. Save it to CompositionItem
  const CompositionItem = sortedEvents.map(item => {
    switch (count) {
      case 0:
        count++;
        return (
          <AboutImgCompositionItem
            src={item.imgURL}
            alt={item.alt}
            key={item.id}
            left="0"
            top="-2rem"
            topmedia="0"
            scale="1.1"
            zIndex="10"
          />
        );
      case 1:
        count++;
        return (
          <AboutImgCompositionItem
            src={item.imgURL}
            alt={item.alt}
            key={item.id}
            right="0"
            top="2rem"
            topmedia="-1rem"
            scale="1.3"
            zIndex="11"
          />
        );
      case 2:
        count++;
        return (
          <AboutImgCompositionItem
            src={item.imgURL}
            alt={item.alt}
            key={item.id}
            left="20%"
            top="10rem"
            topmedia="1rem"
            leftmedia="0"
            scale="1.2"
            zIndex="10"
          />
        );
      default:
        return null;
    }
  });
  // Render compositionItem
  return <CompositionWrapper>{CompositionItem}</CompositionWrapper>;
};
