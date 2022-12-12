import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/pages/NewVacancy.scss"

import Button from "../components/Button";
import TextField from "../components/input/TextField";
import TextArea from "../components/input/TextArea";
import PageTemplate from "../components/PageTemplate";

import axios from "../config/axiosConfig";
import vacancyValidation from "../validations/vacancyValidation";
import VacancyPdfTemplate from "../components/VacancyPdfTemplate";
import DownloadButton from "../components/DownloadButton";
import Title from "../components/Title";


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
    const [waitingSubmit, setWaitingSubmit] = useState(false);

    const navigate = useNavigate();

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
            setWaitingSubmit(true);
            axios
                .post("/vacancies", vacancyData)
                .then(() => {
                    navigate(
                        `/vacancies`,
                        { state: { sucess: true } }
                    );
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }

    function loadLastVacancyData() {
        const findByJobTitle =`jobTitle=${vacancyData.jobTitle}`;
        const sortId = "_sort=id";
        const sortOrder = "_order=desc";
        const queryLimit = "_limit=1";

        axios
            .get(`/vacancies?${findByJobTitle}&${sortId}&${sortOrder}&${queryLimit}`)
            .then(({ data }) => {
                const {
                    salary,
                    activities,
                    requiredSkills,
                    requiredExperience,
                } = data[0];

                setVacancyData({
                    ...vacancyData,
                    salary,
                    activities,
                    requiredSkills,
                    requiredExperience
                });
            });
    }

    return (
        <PageTemplate childrenClassName="new-vacancy-container">
            <Title>Cadastro</Title>
            <div style={{ width: '40%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <TextField
                    label="Título do Cargo"
                    id="jobTitle"
                    error={errors["jobTitle"]}
                    value={vacancyData["jobTitle"]}
                    onChange={onChangeHandler}
                    onUnfocus={loadLastVacancyData}
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
                    id="requiredExperience"
                    error={errors["requiredExperience"]}
                    value={vacancyData["requiredExperience"]}
                    onChange={onChangeHandler}
                />
                <Button
                    label={"Salvar"}
                    className="save-button"
                    onClick={onSubmit}
                    disabled={waitingSubmit}
                />
            </div>
        </PageTemplate>
    )
}

export default NewVacancy;
