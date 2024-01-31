import { Screen } from '../../../components/base/screen';
import { Header } from '../../../components/common/header';
import { Title } from '../../../components/common/title';
import { PresentationList } from '../../../components/schedule/presentation-list';
import { useConference } from '../../../hooks/use-conference';

interface PresentationListPageProps {}

export default function PresentationListPage({}: PresentationListPageProps) {
  const { data } = useConference();
  return (
    <Screen>
      <Header>
        <Title>Programterv</Title>
      </Header>
      <PresentationList presentations={data?.presentations ?? []} />
    </Screen>
  );
}
