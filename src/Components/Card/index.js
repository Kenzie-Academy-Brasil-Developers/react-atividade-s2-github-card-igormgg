import "./styles.css";

const Card = ({ githubResult: { owner, name, description, message } }) => {
  return (
    <div className="card">
      {message === "Not Found" ? (
        <h1>Repositório não encontrado</h1>
      ) : (
        <div className="card__found">
          <img src={owner.avatar_url} alt={owner.login} />
          <div className="card__info">
            <h2>{name}</h2>
            <p> {description} </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
