import axios from "axios";
import { actionCreator } from "../../types/states";

export const getBeersListAction: actionCreator<any> = () => async (
    dispatch: any,
    getState: any
) => {

    const abv: number = getState().beers.abv | 0

    const beerUrl = () => `https://api.punkapi.com/v2/beers?abv_gt=${abv}`;



    const { data: beersList } = await axios({
        url: beerUrl(),
        method: 'get',

    }
    );

    dispatch({
        type: "FETCH_BEERS",
        payload: beersList,
    });

};


export const filterByABVAction = (abv: number | string) => ({

    type: "FILTER_ABV",
    payload: abv,

});