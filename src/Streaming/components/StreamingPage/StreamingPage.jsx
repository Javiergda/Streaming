import { useFetch } from "../../hooks/useFetch"


export const StreamingPage = () => {


    const { data, isLoading, hasError } = useFetch('http');

    // {isLoading && <p>Cargando...</p>}
    // data


    return (
        <h1>StreamingPage</h1>
    )
}
