import CircularProgress from '@mui/material/CircularProgress';

import "../styles/components/Button.scss"

const Button = ({ label, onClick, className, isLoading = false, disabled = false }) => {
    function renderButton() {
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

    function renderLoading() {
        return <CircularProgress color="inherit" />;
    }

    return isLoading ? renderLoading() : renderButton();
}

export default Button;
