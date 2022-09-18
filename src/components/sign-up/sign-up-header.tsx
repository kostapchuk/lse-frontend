import Box from "@mui/material/Box";
import {Avatar,Typography} from '@mui/material'
import { FC } from "react";
import {avatarStyle} from './sign-up-header-styles'

const SignUpHeader: FC = () => {
    return (
        <Box>
            <Avatar style={avatarStyle}/>
            <Typography textAlign='center' variant="h5">Регистрация</Typography>
        </Box>
    )
}

export default SignUpHeader;