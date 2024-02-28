import { useEffect, useRef, useState } from 'react';
import { EmitterSubscription, Keyboard } from 'react-native';

export function useKeyboardOffset() {
  const [keyboardOffset, setKeyboardOffset] = useState(0);
  const onKeyboardShow = (event: { endCoordinates: { height: React.SetStateAction<number> } }) =>
    setKeyboardOffset(event.endCoordinates.height);
  const onKeyboardHide = () => setKeyboardOffset(0);
  const keyboardDidShowListener = useRef<EmitterSubscription>();
  const keyboardDidHideListener = useRef<EmitterSubscription>();

  useEffect(() => {
    keyboardDidShowListener.current = Keyboard.addListener('keyboardWillShow', onKeyboardShow);
    keyboardDidHideListener.current = Keyboard.addListener('keyboardWillHide', onKeyboardHide);

    return () => {
      keyboardDidShowListener.current?.remove();
      keyboardDidHideListener.current?.remove();
    };
  }, []);

  return keyboardOffset;
}
