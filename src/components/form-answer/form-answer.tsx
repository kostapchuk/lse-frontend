import React, { FC, useState } from 'react';
import { FormControlLabel } from '@mui/material';
import { useDispatch } from 'react-redux';
import { updateAnswer } from '../../redux/slices/resultsSlice';

interface AnswersProps {
    id: string;
    control: React.ReactElement<any, any>;
    label: string;
}

const FormAnswer: FC<AnswersProps> = ({
    id,
    control,
    label,
}) => {

    return (
        <FormControlLabel
            value={id}
            control={control}
            label={label}
        />
    );
};

export default FormAnswer;
