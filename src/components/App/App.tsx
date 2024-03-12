import { useEffect } from 'react';
import { AppRoot, Div, Group, Header, Panel, PanelHeader, Spinner, SplitCol, SplitLayout, View } from '@vkontakte/vkui';
import Total from '../Total/Total';
import ProductList from '../ProductList/ProductList';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { fetchProducts } from '../../slices/productsSlice';

function App() {
  const dispatch = useAppDispatch();
  const { products, productsLoadingStatus } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts('https://dummyjson.com/carts/1'));
  }, []);

  return (
    <AppRoot mode="embedded">
      <SplitLayout>
        <SplitCol autoSpaced>
          <View activePanel="main">
            <Panel id="main">
              <PanelHeader>VK Market</PanelHeader>
              {productsLoadingStatus === 'idle' && (
                <Group header={<Header mode="secondary">Корзина</Header>}>
                  <Div style={{ display: 'flex', alignItems: 'flex-start' }}>
                    <ProductList />
                    <Div style={{ flex: '1 1 30%' }}>{products.length ? <Total /> : ''}</Div>
                  </Div>
                </Group>
              )}

              {productsLoadingStatus === 'loading' && <Spinner size="large" />}
            </Panel>
          </View>
        </SplitCol>
      </SplitLayout>
    </AppRoot>
  );
}

export default App;
