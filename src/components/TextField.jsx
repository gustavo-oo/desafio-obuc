import "../styles/components/TextField.scss"

import InputContainer from "./InputContainer"

const TextField = ({
    label,
    id = label,
    error = false,
    unit,
    value,
    onChange,
    onUnfocus,
    type = "text",
}) => {
    return (
        <InputContainer error={error}>
            <label htmlFor={id}>
                {label}
            </label>
            <div className="text-field">
                <span>{unit}</span>
                <input
                    type={type}
                    className={unit ? "text-field-unit" : ""}
                    id={id}
                    value={value}
                    onChange={onChange}
                    onBlur={onUnfocus}
                />
            </div>
        </InputContainer>
    )
}

export default TextField;
