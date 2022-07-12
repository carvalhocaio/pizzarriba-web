const Dish = ({ name, description, image, price }) => {
  return (
    <div>
      <div>
        <img src={image} alt={description} />
      </div>

      <p>
        <strong>{name}</strong>
      </p>
      <p>{description}</p>
      <p>
        US$ <strong>{price}</strong>
      </p>
    </div>
  );
};

export default Dish;
