import React from 'react';
type BadgeComponentProps = {
    /**
     * background color of the badge
     */
    backgroundColor: string;
    /**
     * color of the text inside badge
     */
    textColor: string;
    /**
     * the text to be shown in the badge
     */
    text: string;
};
/**
 * Badges can be used as part of links or buttons to provide a counter.
 * @parms {@link BadgeComponentProps|badge-component-props}
 */
export declare const BadgeComponent: (props: BadgeComponentProps) => React.JSX.Element;
export {};
