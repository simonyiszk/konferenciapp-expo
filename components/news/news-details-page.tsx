import { Screen } from '../base/screen';
import { StyledText } from '../base/text';
import { Header } from '../common/header';
import { Title } from '../common/title';
import {useNewsItem} from "../../hooks/use-news-item";

interface NewsDetailsPageProps {
  id: string;
}

export function NewsDetailsPage({ id }: NewsDetailsPageProps) {
  const { data } = useNewsItem(id);
  if (!data) return <></>;
  return (
    <Screen>
      <Header>
        <Title>{data?.title}</Title>
      </Header>
      <StyledText className='mx-5 text-xl'>{data?.description}</StyledText>
    </Screen>
  );
}
