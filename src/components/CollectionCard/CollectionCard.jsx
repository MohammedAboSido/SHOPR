import React from 'react';

import { StyledLink } from '../../global/components';
import { CollectionCardImg, CollectionCardImgContainer, CollectionCardTitle, CollectionCardWrapper } from './style';

const CollectionCard = ({img,title}) => {
    return (
        <CollectionCardWrapper>
        <CollectionCardImgContainer>
            <CollectionCardImg src={img}/>
        </CollectionCardImgContainer>
        <CollectionCardTitle>{title}</CollectionCardTitle>
        <StyledLink>See Collection</StyledLink>
        </CollectionCardWrapper>
    );
}

export default CollectionCard;
