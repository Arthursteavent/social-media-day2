import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

const StoryBubble = () => {
    return (
        <TouchableOpacity onPress={() => router.push("/story")}>
            <View style={{ padding: 35, backgroundColor: "grey", borderRadius: 100, marginRight: 10 }}></View>
        </TouchableOpacity>
    )
}

export default StoryBubble