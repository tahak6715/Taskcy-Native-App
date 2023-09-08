// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { View, Text, Button } from 'react-native';

// const Tab = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

// function ProfileScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Profile Screen</Text>
//     </View>
//   );
// }

// function NotificationsScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Notifications Screen</Text>
//     </View>
//   );
// }

// function SettingsScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Settings Screen</Text>
//     </View>
//   );
// }

// function DrawerContent({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Drawer Content</Text>
//       <Button onPress={() => navigation.closeDrawer()} title="Close Drawer" />
//     </View>
//   );
// }

// function BottomTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={HomeScreen} />
//       <Tab.Screen name="Profile" component={ProfileScreen} />
//       <Tab.Screen name="Drawer" component={DrawerNavigation} />
//       <Tab.Screen name="Notifications" component={NotificationsScreen} />
//       <Tab.Screen name="Settings" component={SettingsScreen} />
//     </Tab.Navigator>
//   );
// }

// function DrawerNavigation() {
//   return (
//     <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
//       <Drawer.Screen name="BottomTabs" component={BottomTabs} />
//     </Drawer.Navigator>
//   );
// }

// export default function BottomNav() {
//   return (
//     <NavigationContainer>
//       <DrawerNavigation />
//     </NavigationContainer>
//   );
// }
