import React, { FC } from 'react';
import { IResults } from "../../types/types";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

interface ResultsRowProps {
    result: IResults,
    forCurrentUser: boolean,
}

const ResultsRow: FC<ResultsRowProps> = ({ result, forCurrentUser }) => {
    return (
        <TableRow
            key={result.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell align="left">{result.quizName}</TableCell>
            {!forCurrentUser && <TableCell align="left">{result.email}</TableCell>}
            <TableCell align="left">{result.createdDate}</TableCell>
            <TableCell align="left">{result.score}</TableCell>
            <TableCell align="left">{result.maxScore}</TableCell>
        </TableRow>
    );
};

export default ResultsRow;
