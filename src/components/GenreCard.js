import { Card } from "react-bootstrap";
import { useNavigate } from "react-router";
import "../styles/GenreCard.css";

const GenreCard = (props) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/genres/${props?.source.toLowerCase()}`);
  };
  return (
    <div>
      <div className="genre-card-parent">
        <Card
          className="m-3 bg-dark text-white genre-card"
          onClick={handleClick}
        >
          <div className="genre-card-image-parent">
            <Card.Img
              className="genre-card-image"
              src={
                require(`../images/genreImages/${props?.source.toLowerCase()}.jpg`)
                  .default
              }
              alt="Card image"
            />
          </div>
          <Card.ImgOverlay>
            <Card.Body>
              <Card.Title className="mt-5" className="genre-card-title">
                {props?.source.toUpperCase()}
              </Card.Title>
            </Card.Body>
          </Card.ImgOverlay>
        </Card>
      </div>
    </div>
  );
};

export default GenreCard;
