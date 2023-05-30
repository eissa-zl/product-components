import { StyleSheet } from "react-native";

export const styles=StyleSheet.create({
containerStyles:{
    width:120,
    height:40,
    borderWidth:0.5,
    backgroundColor:'white',
    flexDirection:'row',
    gap:10,
    paddingVertical:5,
    paddingHorizontal:7,
    borderRadius:12,
    alignItems:'center',
    color:'#1D192B',
},
primaryIconStyles:{
    width:20,
    height:20
},
closeIconStyles:{
    width:14,
    height:14,
    paddingEnd:10,
    marginLeft:'auto'
},
textStyles:{
 color:'#1D192B'  
},
shadowProps:{
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.30,
    elevation: 13,
}
})