import "styles/components/input/InputContainer.scss"

const InputContainer = ({ children, error }) => (
    <div className={`input-container ${error ? "input-field-error" : ""}`}>
        {children}
        {error && <p className="input-error-message">{error}</p>}
    </div>
)

export default InputContainer;
