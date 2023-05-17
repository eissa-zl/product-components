import React,{useState,useEffect} from 'react'
import { View, Image, Text, TouchableHighlight, TouchableOpacity,TouchableWithoutFeedback } from 'react-native'

import { styles } from './ChipComponent.style'

const { containerStyles, primaryIconStyles, textStyles, closeIconStyles,shadowProps } = styles

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

  const handleButtonRelease = () => {
    setButtonPressed(false);
  };

  return (
    <TouchableWithoutFeedback 
    onPress={handleButtonPress}
    onPressOut={handleButtonRelease}
    >
      <View style={[{ ...containerStyles, ...containerStyle},{backgroundColor:themeObj.backgroundColor},isButtonPressed && 
        (theme==='DARK'?{backgroundColor:'black'}:{backgroundColor:'#CAC4D0'}),borderType==='SHADOW' && {...shadowProps,...shadowProp},disabled===true && {opacity:0.6}]} pointerEvents={disabled===true ? 'none' : 'auto'}>
        {primaryIconSrc && <Image style={{ ...primaryIconStyles, ...primaryIconStyle }} source={primaryIconSrc}></Image>}
        <Text style={[{ ...textStyles, ...textStyle},{color:themeObj.color}]}>{text}</Text>
        {optionalBtnNeeded && 
        <TouchableOpacity onPress={crossBtnPressed} style={{ ...closeIconStyles, ...closeIconStyle }}>
          {closeIconSrc ? 
          <Image  source={closeIconSrc} /> :
          <Image source={require('../../assets/cross.png')} />}
        </TouchableOpacity>}
      </View> 
     </TouchableWithoutFeedback>
  )

}
//functionality of hover,press etc.



type ChipComponentProps = {
  text: string,
  primaryIconSrc: any, //Expects-imgSrc-like-require('../../asets/')
  closeIconSrc: any,
  optionalBtnNeeded?: boolean,
  disabled?:boolean, 
  theme?:'LIGHT' | 'DARK',
  borderType?:'DEFAULT' | 'SHADOW',
  shadowProp?:any,
  onPress?: () => void | undefined,
  crossBtnPressed?: () => void | undefined,
  containerStyle?: any | undefined,
  primaryIconStyle?: any | undefined,
  closeIconStyle?: any | undefined,
  textStyle?: any | undefined
}


export { ChipComponent }