type ChipComponentProps = {
    /**
     * text you need to show in chip
     */
    text: string,
  
  
      /**
     * image you need to show in chip
     * Expects imgSrc like require('../../assets/')
     */
    primaryIconSrc: any, 
  
  
    /**
     * The Close Icon, to remove chip
     */
    closeIconSrc: any,
  
  
      /**
     * true if you need cross button
     */
    optionalBtnNeeded?: boolean,
  
    /**
     * true if you need disable the chip
     */
    disabled?:boolean, 
  
    /**
     *can specify theme 'LIGHT' or 'DARK'
     */
    theme?:'LIGHT' | 'DARK',
  
      /**
     *type of border 'DEFAULT' or 'SHADOW'
     */
    borderType?:'DEFAULT' | 'SHADOW',
  
    /**
     *check shadowProps in react native docs 
     */
    shadowProp?:any,
  
      /**
     *What happens when you press the chip
     @param  () => void | undefined
     */
    onPress?: () => void | undefined,
  
          /**
     *triggered when you press the cross button
     @param  () => void | undefined
     */
    crossBtnPressed?: () => void | undefined,
  
    /**
     *optional paramater if you need custom container style
     */
    containerStyle?: any | undefined,
  
    /**
     *optional paramater if you need custom primary icon Style
     */
    primaryIconStyle?: any | undefined,
  
    /**
     *optional paramater if you need custom close icon Style
     */
    closeIconStyle?: any | undefined,
  
    /**
     *optional paramater for styling text
     */
    textStyle?: any | undefined
  }

  export {ChipComponentProps}
  