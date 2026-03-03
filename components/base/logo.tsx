import { Image } from 'expo-image';
import { useColorScheme } from 'react-native';

const logoWidth = 782.78;
const logoHeight = 310.59;

const logoResize = 70 / logoHeight;

export function Logo() {
  const colorScheme = useColorScheme();
  const logoSource = colorScheme === 'dark' ? require('../../assets/FullSand.svg') : require('../../assets/Full.svg');

  return (
    <Image
      source={logoSource}
      style={{
        width: logoWidth * logoResize,
        height: logoHeight * logoResize,
      }}
      contentFit='contain'
    />
  );
}
