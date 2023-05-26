type RadioComponentProps = {
    /**
     * Used as an icon
     * options to be shown adjecent to radio button
     */
    optionNames: string[];
  
    /**
     * inner background color
     */
    innerBgColor: string;
  
    /**
     * outer background color
     */
    outerBgColor: string;
  
    /**
     * text color for text adjecent to radio buttons
     */
    optionTextColor: string;
  
    /**
     * size of text adjecent to radio
     */
    fontSize: number;
  
    /**
     * needs the text which we want to be selected by default
     */
    defaultSelect?: string;
  
    /**
     * if true, radio buttons are disabled
     */
    isDisabled: boolean;
  
    /**
     * alignment of the text relative to radio button, can be left or right
     */
    textAlignment?: string;
  
      /**
     * background color when radio button is active
     */
    activeBgColor: string;
  
      /**
     *setter for radio button state
     */
    setCurrentSelected: (value: React.SetStateAction<string>) => void;
  };

  export {RadioComponentProps}
  