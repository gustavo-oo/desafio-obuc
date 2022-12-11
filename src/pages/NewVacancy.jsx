import { useState } from "react";
import Button from "../components/Button";

import Input from "../components/Input";

import "../styles/pages/NewVacancy.scss"

import vacancyValidation from "../validations/vacancyValidation";

const NewVacancy = () => {
    const [vacancyData, setVacancyData] = useState({
        jobTitle: "",
        salary: "",
        activities: "",
        benefits: "",
        processSteps: "",
        skillsRequired: "",
        experienceRequired: "",
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
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '30px' }}>
            <h1 className="register-title">Cadastro</h1>
            <div style={{ width: '40%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Input
                    label="Título do Cargo"
                    id="jobTitle"
                    error={errors["jobTitle"]}
                    value={vacancyData["jobTitle"]}
                    onChange={onChangeHandler}
                />
                <Input
                    label="Salário"
                    id="salary"
                    error={errors["salary"]}
                    value={vacancyData["salary"]}
                    onChange={onChangeHandler}
                    unit="R$"
                    type="number"
                />
                <Button label={"Salvar"} onClick={onSubmit}/>
            </div>
        </div>
    )
}

export default NewVacancy;
