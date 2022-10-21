import React, { FC, useEffect, useState } from 'react';
import ResultsTable from '../../components/results-table/results-table';
import { IResults } from "../../types/types";
import EventSource, { EventSourceListener } from "react-native-sse";
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers/rootReducer';

const ResultsTableContainer: FC = () => {
    const [results, setResults] = useState<IResults[]>([]);
    const accessToken = useSelector((state: RootState) => state.auth.accessToken?.value);

    useEffect(() => {
        const url = new URL(`${process.env.REACT_APP_BACKEND_URL}/api/v1/results/stream`);
        console.log(accessToken);
        const es = new EventSource(url, {
            headers: {
                Authorization: {
                    toString: function () {
                        return `Bearer ${accessToken}`;
                    },
                },
            },
        });

        const listener: EventSourceListener = (event: any) => {
            if (event.type === "open") {
                console.log("Open SSE connection.");
            } else if (event.type === "message") {
                const result = JSON.parse(event.data) as IResults;
                setResults((prevResults) => [...prevResults, result]);
                console.log(`Received quiz ${result.quizName}`);
            } else if (event.type === "error") {
                console.error("Connection error:", event.message);
            } else if (event.type === "exception") {
                console.error("Error:", event.message, event.error);
            }
        };

        es.addEventListener("open", listener);
        es.addEventListener("message", listener);
        es.addEventListener("error", listener);

        return () => {
            es.removeAllEventListeners();
            es.close();
        };
    }, []);

    // useEffect(() => {
    //     subscribe();
    // }, []);

    // const subscribe = async () => {
    //     source.onmessage = function (event) {
    //         const message = JSON.parse(event.data);
    //         setResults((prev) => [message, ...prev]);
    //     };
    // };

    return (
        <ResultsTable results={results} />
    );
};

export default ResultsTableContainer;
