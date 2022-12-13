import "../styles/components/Card.scss";

const Card = ({ title, children }) => {
    return (
        <div className="card-container">
            <h2>{title}</h2>
            {children}
        </div>
    )
}

export default Card;
