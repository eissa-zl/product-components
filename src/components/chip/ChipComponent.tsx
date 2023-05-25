import React,{useState,useEffect} from 'react'
import { View, Image, Text, TouchableHighlight, TouchableOpacity,TouchableWithoutFeedback, Pressable } from 'react-native'

import { styles } from './ChipComponent.style'

const { containerStyles, primaryIconStyles, textStyles, closeIconStyles,shadowProps } = styles

/**
 * Used to show a value in chip format. Usually used as filter tags
 * @parms {@link ChipComponentProps|chip-component-props}
 */
const ChipComponent = ({ primaryIconSrc, closeIconSrc, text,disabled, optionalBtnNeeded=true,theme='LIGHT',borderType='SHADOW',shadowProp, onPress, crossBtnPressed, containerStyle, primaryIconStyle, closeIconStyle, textStyle }: ChipComponentProps) => {
  const [isButtonPressed, setButtonPressed] = useState(false);
  const [themeObj,setThemeObj]=useState({
    color:'#1C1B1F',
    backgroundColor:'white'
  })

  useEffect(() => {
    if(theme==='DARK'){
      setThemeObj({
        color:'#CAC4D0',
        backgroundColor:'#1C1B1F'
      })}
    else{
      setThemeObj({
        color:'#1C1B1F',
        backgroundColor:'white'
      })
    }

  }, [theme])
  
  const handleButtonPress = () => {
    setButtonPressed(true);
    if(onPress)
    onPress()
  };


  return (
    <Pressable 
    onPress={handleButtonPress}
    >
        {({pressed})=>(
      <View style={[{ ...containerStyles, ...containerStyle},{backgroundColor:themeObj.backgroundColor},pressed && 
        (theme==='DARK'?{backgroundColor:'black'}:{backgroundColor:'#CAC4D0'}),borderType==='SHADOW' && {...shadowProps,...shadowProp},disabled===true && {opacity:0.6}]} pointerEvents={disabled===true ? 'none' : 'auto'}>
        {primaryIconSrc && <Image style={{ ...primaryIconStyles, ...primaryIconStyle }} source={primaryIconSrc}></Image>}
        <Text style={[{ ...textStyles, ...textStyle},{color:themeObj.color}]}>{text}</Text>
        {optionalBtnNeeded && 
        <TouchableOpacity onPress={crossBtnPressed} style={{ ...closeIconStyles, ...closeIconStyle }}>
          {closeIconSrc ? 
          <Image  source={closeIconSrc} /> :
          <Image source={require('../../assets/png/cross.png')} />}
        </TouchableOpacity>}
      </View> )}
     </Pressable>
  )

}

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


export { ChipComponent }