/* eslint-disable no-unused-vars */
import React from 'react';
import { StyledInstagram, StyledInstagramImg } from './instagram.styled';


import insta1 from '../../assets/images/InstagramSection/insta1.png';
import insta2 from '../../assets/images/InstagramSection/insta2.png';
import insta3 from '../../assets/images/InstagramSection/insta3.png';
import insta4 from '../../assets/images/InstagramSection/insta4.png';
import insta5 from '../../assets/images/InstagramSection/insta5.png';
import insta6 from '../../assets/images/InstagramSection/insta6.png';
import { StyledImage, Typography } from '../../global/components';

const Instagram = () => {
    return (
        <div>

            <Typography textalign="center" fontSize='40' fontWeight='500' margin=' 0 0 32px 0'>
                On Instagram
            </Typography>
            <StyledInstagram>
                <StyledInstagramImg>
                    <StyledImage src={insta1} width={100} height={100} />
                </StyledInstagramImg>
                <StyledInstagramImg>
                    <StyledImage src={insta2} width={100} height={100} />
                </StyledInstagramImg>
                <StyledInstagramImg>
                    <StyledImage src={insta3} width={100} height={100} />
                </StyledInstagramImg>
                <StyledInstagramImg>
                    <StyledImage src={insta4} width={100} height={100} />
                </StyledInstagramImg>
                <StyledInstagramImg>
                    <StyledImage src={insta5} width={100} height={100} />
                </StyledInstagramImg>
                <StyledInstagramImg>
                    <StyledImage src={insta6} width={100} height={100} />
                </StyledInstagramImg>
            </StyledInstagram>
        </div>
    );
}

export default Instagram;
