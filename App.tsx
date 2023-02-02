import React, {FC, useState, useRef, LegacyRef, RefObject, MutableRefObject} from 'react'
import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { TextInput } from 'react-native-gesture-handler';
import SearchBox from './components/SearchBox';
import Profile from './components/Profile';

export default function App<FC>():JSX.Element {
  const [username, setUsername] = useState<string>("")
  const [name, setName] = useState<string | null>("")
  const [avatarURL, setAvatarURL] = useState<string>("")
  const [followers, setFollowers] = useState<number | null>(0)
  const [following, setFollowing] = useState<number | null>(0)
  const [publicRepos, setPublicRepos] = useState<number | null>(0)

  const searchInputRef: LegacyRef<TextInput> = useRef<TextInput>(null);


  function search(searchTerm: string | null) {
    if (searchTerm == "" || typeof(searchTerm)== null ) {
      alert("Please, enter your username.")
      return
    }
    fetch(`https://api.github.com/users/${searchTerm}`).then(res => res.json()).then(data => {
      console.log(data);
      // alert(data.name);
      setName(data.name);
      setAvatarURL(data.avatar_url);
      setFollowers(data.followers)
      setFollowing(data.following)
      setPublicRepos(data.public_repos)
    })
  }
  return (
    <SafeAreaView className="bg-gray-900 flex-1 text-[#eee]">
      <ScrollView keyboardShouldPersistTaps="handled" className="h-screen">
      {!name ? (
        <SearchBox onSearch={search} username={username} setUsername={setUsername} />
        ) : (
          <Profile name={name} avatarURL={avatarURL} followers={followers} following={following} publicRepos={publicRepos} />
      )
    }
    </ScrollView>
    </SafeAreaView>
  );
};

