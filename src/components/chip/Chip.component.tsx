import { useState, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity, Pressable } from 'react-native';

import { styles } from './Chip.style';
import { ChipComponentProps } from './Chip.type';

const {
  containerStyles,
  primaryIconStyles,
  textStyles,
  closeIconStyles,
  shadowProps,
} = styles;

/**
 * Used to show a value in chip format. Usually used as filter tags
 * @parms {@link ChipComponentProps|chip-component-props}
 */
const ChipComponent = ({
  primaryIconSrc,
  closeIconSrc,
  text,
  disabled = false,
  optionalBtnNeeded = true,
  theme = 'DARK',
  borderType = 'SHADOW',
  shadowProp,
  onPress,
  crossBtnPressed,
  containerStyle,
  primaryIconStyle,
  closeIconStyle,
  textStyle,
}: ChipComponentProps) => {
  // const [setButtonPressed] = useState(false);
  const [themeObj, setThemeObj] = useState({
    color: '#1C1B1F',
    backgroundColor: 'white',
  });

  useEffect(() => {
    if (theme === 'DARK') {
      setThemeObj({
        color: '#CAC4D0',
        backgroundColor: '#1C1B1F',
      });
    }
  }, [theme]);

  const handleButtonPress = () => {
    // setButtonPressed(true);
    if (onPress) onPress();
  };

  return (
    <Pressable onPress={handleButtonPress}>
      {({ pressed }) => (
        <View
          style={[
            { ...containerStyles, ...containerStyle },
            { backgroundColor: themeObj.backgroundColor },
            pressed &&
              (theme === 'DARK'
                ? { backgroundColor: 'black' }
                : { backgroundColor: 'lightgrey' }),
            borderType === 'SHADOW' && { ...shadowProps, ...shadowProp },
            disabled === true && { opacity: 0.6 },
          ]}
          pointerEvents={disabled === true ? 'none' : 'auto'}
        >
          {primaryIconSrc && (
            <Image
              style={{ ...primaryIconStyles, ...primaryIconStyle }}
              source={primaryIconSrc}
            />
          )}
          <Text
            style={[{ ...textStyles, ...textStyle }, { color: themeObj.color }]}
          >
            {text}
          </Text>

          {optionalBtnNeeded && (
            <TouchableOpacity
              onPress={crossBtnPressed}
              style={{ ...closeIconStyles, ...closeIconStyle }}
            >
              {closeIconSrc ? (
                <Image source={closeIconSrc} />
              ) : (
                <Image source={require('../../assets/png/cross.png')} />
              )}
            </TouchableOpacity>
          )}
        </View>
      )}
    </Pressable>
  );
};

export { ChipComponent };
