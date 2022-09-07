import React, {FC, useEffect, useState} from 'react';
import ResultsTable from '../../components/results-table/results-table';
import {IResults} from "../../types/types";
import ResultsSourceClient from "../../api/ResultsSourceClient";

const ResultsTableContainer: FC = () => {
    const [results, setResults] = useState<IResults[]>([]);

    useEffect(() => {
        subscribe();
    }, []);

    const subscribe = async () => {
        ResultsSourceClient.onmessage = function (event) {
            const message = JSON.parse(event.data);
            setResults((prev) => [message, ...prev]);
        };
    };

    return (
        <ResultsTable results={results}/>
    );
};

export default ResultsTableContainer;
