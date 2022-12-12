import { useEffect, useState } from "react";

import Card from "../components/Card";
import PageTemplate from "../components/PageTemplate";
import Title from "../components/Title";
import DownloadButton from "../components/DownloadButton";
import VacancyPdfTemplate from "../components/VacancyPdfTemplate";

import axios from "../config/axiosConfig";
import vacancyFields from "../enums/vacancyFields";

import "../styles/pages/VacanciesList.scss";

function getVacancyDescription(vacancy) {
    return vacancyFields.map(({ title, prop }) => (
        <div key={prop} className="vacancy-field">
            <p>{title}:</p>
            <p>{prop === "salary" ? "R$" : ""} {vacancy[prop]}</p>
        </div>
    ))
}

const VacanciesList = () => {
    const [vacancies, setVacancies] = useState([]);

    useEffect(() => {
        const sortId = "_sort=id";
        const sortOrder = "_order=desc";
        axios
            .get(`/vacancies?${sortId}&${sortOrder}`)
            .then(({ data }) => {
                setVacancies(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    function renderVacancies() {
        return vacancies.map((vacancy, index) => (
            <Card
                key={`${vacancy.jobTitle}-${index}`}
                title={vacancy.jobTitle}
                button={
                    <DownloadButton
                        docComponent={<VacancyPdfTemplate vacancy={vacancy} />}
                        fileName={`${vacancy.jobTitle}.pdf`}
                        label={"Exportar"}
                        className="save-button"
                    />
                }
            >
                {getVacancyDescription(vacancy)}
            </Card>
        ));
    }

    return (
        <PageTemplate childrenClassName="vacancies-list-page">
            <Title>Vagas Abertas</Title>
            <div className="vacancies-list-container">
                <div className="vacancies-list">
                    {renderVacancies()}
                </div>
            </div>
        </PageTemplate>
    )
}

export default VacanciesList;
