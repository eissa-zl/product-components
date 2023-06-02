const colorCodes:colorCodesTypes = {
  LIGHT:{
  textColor: '#FFFFFF',
  primary: '#6750A4',
  secondary: '#625B71',
  third: '#7D5260',
  error: '#B3261E',
  disabledBg: '#1C1B1F1F',
  disabledText: '#1C1B1F',
  surface: '#FFFFFF',
  shadow: '#C2C0C9',
  outline: '#79747E',
  },
  DARK:{
  textColor: '#000000',
  primary: '#D0BCFF',
  secondary: '#CCC2DC',
  third: '#EFB8C8',
  error: '#F2B8B5',
  disabledBg: '#E6E1E51F',
  disabledText: '#E6E1E5',
  surface: '#49454F',
  shadow: '#69666E',
  outline: '#938F99',
}
}
type colorCodesTypes = {
  LIGHT: colorCodesOptions,
  DARK: colorCodesOptions
}
type colorCodesOptions={
  textColor?: string,
  primary?: string,
  secondary?: string,
  third?: string,
  error?: string,
  disabledBg?: string,
  disabledText?: string,
  surface?: string,
  shadow?: string,
  outline?: string,
}

export { colorCodes, colorCodesTypes };
