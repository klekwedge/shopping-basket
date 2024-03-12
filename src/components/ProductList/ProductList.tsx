import { Div, Title } from '@vkontakte/vkui';
import { useAppSelector } from '../../hooks/useRedux';

import ProductCard from '../ProductCard/ProductCard';

function ProductList() {
  const { products } = useAppSelector((state) => state.products);

  return (
    <Div style={{ flex: '1 1 60%' }}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}

      {!products.length && <Title level="2">Ваша корзина пуста</Title>}
    </Div>
  );
}

export default ProductList;
