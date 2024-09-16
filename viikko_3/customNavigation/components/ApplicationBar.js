import { Appbar } from 'react-native-paper';

export default function CustomNavigationBar({ navigation, back }) {
  return (
    <Appbar.Header>
      {back &&<Appbar.BackAction onPress={() => navigation.goBack()} />}
      <Appbar.Content title="Md Nav Demo" />
      {!back && <Appbar.Action icon="arrow-right" onPress={() => navigation.navigate("Second")} />}r
    </Appbar.Header>
  );
}
