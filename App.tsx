import React, {useEffect} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';

import {Header} from 'react-native/Libraries/NewAppScreen';
import BootSplash from 'react-native-bootsplash';

function App(): React.JSX.Element {
  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await BootSplash.hide({fade: true});
      console.log('BootSplash has been hidden successfully');
    });
  }, []);

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Header />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
