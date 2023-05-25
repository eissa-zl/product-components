import React from "react";
/**
 * Used in forms or area where we need user's input as text
 * @parms {@link SearchComponentProps|search-component-props}
 */
export declare const SearchComponent: ({ theme, value, onChange, placeholder, placeholderTextColor, onBlur, onFocus, }: SearchComponentProps) => React.JSX.Element;
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
    placeholder: string;
    /**
     * placeholder color for search input field
     */
    placeholderTextColor: string;
    /**
     * denotes a function which is triggered when user focus on input field
     */
    onFocus?: () => void;
    /**
     * denotes a function which is triggered when user moves out or unfocuses the input field
     */
    onBlur?: () => void;
};
export {};
