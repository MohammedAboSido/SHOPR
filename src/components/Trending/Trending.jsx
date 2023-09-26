

import img from "../../assets/images/trending/person.png";
import { Container, MainButton } from '../../global/components';
import { BgTrending, Description, Left, Right, SubTitle, Title, TrendingImg, TrendingWrapper } from './style';
const Trending = () => {
    return (
        <>
        <BgTrending>
            <Container>
                <TrendingWrapper>
                    <Left>
                        <Title>TRENDING</Title>
                        <SubTitle>Caring about you and your body.</SubTitle>
                        <Description>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.</Description>
                        <MainButton>See Collection</MainButton>
                    </Left>
                    
                    <Right>
                        <TrendingImg src={img}/>
                    </Right>
                </TrendingWrapper>
            </Container>
        </BgTrending>
        </>
    );
}

export default Trending;
