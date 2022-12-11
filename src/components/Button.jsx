import "../styles/components/Button.scss"


const Button = ({ label, color, onClick, className }) => {
    return (
        <button
            className={`button ${className}`}
            type="button"
            onClick={onClick}
            style={{ backgroundColor: color }}
        >
            {label}
        </button>
    )
}

export default Button;
