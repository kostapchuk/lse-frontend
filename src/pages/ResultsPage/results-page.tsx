import React, { FC, useEffect, useState } from 'react';
import BasicTable from '../../components/results-table/results-table';

export interface IResults {
  id: string;
  quizName: string;
  firstName: string;
  lastName: string;
  group: string;
  faculty: string;
  email: string;
  score: number;
  maxScore: number;
}

const ResultsPage: FC = () => {
  const [results, setResults] = useState<IResults[]>([]);

  const resultUser = {
    id: 1,
    quizName: 'Test1',
    firstName: 'Kirill',
    lastName: 'Borodich',
    group: '19',
    faculty: 'fsk',
    email: 'kurusha.myau@mail.ru',
    score: '30',
    maxScore: '500',
  };

  useEffect(() => {
    subscribe();
  }, []);

  const subscribe = async () => {
    const eventSource = new EventSource(
      `http://localhost:8080/api/v1/results/stream`
    );
    eventSource.onmessage = function (event) {
      const message = JSON.parse(event.data);
      setResults((prev) => [message, ...prev]);
    };
  };

  return (
    <BasicTable />
    // <>
    //   {results.map((res) => (
    //     <p key={res.id}>{res.quizName + ':' + res.score}</p>
    //   ))}
    // </>
  );
};

export default ResultsPage;
