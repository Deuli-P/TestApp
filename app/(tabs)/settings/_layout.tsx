import { Stack } from "expo-router";
import React from 'react';

const Layout = () => {
  return <Stack 
  screenOptions={
    {headerShown:false,
    headerTitle:"Options"}}/>;
};
export default Layout;