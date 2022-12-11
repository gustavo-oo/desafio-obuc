import { useState } from "react";

import "../styles/pages/NewVacancy.scss"

import Button from "../components/Button";
import TextField from "../components/TextField";
import TextArea from "../components/TextArea";

import vacancyValidation from "../validations/vacancyValidation";

const NewVacancy = () => {
    const [vacancyData, setVacancyData] = useState({
        jobTitle: "",
        salary: "",
        activities: "",
        benefits: "",
        processSteps: "",
        requiredSkills: "",
        requiredExperience: "",
    });

    const [errors, setErrors] = useState({});

    function onChangeHandler(event) {
        const field = event.target.id;
        const data = event.target.value;

        setVacancyData({
            ...vacancyData,
            [field]: data,
        })
    }

    function onSubmit() {
        const { errors, hasErrors } = vacancyValidation(vacancyData);
        setErrors(errors);

        if (!hasErrors) {
            console.log("submit");
        }
    }

    return (
        <div className="new-vacancy-container">
            <h1 className="register-title">Cadastro</h1>
            <div style={{ width: '40%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <TextField
                    label="Título do Cargo"
                    id="jobTitle"
                    error={errors["jobTitle"]}
                    value={vacancyData["jobTitle"]}
                    onChange={onChangeHandler}
                />
                <TextField
                    label="Salário"
                    id="salary"
                    error={errors["salary"]}
                    value={vacancyData["salary"]}
                    onChange={onChangeHandler}
                    unit="R$"
                    type="number"
                />
                <TextArea
                    label="Atividades do Cargo"
                    id="activities"
                    error={errors["activities"]}
                    value={vacancyData["activities"]}
                    onChange={onChangeHandler}
                />
                <TextArea
                    label="Benefícios do Cargo"
                    id="benefits"
                    error={errors["benefits"]}
                    value={vacancyData["benefits"]}
                    onChange={onChangeHandler}
                />
                <TextArea
                    label="Etapas do Processo"
                    id="processSteps"
                    error={errors["processSteps"]}
                    value={vacancyData["processSteps"]}
                    onChange={onChangeHandler}
                />
                <TextArea
                    label="Habilidades Necessárias"
                    id="requiredSkills"
                    error={errors["requiredSkills"]}
                    value={vacancyData["requiredSkills"]}
                    onChange={onChangeHandler}
                />
                <TextArea
                    label="Experiência Necessária"
                    id="requiredSkills"
                    error={errors["requiredSkills"]}
                    value={vacancyData["requiredSkills"]}
                    onChange={onChangeHandler}
                />
                <Button label={"Salvar"} className="save-button" onClick={onSubmit}/>
            </div>
        </div>
    )
}

export default NewVacancy;
