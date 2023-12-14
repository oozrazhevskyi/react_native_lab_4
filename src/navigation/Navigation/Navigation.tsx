import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawerContent from "@app/navigation/CustomDrawerContent/CustomDrawerContent";
import TabNavigation from "@app/navigation/TabNavigation/TabNavigation";
import ChatScreen from "@app/screens/ChatScreen/ChatScreen";
import { NavigationContainer } from "@react-navigation/native";
import ArticlesScreen from "@app/screens/ArticlesScreen/ArticlesScreen";

const Drawer = createDrawerNavigator();

function Navigation() {
  return (
    <>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName='Info'
          drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
          <Drawer.Screen
            name='Info'
            component={TabNavigation}
            options={{
              drawerLabel: 'Інфо',
            }}
          />
          <Drawer.Screen
            name='Chat'
            component={ChatScreen}
            options={{
              drawerLabel: 'Чат',
            }}
          />
          <Drawer.Screen
            name='Posts'
            component={ArticlesScreen}
            options={{
              drawerLabel: 'Новини'
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  )
}

export default Navigation;
