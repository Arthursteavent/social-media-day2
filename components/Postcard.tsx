import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const Postcard = () => {
  return (

      <View style={{ flexDirection: "column" }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 25, alignContent: "center", marginBottom: 10 }}>
          <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
            <View style={{ borderRadius: 100, padding: 15, backgroundColor: "grey", marginLeft: 10 }}></View>
            <Text>Username</Text>
          </View>
          <View>
            <Ionicons name="ellipsis-horizontal" style={{ marginRight: 25 }}></Ionicons>
          </View>
        </View>
        <View style={{ backgroundColor: "grey", width: "100%", height: 300, }}></View>
        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", paddingTop: 10 }}>
          <View style={{ display: "flex", flexDirection: "row", gap: 5, marginLeft: 5 }}>
            <Ionicons name="heart" size={25}></Ionicons>
            <Ionicons name="chatbubble-outline" size={25}></Ionicons>
            <Ionicons name="paper-plane" size={25}>
            </Ionicons>
          </View>
          <View style={{ marginRight: 10 }}>
            <Ionicons name="bookmarks-outline" size={25}></Ionicons>
          </View>
        </View>
        <Text style={{ fontSize: 12, marginLeft: 10, marginTop: 5 }}>Liked by you</Text>
        <Text style={{ display: "flex", fontSize: 13, marginLeft: 7, marginTop: 2, flexDirection: "row", gap: 4 }}> <Text style={{ fontWeight: "bold", }}>username</Text> Lorem ipsum dolor sit amet</Text>
        <TouchableOpacity
          onPress={() => {
            console.log("tes")
          }}
          style={{ marginHorizontal: 8 }}>
          <Text style={{ color: "grey", fontSize: 15, marginLeft:2 }}>View all comments</Text>
        </TouchableOpacity>
      </View>
  )
}

export default Postcard