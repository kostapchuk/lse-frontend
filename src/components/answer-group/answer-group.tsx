import React, {FC} from 'react';
import {FormControl, FormGroup, RadioGroup} from "@mui/material";

interface AnswerGroupProps {
    // todo replace any type
    parentProps: any;
    multipleChoice: boolean;
    // todo replace any type
    children: any;
}

const AnswerGroup: FC<AnswerGroupProps> = ({parentProps, multipleChoice, children}) => {

    const parentComponent = () => {
        return multipleChoice ? <FormGroup {...parentProps}>{children}</FormGroup> :
            <RadioGroup {...parentProps}>{children}</RadioGroup>
    }

    const styles = {
        sx: {ml: 5}
    }

    return (
        <FormControl {...styles}>
            {parentComponent()}
        </FormControl>
    );
};

export default AnswerGroup;
