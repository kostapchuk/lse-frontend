import React, {FC, useEffect, useState} from 'react';

interface IResults {
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

    useEffect(() => {
        subscribe()
    }, [])

    const subscribe = async () => {
        const eventSource = new EventSource(`http://localhost:8080/api/v1/results/stream`)
        eventSource.onmessage = function (event) {
            const message = JSON.parse(event.data);
            setResults(prev => [message, ...prev]);
        }
    }

    return(
        <>
            {results.map(res => <p key={res.id}>{res.quizName + ":" + res.score}</p>)}
        </>
    )
};

export default ResultsPage;
