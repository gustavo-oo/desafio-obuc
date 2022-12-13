import numberToCurrency from "helpers/numberToCurrency";

const vacancyFields = [
    { title: "Atividades do Cargo", prop: "activities" },
    { title: "Habilidades Necessárias", prop: "requiredSkills" },
    { title: "Experiência Necessária", prop: "requiredExperience" },
    { title: "Etapas do Processo Seletivo", prop: "processSteps" },
    { title: "Benefícios", prop: "benefits" },
    { title: "Salário", prop: "salary", formatter: numberToCurrency},
];

export default vacancyFields;
