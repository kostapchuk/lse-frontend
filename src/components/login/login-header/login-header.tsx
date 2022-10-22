import Box from "@mui/material/Box";
import {Avatar,Typography} from '@mui/material'
import { FC } from "react";
import {avatarStyle} from './login-header-styles'

const LoginHeader: FC = () => {
    return (
        <Box>
            <Avatar style={avatarStyle}/>
            <Typography textAlign='center' variant="h5">Авторизация</Typography>
        </Box>
    )
}

export default LoginHeader;