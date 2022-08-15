import React, {FC} from 'react';
import {Checkbox, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from "@mui/material";

export interface IAnswer {
    id: number,
    text: string,
}

interface AnswersProps {
    answers: IAnswer[],
    multipleChoice: boolean,
}

const Answers: FC<AnswersProps> = ({answers, multipleChoice}) => {

    const component = multipleChoice ? <Checkbox/> : <Radio/>;

    return (
        <FormControl sx={{ml: 5}}>
            {/*<FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>*/}
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
            >
                {answers.map(a => <FormControlLabel value={a.id} control={component} label={a.text}/>)}
            </RadioGroup>
        </FormControl>
    );
};

export default Answers;
