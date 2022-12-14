import useNumberToCurrency from "hooks/useNumberToCurrency";

const vacancyFields = [
    { title: "Atividades do Cargo", prop: "activities" },
    { title: "Habilidades Necessárias", prop: "requiredSkills" },
    { title: "Experiência Necessária", prop: "requiredExperience" },
    { title: "Etapas do Processo Seletivo", prop: "processSteps" },
    { title: "Benefícios", prop: "benefits" },
    { title: "Salário", prop: "salary", formatter: useNumberToCurrency},
];

export default vacancyFields;
