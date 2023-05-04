import axios from 'axios';
import { useEffect, useState } from 'react';

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
});

const useGet = (path: string) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [pending, setPending] = useState(null);

    useEffect(() => {
        instance
            .get(path, {
                headers: {},
            })
            .then((response) => {
                setData(response.data);
                setPending(false);
            })
            .catch((error) => {
                setError(error);
                setPending(false);
            });
    }, [path]);

    return { data, error, pending };
};

export default useGet;
