
import NewVacancy from "pages/NewVacancy";
import VacanciesList from "pages/VacanciesList";

const routes = [
    {
        path: "/new",
        element: <NewVacancy />,
    },
    {
        path: "/",
        element: <VacanciesList />,
    },
];

export default routes;
