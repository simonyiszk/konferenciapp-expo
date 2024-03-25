import { render, userEvent } from '@testing-library/react-native';

import { FavoriteButton } from '../../../../components/schedule/elements/favorite-button';
import { useFavoritePresentations } from '../../../../contexts/favorite-presentations.context';
import { PresentationDto } from '../../../../types/conference-api.type';

jest.mock('../../../../contexts/favorite-presentations.context', () => ({
  useFavoritePresentations: jest.fn().mockReturnValue({
    isFavoritePresentation: jest.fn().mockReturnValue(true),
    addFavoritePresentation: jest.fn().mockImplementation(() => {}),
    removeFavoritePresentation: jest.fn().mockImplementation(() => {}),
  }),
}));

const user = userEvent.setup();
jest.useFakeTimers();

const PresentationMock: PresentationDto = {
  description: 'presentation description',
  endTime: new Date().toISOString(),
  language: 'en',
  presenter: {
    name: 'presenter name',
    rank: 'presenter rank',
    pictureUrl: 'example.com/picture.jpg',
  },
  questionsUrl: 'example.com/questions',
  room: 'room',
  startTime: new Date().toISOString(),
  title: 'presentation title',
  slug: 'presentation-slug',
};

beforeEach(() => {
  jest.clearAllMocks();
});

it('should add presentation to favorites if it is not favorite', async () => {
  const { isFavoritePresentation, addFavoritePresentation, removeFavoritePresentation } = useFavoritePresentations();

  (isFavoritePresentation as jest.Mock).mockReturnValue(false);

  const { getByTestId } = render(<FavoriteButton presentation={PresentationMock} />);
  await user.press(getByTestId('favorite-button'));

  expect(addFavoritePresentation).toHaveBeenCalledWith(PresentationMock);
  expect(removeFavoritePresentation).not.toHaveBeenCalled();
});

it('should remove presentation from favorites if it is favorite', async () => {
  const { isFavoritePresentation, addFavoritePresentation, removeFavoritePresentation } = useFavoritePresentations();

  (isFavoritePresentation as jest.Mock).mockReturnValue(true);

  const { getByTestId } = render(<FavoriteButton presentation={PresentationMock} />);
  await user.press(getByTestId('favorite-button'));

  expect(addFavoritePresentation).not.toHaveBeenCalled();
  expect(removeFavoritePresentation).toHaveBeenCalledWith(PresentationMock.slug);
});
