type CheckboxState = 'checked' | 'indeterminate' | 'unchecked';

type CheckboxComponentProps = {
  /**
   * represents the state of checkbox {@link CheckboxState|checkbox-state}
   */
  checkboxState: CheckboxState;

  /**
   * style for outer background color
   */
  outerBgColor: string;

  /**
   * style for inner background color
   */
  innerBgColor: string;

  /**
   * style background color when checkbox is active
   */
  activeBgColor: string;

  /**
   * if true checkbox is selected by default
   */
  isDefaultSelected?: boolean;

  /**
   * if true checkbox is disabled
   */
  isDisabled: boolean;

  /**
   * setter for checkbox state
   */
  setCurrentSelected: React.Dispatch<React.SetStateAction<boolean>>;
};

export { CheckboxComponentProps, CheckboxState };
