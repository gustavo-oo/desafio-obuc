import "../styles/components/Button.scss"


const Button = ({ label, onClick, className, disabled = false }) => {
    return (
        <button
            className={`button ${className}`}
            type="button"
            onClick={onClick}
            disabled={disabled}
        >
            {label}
        </button>
    )
}

export default Button;
