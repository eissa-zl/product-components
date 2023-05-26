type SwitchComponentProps = {

    /**
     *if true, the switch will be ON by default
     */
  isEnabled: boolean;

      /**
     *setter for switch value
     */
  setIsEnabled: React.Dispatch<React.SetStateAction<boolean>>;

  enabledTrackColor: string;
  disabledTrackColor: string;
  enabledThumbColor: string;
  disabledThumbColor: string;

        /**
     *if true,switch is in disabled state
     */
  isDisabled: boolean;
};

export {SwitchComponentProps}