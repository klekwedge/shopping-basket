import { useEffect } from 'react';
import {
  AppRoot,
  Div,
  Group,
  Header,
  Panel,
  PanelHeader,
  Spinner,
  SplitCol,
  SplitLayout,
  Title,
  View,
} from '@vkontakte/vkui';
import { Icon56LogoVkColor } from '@vkontakte/icons';
import Total from '../Total/Total';
import ProductList from '../ProductList/ProductList';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { fetchProducts } from '../../slices/productsSlice';

function App() {
  const dispatch = useAppDispatch();
  const { products, productsLoadingStatus } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <AppRoot mode="embedded">
      <View activePanel="main">
        <Panel id="main">
          <PanelHeader>
            <Div style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '20px' }}>
              <Icon56LogoVkColor width={50} />
              <Title level="1"> VK Маркет</Title>
            </Div>
          </PanelHeader>
          {productsLoadingStatus === 'idle' && (
            <Group header={<Header mode="secondary">Корзина товаров</Header>}>
              <Div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                <ProductList />
                <Div style={{ flex: '1 1 25%' }}>{products.length ? <Total /> : ''}</Div>
              </Div>
            </Group>
          )}
          {productsLoadingStatus === 'loading' && <Spinner size="large" />}
        </Panel>
      </View>
    </AppRoot>
  );
}

export default App;
