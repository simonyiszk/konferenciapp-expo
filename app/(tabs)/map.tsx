import { ReactNativeZoomableViewWithGestures } from '@openspacelabs/react-native-zoomable-view';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Screen } from '../../components/base/screen';
import { Header } from '../../components/common/header';
import { Title } from '../../components/common/title';
import { Map } from '../../components/map/map';
import { ResourceSheet } from '../../components/map/resource-sheet';
import { MapResources } from '../../content/map-resources.content';
import { MapResource } from '../../types/map.type';

export default function MapPage() {
  const { t } = useTranslation();
  const [selectedResource, setSelectedResource] = useState<MapResource>();

  const onSelectedResource = (id: string) => {
    const res = MapResources.find((r) => r.id === id);
    setSelectedResource(res);
  };

  return (
    <Screen analyticsScreenName='map'>
      <Header>
        <Title>{t('tabbar.map')}</Title>
      </Header>
      <ReactNativeZoomableViewWithGestures
        panBoundaryPadding={200}
        initialZoom={0.5}
        maxZoom={2}
        contentHeight={1332}
        contentWidth={846}
      >
        <Map selectedResource={selectedResource?.id} onSelectedResource={onSelectedResource} />
      </ReactNativeZoomableViewWithGestures>
      <ResourceSheet resource={selectedResource} />
    </Screen>
  );
}
