import "../styles/components/Card.scss";

const Card = ({ title, children, button }) => {
    return (
        <div className="card-container">
            <h2>{title}</h2>
            {children}
            {button}
        </div>
    )
}

export default Card;
