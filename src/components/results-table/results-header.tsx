import React, {FC} from 'react';
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";

const ResultsHeader: FC = () => {
    return (
        <TableHead>
            <TableRow>
                <TableCell align="left">Тест</TableCell>
                <TableCell align="left">Email</TableCell>
                <TableCell align="left">Балл</TableCell>
                <TableCell align="left">Максимальный балл</TableCell>
            </TableRow>
        </TableHead>
    );
};

export default ResultsHeader;
