import { View, Text, Image } from 'react-native'
import React from 'react'

interface Props {
    name: string | null;
    avatarURL: string;
    followers: number | null;
    following: number | null;
    publicRepos: number | null;
}

const Profile: React.FC<Props> = ({ name, avatarURL, followers, following, publicRepos }) => {
    return (
        <View className='data-cont flex flex-col text-[#fff]'>
            <View className="cur-user-cont flex flex-row items-center">
                <Image source={{ uri: avatarURL }}
                    className='avatar  p-6 rounded-full mx-6' />
                <View className="|">
                    <Text className='name w-fit text-2xl text-bold capitalize text-[#fff] text-center mx-auto'>{name}</Text>
                </View>
            </View>
            <View className="user-stats-cont grid grid-cols-2 gap-4 m-4">
                
                <View className="followers flex flex-col w-fit align-center bg-blue-600 rounded-xl">
                    <Text className='text-[#fff]'>Followers</Text>
                    <Text className='text-[#fff]'>{followers}</Text>
                </View>
                <View className="following flex flex-col w-fit align-center bg-green-600 rounded-xl">
                    <Text className='text-[#fff]'>Following</Text>
                    <Text className='text-[#fff]'>{following}</Text>
                </View>
                <View className="following flex flex-col w-fit align-center bg-violet-600 rounded-xl">
                    <Text className='text-[#fff]'>Repos</Text>
                    <Text className='text-[#fff]'>{publicRepos}</Text>
                </View>
            </View>
        </View>
    )
}

export default Profile