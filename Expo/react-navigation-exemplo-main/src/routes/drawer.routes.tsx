import { createDrawerNavigator } from "@react-navigation/drawer";
import { TabRoutes } from "./tab.routes";
import { MaterialIcons } from "@expo/vector-icons";
import Account from "../screens/Account";
import React from "react";


const Drawer = createDrawerNavigator();
export const DrawerRoutes = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTitle: "",
        headerStyle: {
          backgroundColor: "#03045e",
        },
        headerTintColor: "#fff",
      }}
    >
      <Drawer.Screen
        name="Initial"
        component={TabRoutes}
        options={{
          drawerIcon: () => (
            <MaterialIcons name="home" size={30} color="#7209b7" />
          ),
        }}
      />
      <Drawer.Screen
        name="Account"
        component={Account}
        options={{
          drawerIcon: () => (
            <MaterialIcons name="person" size={30} color="#7209b7" />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
