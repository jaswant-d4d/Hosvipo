import { useEffect, useState, useCallback } from "react";
import axios from "../api";

export const useFetch = <T = any>(endpoint: string) => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const fetchData = useCallback(async () => {
        setLoading(true);
        setError("");

        try {
            const res = await axios.get<any>(endpoint);

            const json = res.data;

            setData(json);
        } catch (err) {
            setError("Something went wrong");
        } finally {
            setLoading(false);
        }
    }, [endpoint]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return { data, loading, error, mutate: fetchData };
};