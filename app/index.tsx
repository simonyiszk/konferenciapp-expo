import { Header } from '../components/common/header';
import { Subtitle } from '../components/common/subtitle';
import { Title } from '../components/common/title';

interface HomePageProps {}

export default function HomePage({}: HomePageProps) {
  return (
    <Header>
      <Title>Hello there!</Title>
      <Subtitle>General Kenobi!</Subtitle>
    </Header>
  );
}
