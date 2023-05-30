import { View, Image } from "react-native";
import { TextInputComponent } from "../input/Input.component";
import { styles } from "./Search.styles";
import {SearchComponentProps} from './Search.type'

const { inputstyles, containerstyles, iconstyles } = styles;

/**
 * Used in forms or area where we need user's input as text
 * @parms {@link SearchComponentProps|search-component-props}
 */
export const SearchComponent = ({
  theme,
  value,
  onChange,
  placeholder = "Type Here",
  placeholderTextColor = "#777777",
  onBlur,
  onFocus,
}: SearchComponentProps) => {
  let themeObj = {
    backgroundColor: "#F5F6F6",
    color: "#1A1A1A",
  };

  if (theme === "DARK") {
    themeObj = {
      backgroundColor: "#1A1A1A",
      color: "#F5F6F6",
    };
  }

  return (
    <View style={containerstyles}>
      <Image
        source={require("./../../assets/png/search.png")}
        style={iconstyles}
      />
      <TextInputComponent
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        label=""
        supportingText=""
        showSupportingText={false}
        containerStyle={{ ...containerstyles, ...themeObj }}
        inputstyle={{ ...inputstyles, ...themeObj }}
      />
    </View>
  );
};

