import {View, Text} from 'react-native';
import React from 'react';
import {hello} from '../../../../message';

const Home = () => {
  return (
    <View className="h-screen items-center justify-center bg-black">
      <Text className="text-2xl text-white">Android</Text>
      <Text className="  text-xl text-green-400">{hello}</Text>
    </View>
  );
};

export default Home;
