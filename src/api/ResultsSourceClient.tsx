const ResultsSourceClient =
    new EventSource(`${process.env.REACT_APP_BACKEND_URL}/api/v1/results/stream`)

export default ResultsSourceClient;
