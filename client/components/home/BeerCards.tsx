import { useEffect } from "react";
import NextLink from "next/link";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { getBeersListAction } from "../../store/beers/beersActions";
import { useTypedSelector, AppState } from "../../store/_rootReducer";
import { beer } from "../../types";

import { FiStar } from "react-icons/fi";

const Cards = () => {
    const dispatch = useDispatch();

    const { beersAll, abv } = useTypedSelector(
        (state: AppState) => state.beers
    );

    useEffect(() => {
        dispatch(getBeersListAction());
    }, [dispatch, abv]);

    return (
        <BeersSection>
            <Title>MOST FABULOUS BEERS EVER</Title>

            <Table data-test="comp-cards">
                {beersAll.map((beer: beer, index: number) => (
                    <NextLink href={`/beer/${beer.id}`} passHref key={index}>
                        <BeerCard>
                            <Image src={beer.image_url} />
                            <Info>
                                <h2>{beer.name.toUpperCase()}</h2>

                                <Star>
                                    {[...Array(5)].map((_, index) => (
                                        <FiStar key={index} />
                                    ))}
                                </Star>
                                <h4>{beer.tagline}</h4>

                                <p>VOL.{beer.abv}%</p>
                                <p>{beer.description}</p>
                            </Info>
                        </BeerCard>
                    </NextLink>
                ))}
            </Table>
        </BeersSection>
    );
};

export default Cards;

const BeersSection = styled.section`
    width: 100vw;
    padding: 60px 20px;
`;

const Title = styled.h1`
    width: 100%;
    max-width: 500px;
    margin: 0px auto 50px;
    padding: 20px;
    text-align: center;
    font-weight: 200;
    letter-spacing: 0.14em;
    font-size: clamp(2em, 4vw, 3em);

    color: hsla(0, 0%, 45%, 1);
    border-bottom: 1px solid hsla(0, 0%, 60%, 1);
`;

const Table = styled.div`
    max-width: 1200px;
    margin: 0px auto;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const BeerCard = styled.div`
    margin: 30px 2vw;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 200px;
    max-width: 300px;

    border: 1px solid hsla(0, 0%, 50%, 0.2);

    border-radius: 10px;
    box-shadow: 2px 2px 10px hsla(0, 0%, 0%, 0.2);
    cursor: pointer;
`;
const Image = styled.img`
    width: 100%;
    height: 300px;
    margin: 0px auto;

    object-fit: cover;
    object-position: center center;
    border-bottom: 1px solid hsla(0, 0%, 0%, 0.1);
`;
const Info = styled.div`
    padding: 10px;

    h2 {
        height: 35px;
        font-weight: 600;
        font-size: clamp(1em, 1.5vw, 1.5em);
        color: hsla(0, 0%, 30%, 1);
    }
    h4 {
        min-height: 2em;
        font-weight: 600;
        font-size: clamp(1em, 1.5vw, 1.5em);
        color: hsla(0, 0%, 50%, 1);
    }

    p {
        font-style: italic;
        font-size: 10px;
        font-weight: 400;
        letter-spacing: initial;
        color: hsla(0, 0%, 30%, 1);
        text-align: justify;
    }
`;

const Star = styled.div`
    position: relative;
    left: -4px;
    margin: 10px 0px 0px 0px;

    svg {
        fill: hsla(35, 100%, 50%, 1);
        stroke: none;
        font-size: 1.3em;
    }
`;
