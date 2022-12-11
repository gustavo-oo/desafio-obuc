import "../styles/components/Button.scss"


const Button = ({ label, color, onClick, className, disabled = false }) => {
    return (
        <button
            className={`button ${className}`}
            type="button"
            onClick={onClick}
            style={{ backgroundColor: color }}
            disabled={disabled}
        >
            {label}
        </button>
    )
}

export default Button;
