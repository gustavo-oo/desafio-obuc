
import NewVacancy from "./pages/NewVacancy";
import VacanciesList from "./pages/VacanciesList";

const routes = [
    {
        path: "/",
        element: <NewVacancy />,
    },
    {
        path: "/vacancies",
        element: <VacanciesList />,
    },
];

export default routes;
