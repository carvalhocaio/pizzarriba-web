import "./Dish.css";

const Dish = ({ name, description, image, price }) => {
  return (
    <div className="dish">
      <div className="image-container">
        <img src={image} alt={description} />
      </div>

      <div className="content">
        <p className="dish-name">
          <strong>{name}</strong>
        </p>
        <p className="dish-description">{description}</p>
        <p className="dish-price">
          US$ <strong>{price}</strong>
        </p>
      </div>
    </div>
  );
};

export default Dish;
