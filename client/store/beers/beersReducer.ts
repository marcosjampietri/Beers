interface BeersState {
    loading: boolean;
    beersAll: [];
    abv: number
}

const initialState: BeersState = {
    loading: true,
    beersAll: [],
    abv: 0,
};

export const beersReducer = (
    state: any = initialState,
    { type, payload }: any
) => {
    switch (type) {
        case "FETCH_BEERS":
            return {
                ...state,
                loading: false,
                beersAll: payload,
            };

        case "FILTER_ABV":
            return {
                ...state,
                abv: payload,
            };
        default:
            return state;
    }
};
