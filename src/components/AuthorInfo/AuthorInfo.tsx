import React from "react"
import { FlatList, Text, StyleSheet, View } from "react-native"
interface AuthorInfoProps {author: string, linecount: string, lines: string[], title: string}
const AuthorInfo = ({author, linecount, lines, title} : AuthorInfoProps) => {
return <View style={styles.paddinghorizontal}><Text style={styles.boldText}>{author}</Text>
<Text>"{title}"</Text>
</View>
}
const styles = StyleSheet.create( {
    redtext: {
        color: "red",
    },
    boldText: {
        fontWeight: "bold",
    },
    paddinghorizontal: {
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
})
export default AuthorInfo;