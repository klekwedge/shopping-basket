import { useAppDispatch } from '../../hooks/useRedux';
import { removeFromCart, updateQuantity } from '../../slices/productsSlice';
import { IProduct } from '../../types';

interface ProductCardProps {
  product: IProduct;
}

function ProductCard({ product }: ProductCardProps) {
  const dispatch = useAppDispatch();
  const { id, title, thumbnail, price, quantity } = product;

  const handleQuantityChange = (newQuantity: number) => {
    dispatch(updateQuantity({ id, quantity: newQuantity }));
  };

  const handleDelete = () => {
    dispatch(removeFromCart(id));
  }

  return (
    <div className="product-card">
      <img src={thumbnail} alt={title} width="200px" />
      <div>
        <h3>{title}</h3>
        <p>Price: ${price}</p>
        <div>
          <button type="button" onClick={() => handleQuantityChange(quantity - 1)} disabled={quantity === 1}>
            -
          </button>
          <span>{quantity}</span>
          <button type="button" onClick={() => handleQuantityChange(quantity + 1)} disabled={quantity === 10}>
            +
          </button>
          <button type="button" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
