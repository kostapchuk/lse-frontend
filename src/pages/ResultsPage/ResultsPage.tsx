import React, {FC, useEffect, useState} from 'react';
import {IResults} from "../../types/types";
import {useFindAllResultsQuery} from "../../redux/slices/resultsApiSlice";
import ResultsTable from "../../components/results-table/results-table";

const ResultsPage: FC = () => {
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

export default ResultsPage;
