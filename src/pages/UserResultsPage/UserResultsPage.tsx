import React, {FC, useEffect, useState} from 'react';
import {IResults} from "../../types/types";
import ResultsTable from "../../components/results-table/results-table";
import {useFindResultsForCurrentUserQuery} from "../../redux/slices/resultsApiSlice";

const UserResultsPage: FC = () => {
    const [results, setResults] = useState<IResults[]>([]);
    const {data: fetchedResults} = useFindResultsForCurrentUserQuery();

    useEffect(() => {
        if (fetchedResults) {
            setResults(fetchedResults);
        }
    })

    return (
        <ResultsTable results={results}/>
    );
};

export default UserResultsPage;
