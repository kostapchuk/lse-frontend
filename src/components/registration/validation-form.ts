import { object, string } from 'zod';

export const registerSchema = object({
    firstName: string()
    .min(1,'Укажите имя')
    .max(32, 'Имя должно содержать менее 32 символов'),
    lastName: string()
    .min(1,'Укажите фамилию')
    .max(32, 'Имя должно содержать менее 32 символов'),
    faculty: string()
    .min(1,'Укажите факультет')
    .max(32, 'Имя должно содержать менее 32 символов'),
    groupNumber: string()
    .min(1,'Укажите номер группы')
    .max(32, 'Имя должно содержать менее 32 символов'),
    course: string()
    .min(1,'Укажите номер курса')
    .max(2, 'Имя должно содержать менее 2 символов'),
    email: string().min(1,'Укажите email').email('Электронная почта недействительна'),
    password: string()
    .min(1,'Требуется пароль')
    .min(8, 'Пароль должен быть не менее 8 символов')
    .max(32, 'Пароль должен быть меньше 32 символов'),
    passwordConfirm: string().min(1,'Подтвердите пароль'),
}).refine((data) => data.password === data.passwordConfirm, {
    path: ['passwordConfirm'],
    message: 'Пароли не совпадают',
});