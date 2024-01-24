import { Screen } from '../../components/base/screen';
import { Header } from '../../components/common/header';
import { Title } from '../../components/common/title';

interface MapPageProps {}

export default function MapPage({}: MapPageProps) {
  return (
    <Screen>
      <Header>
        <Title>Térkép</Title>
      </Header>
    </Screen>
  );
}
