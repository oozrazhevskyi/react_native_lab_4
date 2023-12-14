import 'react-native-gesture-handler';
import React, { useState } from "react";
import { Provider } from "react-redux";
import { persistor, store } from "@app/redux/configureStore";
import {PersistGate} from 'redux-persist/integration/react';
import Navigation from "@app/navigation/Navigation/Navigation";

function App(): React.ReactElement {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <Navigation />
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
