import React, {FC} from 'react';
import {IResults} from "../../types/types";
import ResultsRow from "./results-row";
import TableBody from "@mui/material/TableBody";

interface ResultsBodyProps {
    results: IResults[],
}

const ResultsBody: FC<ResultsBodyProps> = ({results}) => {
    return (
        <TableBody>
            {results.map(result => <ResultsRow key={result.id} result={result}/>)}
        </TableBody>
    );
};

export default ResultsBody;
