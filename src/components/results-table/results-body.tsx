import React, {FC} from 'react';
import {IResults} from "../../types/types";
import ResultsRow from "./results-row";
import TableBody from "@mui/material/TableBody";

interface ResultsBodyProps {
    results: IResults[],
    forCurrentUser: boolean
}

const ResultsBody: FC<ResultsBodyProps> = ({results, forCurrentUser}) => {
    return (
        <TableBody>
            {results.map(result => <ResultsRow key={result.id} result={result} forCurrentUser={forCurrentUser}/>)}
        </TableBody>
    );
};

export default ResultsBody;
