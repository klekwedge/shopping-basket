import { useEffect } from 'react';
import { AppRoot, Group, Header, Panel, PanelHeader, SimpleCell, SplitCol, SplitLayout, View } from '@vkontakte/vkui';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { fetchProducts } from '../../slices/productsSlice';
import ProductCard from '../ProductCard/ProductCard';

function App() {
  const dispatch = useAppDispatch();
  const { products, productsLoadingStatus } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts('https://fakestoreapi.com/products'));
  }, []);

  if (productsLoadingStatus === 'loading') {
    return <p>Loading...</p>;
  }

  return (
    <AppRoot mode="embedded">
      <SplitLayout header={<PanelHeader delimiter="none" />}>
        <SplitCol autoSpaced>
          <View activePanel="main">
            <Panel id="main">
              <PanelHeader>VK Market</PanelHeader>
              <Group header={<Header mode="secondary">Товары</Header>}>
                <SimpleCell>
                  {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </SimpleCell>
              </Group>
            </Panel>
          </View>
        </SplitCol>
      </SplitLayout>
    </AppRoot>
  );
}

export default App;
