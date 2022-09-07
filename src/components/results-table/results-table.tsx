import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { IResults } from '../../types/types';

function createData(
  id: string,
  quizName: string,
  firstName: string,
  lastName: string,
  group: string,
  faculty: string,
  email: string,
  score: number,
  maxScore: number
): IResults {
  return {
    id,
    quizName,
    firstName,
    lastName,
    group,
    faculty,
    email,
    score,
    maxScore,
  };
}

const rows = [
  createData(
    '1',
    'Test1',
    'Kirill',
    'Borodich',
    '20',
    'fsk',
    'kir.kisya@gmail.com',
    30,
    500
  ),
  createData(
    '2',
    'Test2',
    'Kirill',
    'Ost',
    '21',
    'fsk',
    'kir.kisya@gmail.com',
    50,
    500
  ),
  createData(
    '3',
    'Test3',
    'Kirill',
    'Lop',
    '21',
    'fsk',
    'kir.kisya@gmail.com',
    80,
    500
  ),
  createData(
    '4',
    'Test4',
    'Kirill',
    'Gus',
    '21',
    'fsk',
    'kir.kisya@gmail.com',
    150,
    500
  ),
  createData(
    '5',
    'Test5',
    'Kirill',
    'Lander',
    '21',
    'fsk',
    'kir.kisya@gmail.com',
    500,
    500
  ),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Id</TableCell>
            <TableCell align="right">Тест</TableCell>
            <TableCell align="right">Имя</TableCell>
            <TableCell align="right">Фамилия</TableCell>
            <TableCell align="right">Группа</TableCell>
            <TableCell align="right">Факультет</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Балл</TableCell>
            <TableCell align="right">Максимальный балл</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right">{row.id}</TableCell>
              <TableCell component="th" scope="row">
                {row.quizName}
              </TableCell>
              <TableCell align="right">{row.firstName}</TableCell>
              <TableCell align="right">{row.lastName}</TableCell>
              <TableCell align="right">{row.group}</TableCell>
              <TableCell align="right">{row.faculty}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.score}</TableCell>
              <TableCell align="right">{row.maxScore}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
