import React, {FC, useEffect, useState} from 'react';
import ResultsTable from '../../components/results-table/results-table';
import {useFindAllResultsQuery} from "../../redux/slices/resultsApiSlice";
import {IResults} from "../../types/types";

const ResultsTableContainer: FC = () => {
    const [results, setResults] = useState<IResults[]>([]);
    const {data: fetchedResults} = useFindAllResultsQuery();

    useEffect(() => {
        if (fetchedResults) {
            setResults(fetchedResults);
        }
    })

    return (
        <ResultsTable results={results}/>
    );
};

export default ResultsTableContainer;
