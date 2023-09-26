/* eslint-disable no-unused-vars */
import React from 'react';
import { StyledHero, StyledHeroButton, StyledHeroRightDiv, StyledHeroleftDiv } from './hero.styled';

import heroimg from '../../assets/images/./HeroSection/hero.png';
import { StyledImage, Typography } from '../../global/components';
const Hero = () => {
    return (
            <StyledHero>
                <StyledHeroleftDiv>
                    <Typography fontSize="54" color='#121212'>
                        Care products for every home.
                    </Typography>
                    <Typography fontSize="18" color='#121212' margin="20px 0 20px 0">
                        Keep your everyday style chic and on-trend with our selection 20+ styles to choose from.
                    </Typography>
                    <StyledHeroButton>
                        See Collection
                    </StyledHeroButton>
                </StyledHeroleftDiv>
                <StyledHeroRightDiv>
                    <StyledImage src={heroimg} width='100%' height='100%' alt='' />
                </StyledHeroRightDiv>
            </StyledHero>

    );
}

export default Hero;
