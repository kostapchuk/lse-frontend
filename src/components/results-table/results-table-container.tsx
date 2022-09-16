import React, {FC, useEffect, useState} from 'react';
import ResultsTable from '../../components/results-table/results-table';
import {IResults} from "../../types/types";

const ResultsTableContainer: FC = () => {
    const [results, setResults] = useState<IResults[]>([]);
    const [source] = useState(new EventSource(`${process.env.REACT_APP_BACKEND_URL}/api/v1/results/stream`))

    useEffect(() => {
        subscribe();
    }, []);

    const subscribe = async () => {
        source.onmessage = function (event) {
            const message = JSON.parse(event.data);
            setResults((prev) => [message, ...prev]);
        };
    };

    return (
        <ResultsTable results={results}/>
    );
};

export default ResultsTableContainer;
