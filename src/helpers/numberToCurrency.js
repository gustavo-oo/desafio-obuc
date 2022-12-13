export default function numberToCurrency(number) {
    const floatSalary = parseFloat(number).toFixed(2);
    const numberFormatted = floatSalary.replace(".", ",")
    return `R$ ${numberFormatted}`;
}
