import {Grid,
        Paper,
        Avatar,
        TextField,
        Button} from '@mui/material'

const SignUp = () => {
    const PaperStyle = {padding: '30px 20px', width: 300, magrin: '20px auto', }
    const HeaderStyle = {display: 'flex', justifyContent: 'center'}
    const SignUpContainerStyle = {display: 'flex', justifyContent: 'center', alignItems: 'center', height: '700px'}
    const textField = {margin: '10px 0 0 0'}
    const ButtonStyle = {margin: '10px 0 0 0'}
    const FormStyle = {display: 'flex', justifyContent: 'center'}
    const AvatarStyle = {display: 'flex', justifyContent: 'center'}

    return (
        <Grid style={SignUpContainerStyle}>
            <Paper elevation={20} style={PaperStyle}>
                <Grid>
                    <div style={AvatarStyle}>
                        <Avatar/>
                    </div>
                    <h2 style={HeaderStyle}>Регистрация</h2>
                </Grid>
                <form>
                    <TextField style={textField} fullWidth label='Имя' placeholder='Введите ваше имя'/>
                    <TextField style={textField} fullWidth label='Фамилия' placeholder='Введите вашу фамилию'/>
                    <TextField style={textField} fullWidth label='Email' placeholder='Введите ваш Email'/>
                    <TextField style={textField} fullWidth label='Номер группы' placeholder='Введите номер вашей группы'/>
                    <TextField style={textField} fullWidth label='Факультет' placeholder='Введите свой факультет'/>
                    <TextField style={textField} fullWidth label='Пароль' placeholder='Придумайте пароль'/>
                    <TextField style={textField} fullWidth label='Подтвердите пароль' placeholder='Подтвердите пароль'/>
                    <div style={FormStyle}>
                        <Button style={ButtonStyle} type='submit' variant='contained' color='primary'>Зарегистрироваться</Button>
                    </div>
                </form>
            </Paper>
        </Grid>
    )
}

export default SignUp