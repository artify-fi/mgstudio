/* eslint-disable */
import React from 'react';
import Fade from 'react-reveal/Fade';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Heading from 'common/src/components/Heading';
import BgImage from "../../../components/BgImage";

import Container from 'common/src/components/UI/Container';
import BannerWrapper, {
  BannerContent,
} from './banner.style'

import circleBorder from 'common/src/assets/image/appModern/shape.svg';

const Banner = () => {     
 
    return (
    <BannerWrapper id="home">
      <Container>   
        <BannerContent>         
          <Fade up delay={100}>
            <Heading
            style={{ fontFamily: 'Playfair Display', fontWeight: 300}}
              as="h1"
              content="Kauneus & Hyninvointi"
            />
          </Fade>         
        </BannerContent>       
      </Container>     
      <img
        className="bannerBottomShape"
        src={circleBorder}
        alt="Bottom Circle"
      />
    </BannerWrapper>
  );
};

export default Banner;
