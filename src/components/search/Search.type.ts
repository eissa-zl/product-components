type SearchComponentProps = {
    /**
     * Specify a theme 'LIGHT' or 'DARK'
     */
    theme: "LIGHT" | "DARK";
  
    /**
     * value of the search input
     */
    value: string;
  
    /**
     * triggred when search value changes
     */
    onChange: () => void;
  
    /**
     * placeholder text for search input field
     */
    placeholder:string;
  
    /**
     * placeholder color for search input field
     */
    placeholderTextColor:string;
    /**
     * denotes a function which is triggered when user focus on input field
     */
    onFocus?: () => void;
  
    /**
     * denotes a function which is triggered when user moves out or unfocuses the input field
     */
    onBlur?: () => void;
  };

  export {SearchComponentProps}