import { useEffect } from 'react';
import {
  AppRoot,
  Div,
  Group,
  Header,
  List,
  Panel,
  PanelHeader,
  SimpleCell,
  SplitCol,
  SplitLayout,
  View,
} from '@vkontakte/vkui';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { fetchProducts } from '../../slices/productsSlice';
import ProductCard from '../ProductCard/ProductCard';
import Total from '../Total/Total';

function App() {
  const dispatch = useAppDispatch();
  const { products, productsLoadingStatus } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts('https://dummyjson.com/carts/1'));
  }, []);

  if (productsLoadingStatus === 'loading') {
    return <p>Loading...</p>;
  }

  console.log(products);

  return (
    <AppRoot mode="embedded">
      <SplitLayout header={<PanelHeader delimiter="none" />}>
        <SplitCol autoSpaced>
          <View activePanel="main">
            <Panel id="main">
              <PanelHeader>VK Market</PanelHeader>
              <Group header={<Header mode="secondary">Товары</Header>}>
                <Div style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <Div style={{ flex: '1 1 60%' }}>
                    {products.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </Div>
                  <Div style={{ flex: '1 1 30%' }}>
                    <Total />
                  </Div>
                </Div>
              </Group>
            </Panel>
          </View>
        </SplitCol>
      </SplitLayout>
    </AppRoot>
  );
}

export default App;
