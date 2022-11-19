import React, {FC} from 'react';
import {FormControlLabel} from '@mui/material';

// todo any remove
interface AnswerProps {
    id: string;
    control: React.ReactElement<any, any>;
    label: string;
}

const Answer: FC<AnswerProps> = ({id, control, label,}) => {
    return (
        <FormControlLabel
            value={id}
            control={control}
            label={label}
        />
    );
};

export default Answer;
