import React, {FC} from 'react';
import {TextField} from "@mui/material";

interface TextInputProps {
    required: boolean;
    field: string;
    label: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const BasicTextInput: FC<TextInputProps> = ({required = false, field, label, onChange}) => {
    return (
        <TextField
            required={required}
            name={field}
            label={label}
            variant="standard"
            onChange={onChange}
        />
    );
};

export default BasicTextInput;
