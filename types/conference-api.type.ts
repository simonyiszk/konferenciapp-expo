export type FullConferenceDto = {
  previousConferences: PreviousConferencesDto;
  registration: RegistrationDto;
  mobilApp: MobilAppDto;
  giveaway: GiveawayDto;
  promoVideo: PromoVideoDto;
  sponsors: SponsorsDto;
  organisers: OrganiserDto[];
  featuredPresentation: FeaturedPresentationDto;
  presentations: PresentationDto[];
};

export type FeaturedPresentationDto = {
  sectionTitle: string;
  description: string;
};

export type GiveawayDto = {
  sectionTitle: string;
  description: string;
  pictureUrl: string;
  rules: string;
};

export type MobilAppDto = {
  description: string;
  androidUrl: string;
  iosUrl: string;
};

export type OrganiserDto = {
  name: string;
  rank: string;
  emailAddress: string;
  pictureUrl: string;
  priority: number;
};

export type PresentationDto = {
  slug: string;
  title: string;
  room: string;
  language: string;
  startTime: string;
  endTime: string;
  description: string;
  questionsUrl: string;
  presenter: PresenterDto;
};

export type PresenterDto = {
  name: string;
  rank: string;
  pictureUrl: string;
};

export type PreviousConferencesDto = {
  sectionTitle: string;
  conferences: PreviousConferenceDto[];
};

export type PreviousConferenceDto = {
  title: string;
  priority: number;
  imageUrls: string[];
};

export type PromoVideoDto = {
  sectionTitle: string;
  youtubeUrl: string;
  description: string;
};

export type RegistrationDto = {
  buttonText: string;
  cooltixEventId: string;
};

export type SponsorsDto = {
  sectionTitle: string;
  companies: CompanyDto[];
};

export type CompanyDto = {
  name: string;
  logoUrl: string;
  url: string;
  category: string;
};
