type ButtonType = 'FILLED' | 'OUTLINED' | 'TEXT' | 'ELEVATED' | 'TONAL';

type ButtonComponentProps = {
  /**
   * type of button {@link ButtonType|button-prop-type}
   */
  buttonType: ButtonType;

  /**
   * value of the text in button
   */
  buttonText: string;

  /**
   * value of color of the text
   */
  buttonTextColor: string;

  /**
   * if true, button is disabled
   */
  isDisabled?: boolean;

  /**
   * svg image source in button
   */
  svgImage?: any;

  /**
   *function triggred when the user presses on the button
   */
  onPress: () => void;
} & (
  | { buttonType: 'OUTLINED' | 'TEXT' }
  | {
      buttonType: Exclude<ButtonType, 'OUTLINED' | 'TEXT'>;
      buttonBackgroundColor: string;
    }
);

export type { ButtonComponentProps, ButtonType };
