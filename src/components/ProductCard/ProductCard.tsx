import { Button, ButtonGroup, Card, Div, Footnote, Headline, IconButton, Paragraph, Title } from '@vkontakte/vkui';
import { Icon24Delete } from '@vkontakte/icons';
import { useAppDispatch } from '../../hooks/useRedux';
import { removeFromCart, updateQuantity } from '../../slices/productsSlice';
import { IProduct } from '../../types';

interface ProductCardProps {
  product: IProduct;
}

function ProductCard({ product }: ProductCardProps) {
  const dispatch = useAppDispatch();
  const { id, title, thumbnail, price, quantity, description } = product;

  const handleQuantityChange = (newQuantity: number) => {
    dispatch(updateQuantity({ id, quantity: newQuantity }));
  };

  const handleDelete = () => {
    dispatch(removeFromCart(id));
  };

  return (
    <Card style={{ display: 'flex', marginBottom: '40px' }}>
      <Div>
        <img src={thumbnail} alt={title} width="200px" height="200px" style={{ borderRadius: '5px' }} />
      </Div>
      <Div>
        <Title level="2" style={{ marginBottom: '5px', fontWeight: '700' }}>
          {title}
        </Title>
        <Paragraph>{description}</Paragraph>
        <Headline style={{ marginTop: '15px', fontWeight: '500', fontSize: '17px' }}>
          Цена: {price * quantity} руб. ({price} руб. / шт.)
        </Headline>
        <ButtonGroup style={{ marginTop: '15px', display: 'flex', alignItems: 'center' }}>
          <Button type="button" onClick={() => handleQuantityChange(quantity - 1)} disabled={quantity === 1}>
            -
          </Button>
          <span>{quantity}</span>
          <Button type="button" onClick={() => handleQuantityChange(quantity + 1)} disabled={quantity === 10}>
            +
          </Button>
          <IconButton label="Удалить" onClick={handleDelete}>
            <Icon24Delete width={25} height={25} />
          </IconButton>
        </ButtonGroup>
      </Div>
    </Card>
  );
}

export default ProductCard;
