import { Header } from '../components/common/header';
import { Title } from '../components/common/title';

interface HomePageProps {}

export default function HomePage({}: HomePageProps) {
  return (
    <Header>
      <Title>Simonyi Konferencia</Title>
    </Header>
  );
}