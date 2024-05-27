import { StyleSheet } from "react-native";
import { SIZES } from "../../constant";
 
const styles = StyleSheet.create({
    container: {
        width:"100%",
    },
    welcomeText:(color)=>(
       {
        // fontFamily: "bold",
        fontSize: SIZES.xxLarge -5,
        marginTop: SIZES.xSmall,
        color: color
    })
})

export default styles