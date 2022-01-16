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
                    <BeerCard key={index}>
                        <Front className="front">
                            <Image src={beer.image_url} />
                            <Info>
                                <h2>{beer.name.toUpperCase()}</h2>
                                {/*                                 <Star>
                                    {[...Array(5)].map((_, index) => (
                                        <FiStar key={index} />
                                    ))}
                                </Star> */}
                                <h4>{beer.tagline}</h4>

                                <p>VOL.{beer.abv}%</p>
                            </Info>
                        </Front>
                        <Back className="back">
                            <h4>{beer.name}</h4>
                            <p>{beer.description}...</p>
                            <NextLink href={`/beer/${beer.id}`}>
                                <a>
                                    <h4>READ MORE</h4>
                                </a>
                            </NextLink>
                        </Back>
                    </BeerCard>
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
    position: relative;
    width: 300px;
    max-width: 450px;
    height: 300px;
    margin: 50px 20px;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 220px;

    perspective: 1500px;

    :hover {
        .front {
            transform: rotateY(-180deg);
        }
        .back {
            backface-visibility: hidden;
            transform: rotateY(0deg);
        }
    }
`;

const Face = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;

    border-radius: 5px;
    // border: 1px solid hsla(0, 0%, 80%, 1);
    box-shadow: 2px 2px 20px hsla(0, 0%, 0%, 0.2);
    transition: all 0.5s ease-in-out;

    display: flex;
    justify-content: center;
`;

const Front = styled(Face)`
    transform: rotateY(0deg);
`;

const Back = styled(Face)`
    flex-direction: column;
    background: hsla(350, 80%, 100%, 1);
    transform: rotateY(180deg);
    padding: 10px;

    h4 {
        margin: 20px 0px;
        text-align: center;
        font-weight: 400;
        color: hsla(350, 0%, 0%, 1);
    }
    p {
        width: 100%;
        height: 10em;
        font-size: 12px;
        letter-spacing: initial;
        text-align: justify;
        text-overflow: ellipsis;
        color: black;
        overflow: hidden;
    }

    a {
        width: 100%;
        border: 1px solid grey;
    }
`;

const Image = styled.img`
    position: absolute;
    right: -10px;
    bottom: 0px;
    height: 120%;
    max-width: 50%;
    margin: 0px auto;

    border-bottom: 1px solid hsla(0, 0%, 0%, 0.1);
`;
const Info = styled.div`
    padding: 10px;
    padding-right: 45%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;

    h2 {
        max-height: 45px;
        font-weight: 600;
        font-size: clamp(1em, 1.2vw, 1.5em);
        color: hsla(0, 0%, 30%, 1);
    }
    h4 {
        min-height: 6em;
        font-weight: 600;
        font-size: clamp(0.8em, 1vw, 1.3em);
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
