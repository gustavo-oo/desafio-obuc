import CircularProgress from '@mui/material/CircularProgress';

import "styles/components/Button.scss"

const Button = ({ label, id, onClick, className, isLoading = false, disabled = false }) => {
    function renderButton() {
        return (
            <button
                className={`button ${className}`}
                type="button"
                onClick={onClick}
                disabled={disabled}
                id={id}
            >
                {label}
            </button>
        )
    }

    function renderLoading() {
        return (
            <div className="loading-container">
                <CircularProgress />
            </div>
        )
    }

    return isLoading ? renderLoading() : renderButton();
}

export default Button;
