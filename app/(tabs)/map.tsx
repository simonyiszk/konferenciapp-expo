import { ReactNativeZoomableViewWithGestures } from '@openspacelabs/react-native-zoomable-view';
import { useState } from 'react';

import { Screen } from '../../components/base/screen';
import { Header } from '../../components/common/header';
import { Title } from '../../components/common/title';
import { Map } from '../../components/map/map';
import { ResourceSheet } from '../../components/map/resource-sheet';
import { MapResource } from '../../types/map.type';

const resources: MapResource[] = [
  {
    id: 'T1',
    title: 'Resource 1',
    description: 'Resource 1 description',
  },
];

export default function MapPage() {
  const [selectedResource, setSelectedResource] = useState<MapResource>();

  const onSelectedResource = (id: string) => {
    const res = resources.find((r) => r.id === id);
    setSelectedResource(res);
  };

  return (
    <Screen>
      <Header>
        <Title>Térkép</Title>
      </Header>
      <ReactNativeZoomableViewWithGestures initialZoom={0.5} maxZoom={2} contentHeight={1332} contentWidth={846}>
        <Map onSelectedResource={onSelectedResource} />
      </ReactNativeZoomableViewWithGestures>
      <ResourceSheet resource={selectedResource} />
    </Screen>
  );
}
