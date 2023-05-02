import { StyleSheet } from "react-native";

export const ButtonComponentStyles = StyleSheet.create({

    primaryButtonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: "500",
        fontFamily: "Poppins",
        fontSize: 15,
    },

    secondaryButtonText: {
        color: '#333333',
        textAlign: 'center',
        fontWeight: "500",
        fontFamily: "Poppins",
        fontSize: 15,
    },

    PRIMARY: {
        backgroundColor: "#40B876",
        borderColor: "#40B876",
        border: 1,
        borderWidth: 1,
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 7
    },

    SECONDARY: {
        backgroundColor: "white",
        borderColor: "#CBD5E1",
        border: 1,
        borderWidth: 1,
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 7
    },
})