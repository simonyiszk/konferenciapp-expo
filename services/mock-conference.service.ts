import { addMinutes } from 'date-fns';

import { FullConferenceDto } from '../types/conference-api.type';
import { ConferenceService } from './conference.service';

export class MockConferenceService implements ConferenceService {
  static async getConferenceData(): Promise<FullConferenceDto> {
    return {
      previousConferences: {
        sectionTitle: 'Past Events',
        conferences: [],
      },
      registration: {
        buttonText: 'Register Now',
        cooltixEventId: 'EVT123456',
      },
      mobilApp: {
        description: 'Download our official app for the latest updates and features.',
        androidUrl: 'https://play.google.com/store/apps/details?id=com.conference.app',
        iosUrl: 'https://apps.apple.com/us/app/conference-app/id123456789',
      },
      giveaway: {
        sectionTitle: 'Win Exciting Prizes!',
        description: 'Participate in our giveaway to win exclusive merchandise.',
        pictureUrl: 'https://example.com/images/giveaway-banner.jpg',
        rules: '1. Attend all sessions. 2. Participate in quizzes. 3. Share your experience on social media.',
      },
      promoVideo: {
        sectionTitle: 'Event Highlights',
        youtubeUrl: 'https://youtube.com/watch?v=promo123',
        description: 'Check out the highlights of our upcoming conference.',
      },
      sponsors: {
        sectionTitle: 'Our Esteemed Sponsors',
        companies: [
          {
            name: 'TechCorp',
            logoUrl: 'https://example.com/logos/techcorp.png',
            url: 'https://techcorp.com',
            category: 'Platinum',
          },
          {
            name: 'InnoSoft',
            logoUrl: 'https://example.com/logos/innosoft.png',
            url: 'https://innosoft.com',
            category: 'Gold',
          },
        ],
      },
      organisers: [
        {
          name: 'John Doe',
          rank: 'Lead Organiser',
          emailAddress: 'john.doe@example.com',
          pictureUrl: 'https://example.com/images/organisers/john-doe.jpg',
          priority: 1,
        },
        {
          name: 'Jane Smith',
          rank: 'Co-Organiser',
          emailAddress: 'jane.smith@example.com',
          pictureUrl: 'https://example.com/images/organisers/jane-smith.jpg',
          priority: 2,
        },
      ],
      featuredPresentation: {
        sectionTitle: 'Keynote Presentation',
        description: 'Join our keynote speaker as they delve into the future of technology.',
      },
      presentations: [
        {
          slug: 'example-presentation',
          title: 'Legizgalmasabb előadás',
          room: 'IB028',
          language: 'Magyar',
          startTime: addMinutes(new Date(), 10).toISOString(),
          endTime: addMinutes(new Date(), 70).toISOString(),
          description: 'Az egyik legizgalmasabb előadásunk a konferencián.',
          questionsUrl: 'https://example.com/questions/example-presentation',
          presenter: {
            name: 'Péter Pál',
            rank: 'Szoftverfejlesztő',
            pictureUrl: 'https://picsum.photos/300/300',
          },
        },
        {
          slug: 'another-presentation',
          title: 'Egy másik előadás',
          room: 'IB025',
          language: 'Magyar',
          startTime: addMinutes(new Date(), 80).toISOString(),
          endTime: addMinutes(new Date(), 140).toISOString(),
          description: 'Egy másik előadásunk a konferencián.',
          questionsUrl: 'https://example.com/questions/another-presentation',
          presenter: {
            name: 'János János',
            rank: 'Játékfejlesztő',
            pictureUrl: 'https://picsum.photos/300/300',
          },
        },
      ],
    };
  }
}
