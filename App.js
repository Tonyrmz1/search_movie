import { StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MainStack from './navigation/MainStack';
import {COLORS} from './globals/GlobalStyles';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <MainStack></MainStack>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroundColor,
  },
});
