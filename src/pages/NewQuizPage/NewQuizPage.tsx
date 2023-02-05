import React, {FC, useState} from 'react';
import {createTheme, ThemeProvider} from "@mui/material/styles";
import Box from "@mui/material/Box";
import {Button, Container, Grid, Input, Radio, RadioGroup, TextField, Typography} from "@mui/material";
import {useCreateQuizMutation} from "../../redux/slices/quizzesApiSlice";
import {RouteNames} from "../../routes";
import {useNavigate} from "react-router-dom";

const NewQuizPage: FC = () => {

    const mdTheme = createTheme();
    const [createQuiz] = useCreateQuizMutation();
    const [selectedValue, setSelectedValue] = React.useState('a');
    const navigate = useNavigate();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(event.target.value);
      };

    const QuestionInput:FC = () => {
        return (
            <Grid>
                <Box>
                    <Typography>Вопрос</Typography>
                    <TextField style={{marginLeft: '43px', marginBottom: '20px', marginTop: '10px'}} placeholder="Your input here" />
                </Box>
                <Box style={{marginBottom: '25px'}}>
                <Typography style={{marginBottom: '10px'}}>Варианты ответа</Typography>
                <Radio
        checked={selectedValue === 'a'}
        onChange={handleChange}
        value="a"
        name="radio-buttons"
        inputProps={{ 'aria-label': 'A' }}
      />
      <TextField placeholder="Your input here" />
            <Radio
        checked={selectedValue === 'b'}
        onChange={handleChange}
        value="b"
        name="radio-buttons"
        inputProps={{ 'aria-label': 'B' }}
        />
      <TextField placeholder="Your input here" />
      <AnswerForm/>
                </Box>
            </Grid>
    )
    };

    const AnswerInput:FC = () => {
        return (
                <Box style={{display: 'flex'}}>
                            <Radio
        checked={selectedValue === 'c'}
        onChange={handleChange}
        value="b"
        name="radio-buttons"
        inputProps={{ 'aria-label': 'C' }}
        />
      <TextField placeholder="Your input here" />
                </Box>
    )
    };

      const QuestionForm = () => {
        const [inputList, setInputList] = useState<any>([]);
      
        const onAddBtnClick = (e:any) => {
          setInputList(inputList.concat(<QuestionInput key={inputList.length}/>));
        };
        return (
            <Box style={{marginLeft: '38px', marginBottom: '25px'}}>
              {inputList}
              <Button onClick={onAddBtnClick}>Add Question</Button>
            </Box>
          );
    }

    const AnswerForm = () => {
        const [inputList, setInputList] = useState<any>([]);
      
        const onAddBtnClick = (e:any) => {
          setInputList(inputList.concat(<AnswerInput key={inputList.length}/>));
        };
        return (
            <Box style={{marginLeft: '38px', marginBottom: '25px', display:'flex'}}>
              {inputList}
              <Button onClick={onAddBtnClick}>Add Answer</Button>
            </Box>
          );
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        createQuiz({
                "quizName": "Основы энергосбережения. Тест N.",
                "quizItems": [
                    {
                        "question": {
                            "text": "Энергия это:",
                            "multipleChoice": false,
                            "cost": 1
                        },
                        "answers": [
                            {
                                "text": "направленное движение электронов",
                                "correct": true
                            },
                            {
                                "text": "мера скорости вращения молекул вещества"
                            },
                            {
                                "text": "мера беспорядка в системе"
                            },
                            {
                                "text": "количественная оценка различных форм движения материи"
                            },
                            {
                                "text": "способность тела или системы тел совершать работу"
                            }
                        ]
                    },
                    {
                        "question": {
                            "text": "К традиционно используемым видам энергии относятся:",
                            "multipleChoice": true,
                            "cost": 7
                        },
                        "answers": [
                            {
                                "text": "ветровая",
                                "correct": true
                            },
                            {
                                "text": "биоэнергия"
                            },
                            {
                                "text": "газ"
                            },
                            {
                                "text": "нефть"
                            },
                            {
                                "text": "солнечная",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "question": {
                            "text": "Энергосбережение это:",
                            "multipleChoice": true,
                            "cost": 3
                        },
                        "answers": [
                            {
                                "text": "поиск новых первичных источников энергии"
                            },
                            {
                                "text": "перевод техники на универсальный вид энергии"
                            },
                            {
                                "text": "отказ от использования энергии",
                                "correct": true
                            },
                            {
                                "text": "разносторонняя деятельность, направленная на сбережение энергии при использовании топлива"
                            },
                            {
                                "text": "комплекс мер, направленных на эффективное использование энергии",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "question": {
                            "text": "Основными принципами энергетической безопасности являются:",
                            "multipleChoice": false,
                            "cost": 2
                        },
                        "answers": [
                            {
                                "text": "наличие энергоресурсов или запасов энергетического сырья"
                            },
                            {
                                "text": "резервы электрических и тепловых мощностей"
                            },
                            {
                                "text": "надежность энергетического оборудования"
                            },
                            {
                                "text": "подконтрольность энергосистемы страны государству"
                            },
                            {
                                "text": "закупки энергоресурсов не должны осуществляться в одной стране"
                            },
                            {
                                "text": "все перечисленное",
                                "correct": true
                            }
                        ]
                    },
                    {
                        "question": {
                            "text": "Вторичные энергетические ресурсы это:",
                            "multipleChoice": false,
                            "cost": 2
                        },
                        "answers": [
                            {
                                "text": "материальные объекты, в которых сосредоточена энергия, пригодная для практического использования человеком"
                            },
                            {
                                "text": "энергия, получаемая в ходе любого технологического процесса в результате недоиспользования первичной энергии в виде побочного продукта основного производства и не применяемая в этом энергетическом"
                            },
                            {
                                "text": "совокупность всех природных и преобразованных видов топлива и энергии, используемых в республике"
                            },
                            {
                                "text": "ресурсы естественно образовавшиеся в результате геологического развития Земли"
                            },
                            {
                                "text": "ресурсы, восстанавливаемые природой (земля, растения, животные и т.д.)"
                            },
                            {
                                "text": "все перечисленное",
                                "correct": true
                            }
                        ]
                    }
                ],
                "maxScore": "15"
            }
        ).then((res) => {
            navigate(RouteNames.STUDY)
        })
    }

    return (
        <ThemeProvider theme={mdTheme}>
            <Box sx={{display: 'flex'}}>
                <Container maxWidth="lg" sx={{mt: 4, mb: 4}}>
                    <QuestionForm/>
                    <Grid style={{marginLeft: '40px'}} container spacing={3} sx={{mb: 3, width: '100%', maxWidth: '100%'}}>
                        <Button onClick={handleSubmit}
                                style={{backgroundColor: '#1976d2'}}
                                sx={{my: 2, color: 'white', display: 'block'}}>
                            Создать шаблонный тест
                        </Button>
                    </Grid>
                </Container>
            </Box>
        </ThemeProvider>
    );
}

export default NewQuizPage;
