import PropTypes from 'prop-types';

const Card = ({ product }) => {
  // Check if product is null 
  if (!product) {
    return <div>No product data available</div>;
  }

  if (!product.image || !product.title || !product.price || !product.link) {
    return <div>Incomplete product data</div>;
  }

  return (
    // make it looks good plz
    <div className="card">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>Price: {product.price}</p>
      <a href={product.link} target="_blank" rel="noopener noreferrer">View Product</a>
    </div>
  );
};

// now working without this 
Card.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;

