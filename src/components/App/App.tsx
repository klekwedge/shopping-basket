import { useEffect } from 'react';
import { AppRoot, Group, Header, Panel, PanelHeader, SimpleCell, SplitCol, SplitLayout, View } from '@vkontakte/vkui';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { fetchCards } from '../../slices/cardsSlice';

function App() {
  const dispatch = useAppDispatch();
  const { cards, cardsLoadingStatus } = useAppSelector((state) => state.cards);

  useEffect(() => {
    dispatch(fetchCards('https://fakestoreapi.com/products'));
  }, []);

  if (cardsLoadingStatus === 'loading') {
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
                {' '}
                <SimpleCell>Hello</SimpleCell>
              </Group>
            </Panel>
          </View>
        </SplitCol>
      </SplitLayout>
    </AppRoot>
  );
}

export default App;
