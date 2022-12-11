export default function vacancyValidation(vacancy) {
    const errors = {};

    if (vacancy.jobTitle.trim().length === 0) {
        errors.jobTitle = "Título do Cargo não pode ser vazio"
    }

    return {
        errors,
        hasErrors: Object.keys(errors).length > 0,
    };
}
