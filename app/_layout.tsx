import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

SplashScreen.setOptions({
  duration: 1000,
  fade: true,
});

export default function RootLayout() {

  useEffect(() => {
    const prepare = async () => {
      // Keep the splash screen visible while resources are being loaded 

      setTimeout(() => {
        // Hide splash screen after a delay
        SplashScreen.hideAsync();
      }, 2000); // Adjust delay as needed
    };
    prepare();
  }, []);

  return <Stack />;
}
