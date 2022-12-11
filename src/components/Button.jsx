import "../styles/components/Button.scss"


const Button = ({ label, color, onClick }) => {
    return (
        <button
            className="button"
            type="button"
            onClick={onClick}
            style={{ backgroundColor: color }}
        >
            {label}
        </button>
    )
}

export default Button;
