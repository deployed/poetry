import {Text, ScrollView, View, Image} from "react-native"
import React from "react"
import useTheme from "@/hooks/useTheme"

const Poem = ({author, title, content}) => 
{
    const theme = useTheme()
    const textAuthor = {
        color:theme.colors.text,
        fontSize:20,
    }
    const navigation = {
        paddingLeft:15,
        paddingRight:15,
        paddingTop:10,
        paddingBottom:10,
        flexDirection:"row",
        backgroundColor:"rgb(238, 184, 96)",
        textAlign:"center",
        justifyContent:"space-between"
    }
    const navigationArrows = {
        marginTop:20,
        justifyContent:"space-between",
        marginBottom:50,
        flexDirection:"row"
    }
    const arrow = {
        padding:20,
        backgroundColor:"black",
        borderRadius:15,
    }
    const titleStyles = {
        fontSize:20, 
        fontWeight:"bold",
        color:theme.colors.blackText
    }
    const contentStyles = {
        flex:1,
        paddingTop:20,
        paddingHorizontal:20, 
    }

    const x = {flex:1, flexDirection:"column"}
    return (
        <View style={x}>
        <View style={navigation}>
            <Image source={require("../../../assets/arrow.png")} style={{width:30,height:30}}/>
            <Text style={textAuthor}>{author}</Text>
            <Image source={require("../../../assets/heart2.png")} style={{width:30,height:30}}/>
        </View>
        <ScrollView style={contentStyles}>
            <View>
                <Text style={titleStyles}>{title}</Text>
                {content.map((line, index)=>{
                    return (
                        <Text key={line+index}>{line}</Text>
                    )
                })}
            </View>
            <View style={navigationArrows}>
                <View style={{...arrow,marginLeft:80}}>
                    <Image source={require("../../../assets/Vector.png")}/>
                </View>
                <View style={{...arrow,transform:"rotate(180deg)",marginRight:80}}>
                    <Image source={require("../../../assets/Vector.png")}/>
                </View>
            </View>
        </ScrollView>
        </View>   
    )
}

export default Poem