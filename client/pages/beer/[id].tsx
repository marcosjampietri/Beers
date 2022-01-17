import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import styled from "styled-components";
import NextLink from "next/link";

import { useTypedSelector, AppState } from "../../store/_rootReducer";
import { filterByABVAction } from "../../store/beers/beersActions";
import { beer } from "../../types/index";
import { GiKnifeFork } from "react-icons/gi";

const BeerPage = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const { id } = router.query;
    const { beersAll } = useTypedSelector((state: AppState) => state.beers);

    const beer: beer = beersAll.find((a: any) => a.id == id);

    if (!beer) {
        return (
            <Page>
                <h1>Coudn&apos;t Find this beer</h1>
            </Page>
        );
    }

    return (
        beer && (
            <Page>
                <Margin>
                    <Main>
                        <Image>
                            <img src={beer.image_url} />
                        </Image>
                        <Text>
                            <Name>
                                <h2>{beer.name.toUpperCase()}</h2>
                            </Name>
                            <h5>VOL.: {beer.abv}%</h5>

                            <h4>{beer.description}</h4>

                            <h3>ONLY £ {beer.id}</h3>
                        </Text>
                    </Main>
                    <Foods>
                        <h3>Goes Well With:</h3>
                        {beer.food_pairing.map((food, index) => (
                            <div key={index}>
                                <GiKnifeFork />
                                <p>{food}</p>
                            </div>
                        ))}
                    </Foods>
                    <NextLink href="/">
                        <a
                            onClick={() => {
                                dispatch(filterByABVAction("0"));
                            }}
                        >
                            <Back>BACK TO HOME</Back>
                        </a>
                    </NextLink>
                </Margin>
            </Page>
        )
    );
};

export default BeerPage;

const Page = styled.div`
    margin: 20px auto;
    height: 100%;
    padding-bottom: 30px;
    border-bottom: 1px solid hsla(0, 0%, 50%, 0.1);
`;

const Margin = styled.div`
    width: 100%;
    margin: 20px auto;
    max-width: 1000px;
`;

const Main = styled.div`
    margin: 20px auto;
    padding: 0px 10px;

    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

const Text = styled.div`
    max-width: 300px;

    h4,
    h5,
    h6 {
        letter-spacing: initial;
        line-height: 1.2;
        etter-spacing: 0.05em;
    }

    h5 {
        font-weight: 400;
        padding: 26px 0px;
    }

    h4 {
        padding: 6px;
        margin-bottom: 20px;
        font-weight: 400;
        font-size: 0.8em;
        line-height: 2em;
        color: hsla(0, 0%, 40%, 1);
    }
`;

const Image = styled.div`
    padding: 22px 50px;
    margin-bottom: 20px;
    overflow: hidden;

    filter: drop-shadow(2px -2px 10px hsla(240, 0%, 0%, 0.5));

    img {
        height: 70vw;
        max-height: 400px;
    }
`;

const Name = styled.div`
    position: relative;
    height: 80px;

    h2 {
        font-size: 26px;
        font-weight: 600;
    }

    :after {
        content: "";
        position: absolute;
        bottom: 0px;
        max-width: 180px;
        width: 100%;
        height: 3px;
        background-color: hsla(280, 80%, 20%, 1);
    }
`;
const Foods = styled.div`
    max-width: 400px;
    padding: 20px;
    margin: 30px auto;

    outline: 1px solid hsla(0, 0%, 50%, 0.3);
    outline-offset: -10px;

    h3 {
        font-weight: 400;
        font-size: 12px;
        text-transform: uppercase;
    }

    div {
        margin: 16px 0px;
        display: flex;

        svg {
            font-size: 16px;
            padding: 4px;
        }
    }

    p {
        margin: 0px;
    }
`;

const Back = styled.div`
    height: 70px;
    margin: 10px;
    padding: 30px;

    font-size: 12px;

    cursor: pointer;
    box-shadow: 2px 2px 10px hsla(0, 0%, 0%, 0.31);
    text-align: center;
`;
