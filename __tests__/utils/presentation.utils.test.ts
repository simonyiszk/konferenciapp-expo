import { PresentationDto } from '../../types/conference-api.type';
import { isPresentationCurrent, isPresentationPast, isPresentationUpcoming } from '../../utils/presentation.utils';

const MockPresentation: PresentationDto = {
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel odio nec urna posuere lacinia',
  language: 'en',
  presenter: {
    name: 'John Doe',
    rank: 'Senior Developer',
    pictureUrl: 'https://example.com/picture.jpg',
  },
  questionsUrl: 'https://example.com/questions',
  room: 'Main Room',
  slug: 'lorem-ipsum',
  title: 'Lorem Ipsum',
  startTime: '2024-03-19T12:00:00Z',
  endTime: '2024-03-19T13:00:00Z',
};

describe('isPresentationPast', () => {
  it('should return true if presentation is past', () => {
    jest.useFakeTimers().setSystemTime(new Date('2024-03-19T13:01:00Z'));

    const result = isPresentationPast(MockPresentation);

    expect(result).toBe(true);
  });

  it('should return false if presentation is not past', () => {
    jest.useFakeTimers().setSystemTime(new Date('2024-03-19T12:59:00Z'));

    const result = isPresentationPast(MockPresentation);

    expect(result).toBe(false);
  });

  it('should return false if current date equals end date', () => {
    jest.useFakeTimers().setSystemTime(new Date('2024-03-19T13:00:00Z'));

    const result = isPresentationPast(MockPresentation);

    expect(result).toBe(false);
  });

  it('should return false if presentation is upcoming', () => {
    jest.useFakeTimers().setSystemTime(new Date('2024-03-19T11:59:00Z'));

    const result = isPresentationPast(MockPresentation);

    expect(result).toBe(false);
  });
});

describe('isPresentationCurrent', () => {
  it('should return true if presentation is current', () => {
    jest.useFakeTimers().setSystemTime(new Date('2024-03-19T12:30:00Z'));

    const result = isPresentationCurrent(MockPresentation);

    expect(result).toBe(true);
  });

  it('should return false if presentation is past', () => {
    jest.useFakeTimers().setSystemTime(new Date('2024-03-19T13:00:00Z'));

    const result = isPresentationCurrent(MockPresentation);

    expect(result).toBe(false);
  });

  it('should return false if current date equals start date', () => {
    jest.useFakeTimers().setSystemTime(new Date('2024-03-19T12:00:00Z'));

    const result = isPresentationCurrent(MockPresentation);

    expect(result).toBe(false);
  });

  it('should return false if presentation is upcoming', () => {
    jest.useFakeTimers().setSystemTime(new Date('2024-03-19T11:59:00Z'));

    const result = isPresentationCurrent(MockPresentation);

    expect(result).toBe(false);
  });
});

describe('isPresentationUpcoming', () => {
  it('should return true if presentation is upcoming', () => {
    jest.useFakeTimers().setSystemTime(new Date('2024-03-19T11:59:00Z'));

    const result = isPresentationUpcoming(MockPresentation);

    expect(result).toBe(true);
  });

  it('should return false if presentation is past', () => {
    jest.useFakeTimers().setSystemTime(new Date('2024-03-19T13:00:00Z'));

    const result = isPresentationUpcoming(MockPresentation);

    expect(result).toBe(false);
  });

  it('should return false if presentation is current', () => {
    jest.useFakeTimers().setSystemTime(new Date('2024-03-19T12:01:00Z'));

    const result = isPresentationUpcoming(MockPresentation);

    expect(result).toBe(false);
  });

  it('should return false if current date equals start date', () => {
    jest.useFakeTimers().setSystemTime(new Date('2024-03-19T12:00:00Z'));

    const result = isPresentationUpcoming(MockPresentation);

    expect(result).toBe(false);
  });
});
