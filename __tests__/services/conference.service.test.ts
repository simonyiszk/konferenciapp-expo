import { axiosInstance } from '../../config/axios.config';
import { ConferenceService } from '../../services/conference.service';

jest.mock('../../config/axios.config', () => ({
  axiosInstance: {
    get: jest.fn(),
  },
}));

beforeEach(() => {
  jest.clearAllMocks();
  (axiosInstance.get as jest.Mock).mockResolvedValue({ data: { presentations: [] } });
});

it('should return empty presentations array', async () => {
  const conferenceData = await ConferenceService.getConferenceData();
  expect(conferenceData.presentations).toEqual([]);
});

it("should return 'n/a' for invalid timestamp", () => {
  const formattedTimestamp = ConferenceService.getFormattedTimestamp('invalid');
  expect(formattedTimestamp).toEqual('n/a');
});

it('should return formatted timestamp', () => {
  const formattedTimestamp = ConferenceService.getFormattedTimestamp('2022-01-01T12:00:00');
  expect(formattedTimestamp).toEqual('12:00');
});

it('should return conference data with sorted presentations', async () => {
  const conferenceData = {
    presentations: [
      { startTime: '2022-01-01T12:00:00', presenter: { pictureUrl: '/path' } },
      { startTime: '2022-01-01T11:00:00', presenter: { pictureUrl: '/path' } },
    ],
  };
  axiosInstance.get = jest.fn().mockResolvedValue({ data: conferenceData });

  const sortedConferenceData = await ConferenceService.getConferenceData();
  expect(sortedConferenceData.presentations).toEqual([
    { startTime: '2022-01-01T11:00:00', presenter: { pictureUrl: 'https://konferencia.simonyi.bme.hu/path' } },
    { startTime: '2022-01-01T12:00:00', presenter: { pictureUrl: 'https://konferencia.simonyi.bme.hu/path' } },
  ]);
});
