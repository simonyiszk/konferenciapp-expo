import { ReactNativeZoomableViewWithGestures } from '@openspacelabs/react-native-zoomable-view';

import { Screen } from '../../components/base/screen';
import { Header } from '../../components/common/header';
import { Title } from '../../components/common/title';
import { Map } from '../../components/map/map';

interface MapPageProps {}

export default function MapPage({}: MapPageProps) {
  return (
    <Screen>
      <Header>
        <Title>Térkép</Title>
      </Header>
      <ReactNativeZoomableViewWithGestures>
        <Map />
      </ReactNativeZoomableViewWithGestures>
    </Screen>
  );
}
