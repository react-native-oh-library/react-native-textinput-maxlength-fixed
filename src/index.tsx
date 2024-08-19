import { NativeModules, TurboModuleRegistry, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-textinput-maxlength-fixed' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const NativeTextinputMaxlengthFixed = TurboModuleRegistry.get('TextInputMaxlengthFixedTurboModule');
const TextinputMaxlengthFixed = NativeTextinputMaxlengthFixed ?
  NativeTextinputMaxlengthFixed :
  (NativeModules.TextinputMaxlengthFixed ? NativeModules.TextinputMaxlengthFixed :
    new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    )
  );

export function multiply(a: number, b: number): Promise<number> {
  return TextinputMaxlengthFixed.multiply(a, b);
}
