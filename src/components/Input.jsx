import "../styles/components/Input.scss"

const TextField = ({
    required = false,
    label,
    id = label,
    error = false,
    unit,
    multiline = false,
    value,
    onChange,
    type = "text",
}) => {
    return (
        <div className="input-container">
            <label for={id} className="input-label">
                {label}
            </label>
            <div className="input-field" style={{ display: 'flex', alignItems: 'center'}}>
                <span>{unit}</span>
                <input
                    type={type}
                    className={`input-field ${error ? "input-field-error" : ""}`}
                    style={ unit && { paddingLeft: '40px' } }
                    id={id}
                    value={value}
                    onChange={onChange}
                />
            </div>
            {error && <p className="input-error-message">{error}</p>}
        </div>
    )
}

export default TextField;
