import React from "react";
import { useSelector } from "react-redux";
import { Card } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/MovieCard.css";

const MovieCard = (props) => {
  const movie = useSelector((state) =>
    state?.movies.movies?.find((entity) => entity?.id === props?.id)
  );
  const navigate = useNavigate();
  const location = useLocation();
  const handleClick = () => {
    navigate(
      `${location.pathname}/${movie?.title?.toLowerCase().replace(/ /g, "_")}`
    );
  };

  return (
    <div>
      <Card className="m-3 bg-dark text-white movie-card" onClick={handleClick}>
        <Card.Img
          className="movie-card-image"
          src={movie?.posterurl}
          alt="Card image"
        />
        <Card.ImgOverlay className="movie-card-overlay">
          <Card.Body className="movie-card-text">
            <Card.Title className="mt-5">
              {movie?.title?.toUpperCase()}
            </Card.Title>
          </Card.Body>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
};

export default MovieCard;
