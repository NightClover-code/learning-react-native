import AsyncStorage from '@react-native-async-storage/async-storage';

export const setAsyncUsername = async (navigation: any, name: string) => {
  try {
    await AsyncStorage.setItem('username', name);
    navigation.navigate('Home');
  } catch (err: any) {
    console.log(err.message);
  }
};

export const getAsyncUsername = async () => {
  try {
    const data = await AsyncStorage.getItem('username');

    if (!data) return null;

    return data;
  } catch (err: any) {
    console.log(err.message);
  }
};
