export default function vacancyValidation(vacancy) {
    let errors = {};

    errors = validateEmptyFields(errors, vacancy);
    errors = validateSalary(errors, vacancy);

    return {
        errors,
        hasErrors: Object.keys(errors).length > 0,
    };
}

function validateEmptyFields(errors, vacancy) {
    Object.keys(vacancy).forEach(field => {
        if (vacancy[field].trim().length === 0) {
            errors[field] = "Esse campo deve ser preenchido"
        }
    })

    return errors;
}

function validateSalary(errors, vacancy) {
    const intSalary = parseInt(vacancy.salary, 10);

    if (intSalary <= 0) {
        errors["salary"] = "Salário deve ser maior que R$ 0"
    }

    return errors;
}
