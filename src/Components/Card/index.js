import "./styles.css";

const Card = ({ githubResult: { owner, name, description } }) => {
  return (
    <div className="card">
      {/* <img src={owner.avatar_url} alt={owner.login} /> */}
      <div className="card__info">
        <h2>{name}</h2>
        <p> {description} </p>
      </div>
    </div>
  );
};

export default Card;
