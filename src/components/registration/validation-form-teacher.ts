import { object, string } from 'zod';

export const registerSchemaTeacher = object({
    firstName: string()
    .min(1,'Укажите имя')
    .max(32, 'Имя должно содержать менее 32 символов'),
    lastName: string()
    .min(1,'Укажите фамилию')
    .max(32, 'Имя должно содержать менее 32 символов'),
    faculty: string()
    .min(1,'Укажите факультет')
    .max(32, 'Имя должно содержать менее 32 символов'),
    yearsOfExperience: string()
    .min(1,'Укажите стаж')
    .max(2, 'Имя должно содержать менее 2 символов'),
    email: string().min(1,'Укажите email').email('Электронная почта недействительна'),
    password: string()
    .min(1,'Требуется пароль')
    .min(6, 'Пароль должен быть не менее 6 символов')
    .max(32, 'Пароль должен быть меньше 32 символов'),
    passwordConfirm: string().min(1,'Подтвердите пароль'),
}).refine((data) => data.password === data.passwordConfirm, {
    path: ['passwordConfirm'],
    message: 'Пароли не совпадают',
});
