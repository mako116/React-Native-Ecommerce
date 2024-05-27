import { StyleSheet } from "react-native";
import {COLORS, SIZES} from "../constant/index"

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is not hidden by the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'gray',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is not hidden by the icon
  },
  iconContainer: {
    top: 10,
    right: 12,
  },
})

export default pickerSelectStyles