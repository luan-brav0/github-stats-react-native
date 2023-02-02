import { View, TextInput, Pressable, Text, SafeAreaView } from 'react-native'
import React, { useState, FC } from 'react'

interface Props {
    onSearch: Function;
    username: string | null;
    setUsername: React.Dispatch<React.SetStateAction<string>>
}

const SearchBox: FC<Props> = ({ onSearch, username, setUsername }) => {
    return (
        <View className='flex flex-col items-center space-x-4 my-auto'>
            <TextInput placeholder='Enter your username here: '
                placeholderTextColor={"#777"}
                onChangeText={(text: string) => { setUsername(text) }}
                className="border border-gray-100 p-2 rounded-2xl text-[#fff] w-[70%] text-center mt-8" />
            <Pressable className="bg-sky-600 py-2 rounded-2xl my-8 px-8"
                onPress={() => onSearch(username)}>
                <Text className="text-gray-50">Search</Text>
            </Pressable>
        </View>
    )
}

export default SearchBox