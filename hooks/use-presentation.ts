import { useConference } from './use-conference';

export function usePresentation(slug: string) {
  const { data, ...rest } = useConference();
  const item = data?.presentations.find((item) => item.slug === slug);
  return { data: item, ...rest };
}
