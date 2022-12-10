
import NewVacancy from "./pages/NewVacancy";
import ListVacancies from "./pages/ListVacancies";

const routes = [
    {
        path: "/",
        element: <NewVacancy />,
    },
    {
        path: "/vacancies",
        element: <ListVacancies />,
    },
];

export default routes;
