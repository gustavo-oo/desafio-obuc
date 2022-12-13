function useNumberToCurrency(number) {
    const floatSalary = parseFloat(number).toFixed(2);
    const numberFormatted = floatSalary.replace(".", ",")
    return `R$ ${numberFormatted}`;
}

export default useNumberToCurrency;
