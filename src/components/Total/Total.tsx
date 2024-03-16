import { Div, Paragraph } from '@vkontakte/vkui';
import { useAppSelector } from '../../hooks/useRedux';

function Total() {
  const { products } = useAppSelector((state) => state.products);
  const total = products.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <Div>
      <Paragraph>Итого: {total} руб.</Paragraph>
    </Div>
  );
}

export default Total;
