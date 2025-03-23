import { useAssets } from 'expo-asset';
import { Image } from 'expo-image';
import { useColorScheme } from 'react-native';

const logoWidth = 1260;
const logoHeight = 200;

const logoResize = 1 / 7;

export function Logo() {
  const [assets, error] = useAssets([require('./logo-white.png'), require('./logo-black.png')]);
  const colorScheme = useColorScheme();
  if (error || !assets) {
    return null;
  }

  const asset = colorScheme === 'dark' ? assets[0] : assets[1];

  return (
    assets && (
      <Image
        source={asset}
        style={{
          height: logoHeight * logoResize,
          width: logoWidth * logoResize,
          resizeMode: 'contain',
        }}
      />
    )
  );
}
