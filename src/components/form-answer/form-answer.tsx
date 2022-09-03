import React, {FC} from 'react';
import {FormControlLabel} from '@mui/material';

// todo any remove
interface AnswersProps {
    id: string;
    control: React.ReactElement<any, any>;
    label: string;
}

const FormAnswer: FC<AnswersProps> = ({id, control, label,}) => {
    return (
        <FormControlLabel
            value={id}
            control={control}
            label={label}
        />
    );
};

export default FormAnswer;
