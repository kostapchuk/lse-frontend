import React, {FC} from 'react';
import Typography from '@mui/material/Typography';

interface QuestionProps {
    text: string;
}

const Question: FC<QuestionProps> = ({text}) => {
    return <Typography variant="h6">{text}</Typography>;
};

export default Question;
