import React, { useEffect, useState } from 'react'

export const useFetch = (url) => {

    console.log('useFetch: me cargo');
    const [state, setState] = useState({
        data: false,
        isLoading: true,
        hasError: false,
        error: false
    });

    const getFetch = async () => {

        setState({
            data: false,
            isLoading: true,
            hasError: false,
            error: false
        });

        const resp = await fetch(url);

        if (!resp.ok) {
            setState({
                data: false,
                isLoading: false,
                hasError: true,
                error: {
                    code: resp.status,
                    message: resp.statusText,
                }
            });
            return
        }

        const data = await resp.json();

        setState({
            data: data,
            isLoading: false,
            hasError: false,
            error: false
        });
    };

    useEffect(() => {

        console.log('useFetch: me cargo fetch con useEfect');
        getFetch();
    }, [url]);

    return ({
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
    });
};
