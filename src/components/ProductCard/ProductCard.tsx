import { Button, ButtonGroup, Card, Div, Footnote, Group, Header, SimpleCell, Title } from '@vkontakte/vkui';
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
  };

  return (
    <Card style={{ display: 'flex', marginBottom: '40px' }}>
      <img src={thumbnail} alt={title} width="200px" height='200px' />
      <Div>
        <Title level="2">{title}</Title>
        <Footnote>Цена: ${price}</Footnote>

        <ButtonGroup style={{ marginTop: '15px' }}>
          <Button type="button" onClick={() => handleQuantityChange(quantity - 1)} disabled={quantity === 1}>
            -
          </Button>
          <span>{quantity}</span>
          <Button type="button" onClick={() => handleQuantityChange(quantity + 1)} disabled={quantity === 10}>
            +
          </Button>
          <Button type="button" onClick={handleDelete}>
            Delete
          </Button>
        </ButtonGroup>
      </Div>
    </Card>
  );
}

export default ProductCard;
