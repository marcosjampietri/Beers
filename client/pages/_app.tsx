import type { AppProps } from "next/app";

import "../styles/globals.css";

import { useRouter } from "next/router";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { Transition, animated, config } from "react-spring";
import styled from "styled-components";
import { } from "../store/beers/beersActions";

import { useStore } from "../store";

const App = ({ Component, pageProps, router }: AppProps) => {
    const store = useStore(pageProps.initialReduxState);

    return (
        <>
            <Provider store={store}>
                <PersistGate persistor={store.__PERSISTOR} loading={null}>
                    <AppChild
                        Component={Component}
                        pageProps={pageProps}
                        router={router}
                    />
                </PersistGate>
            </Provider>
        </>
    );
};

const AppChild = ({ Component, pageProps }: AppProps) => {
    const router = useRouter();

    const items = [
        {
            id: router.route,
            Component,
            pageProps,
        },
    ];

    return (
        <>
            {/*<GlobalStyle /> */}
            <NextChild>
                <StyledDiv>
                    <Transition
                        items={items}
                        keys={(item: any) => item.id}
                        config={config.slow}
                        from={{
                            position: "absolute",
                            opacity: 0,
                        }}
                        initial={{ opacity: 0 }}
                        enter={{
                            position: "absolute",
                            opacity: 1,
                        }}
                        leave={{
                            position: "absolute",
                            opacity: 0,
                        }}
                    >
                        {(
                            styles,
                            {
                                pageProps: animatedPageProps,
                                Component: AnimatedComponent,
                            },
                            key: string
                        ) => (
                            <animated.div
                                key={key}
                                style={{
                                    ...styles,
                                    width: "100%",
                                    height: "100%",
                                }}
                            >
                                <AnimatedComponent {...animatedPageProps} />
                            </animated.div>
                        )}
                    </Transition>
                </StyledDiv>
            </NextChild>
        </>
    );
};

export default App;

const NextChild = styled.div`
    width: 100vw;
    height: 100%;
`;

const StyledDiv = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
`;
