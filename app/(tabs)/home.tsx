import Postcard from "@/components/Postcard";
import StoryBubble from "@/components/StoryBubble";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { ScrollView, Text, View, TouchableOpacity } from "react-native";


const Home = () => {
  return (
    <ScrollView>
      <View style={{ flexDirection: "row", justifyContent: "space-between", paddingTop: 45 }}>
        <Text style={{ marginLeft: 10, fontWeight: "bold", fontStyle: "italic", fontSize: 20 }}>INSTAGRAM</Text>
        <View style={{ flexDirection: "row", gap: 10, marginRight: 8 }}>
          <Ionicons name="heart" size={20} />
          <Ionicons name="paper-plane" size={20} />
        </View>
      </View>
      <ScrollView horizontal={true} style={{ marginHorizontal: 10, marginTop: 12, }} showsHorizontalScrollIndicator={false}>
       <StoryBubble/>
       <StoryBubble/>
       <StoryBubble/>
       <StoryBubble/>
       <StoryBubble/>
      </ScrollView>
      <Postcard/>
      <Postcard/>

    </ScrollView >
  );
};

export default Home;
