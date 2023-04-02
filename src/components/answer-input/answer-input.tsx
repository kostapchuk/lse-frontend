import { Box, Radio, TextField } from "@mui/material";
import React, { FC } from "react";
import './answer-input-styles.css'


const AnswerInput:FC = () => {
    const [selectedValue, setSelectedValue] = React.useState('a');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(event.target.value);
      };
      
    return (
            <Box style={{display: 'flex', marginBottom: '20px'}}>
                        <Radio
    checked={selectedValue === ''}
    onChange={handleChange}
    value={handleChange}
    name="radio-buttons"
    inputProps={{ 'aria-label': 'C' }}
    />
  <TextField className="answer-input" placeholder="Введите ответ" />
            </Box>
)
};

export default AnswerInput