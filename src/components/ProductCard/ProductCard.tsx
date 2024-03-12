import { IProduct } from '../../types';

interface ProductCardProps {
  product: IProduct;
  onQuantityChange: () => void;
  onDelete: () => void;
}

function ProductCard({ product, onQuantityChange, onDelete }: ProductCardProps) {
  const { id, title, description, image, price } = product;

  const handleQuantityChange = () => {
    // onQuantityChange(id, newQuantity);
  };

  const handleDelete = () => {
    // onDelete(id);
  };

  return (
    <div className="product-card">
      <img src={image} alt={title} width="200px" />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <p>Price: ${price}</p>
        <div>
          {/* <button type="button" onClick={() => handleQuantityChange(quantity - 1)} disabled={quantity === 1}>
            -
          </button> */}
          {/* <span>{quantity}</span> */}
          {/* <button type="button" onClick={() => handleQuantityChange(quantity + 1)} disabled={quantity === 10}>
            +
          </button> */}
          <button type="button" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
