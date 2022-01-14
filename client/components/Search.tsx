import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { filterByABVAction } from "../store/beers/beersActions";

const SearchBar = () => {
    const dispatch = useDispatch();

    return (
        <Bar>
            <Input
                type="number"
                placeholder="SEARCH BY ALCOHOL AMOUNT"
                onChange={(event) => {
                    dispatch(filterByABVAction(event.target.value));
                }}
            />
        </Bar>
    );
};

export default SearchBar;

const Bar = styled.nav`
    position: fixed;
    width: 100vw;
    height: 80px;
    text-align: center;
    z-index: 2;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Input = styled.input`
    position: absolute;
    width: 80%;
    height: 70%;
    padding: 0px 5px;

    font-size: 16px;
    text-align: center;

    border: 1px solid hsla(200, 100%, 25%, 0.3);
    border-radius: 10px;
    background-color: hsla(0, 0%, 100%, 0.5);
    backdrop-filter: blur(15px);
    color: hsla(0, 0%, 10%, 1);
    box-shadow: inset 2px 2px 5px hsla(0, 0%, 0%, 0.15);

    transition: 0.5s;

    ::placeholder {
        transition: 0.3s;
        color: hsla(240, 0%, 10%, 0.3);
        font-size: 21px;
        font-weight: 100;
        text-align: center;
    }

    :focus {
        transition: 0.3s;
        // padding: 0px 60px;
        padding-top: 4px;
        padding-left: -35vw;

        outline: none;
        background: hsla(55, 100%, 60%, 1);
        color: hsla(280, 100%, 20%, 1);
    }
`;
