import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View ,Image} from 'react-native';
import { Link, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import {images} from '../constants'
import CustomButton from '../components/CustomButton';
export default function App() {
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView contetnContainerStyle={{ height: '100%' }}>
        <View className='w-full justify-center items-center h-full px-4'>
          <Image source={ images.logo} className='w-[130px] h-[84px]' resizeMode='contain'/>
          <Image source={images.cards} className='max-w-[380px] w-full h-[300px]' resizeMode='contain' />
          <View className='relative mt-5 '>
            <Text className='text-3xl text-white font-bold text-center'>Disover endless Possibilities with {" "} <Text className='text-orange-300'>Aora</Text></Text>
        <Image source={images.path} className='w-[136px] h-[15px] absolute -bottom-2 right-24' resizeMode='contain'/>
          </View>
          <Text className='text-sm font-pregular text-gray-100 mt-7 text-center'>Were creativity meets innovation: ebark on a journey of limitless xploration with Aora</Text>
        </View>
        <CustomButton title='Continue with Email' handlePress={ () => router.push('/sign-in')} containerStyles='w-full mt-7'/>
      </ScrollView>
      <StatusBar backgroundColor='#161622' style='light'/>
      
  </SafeAreaView>
  );
}

