"use client";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import "@/global.css";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { DefaultTheme, ThemeProvider, Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";
import JSCookie from "js-cookie";
import { SetContextLink } from "@apollo/client/link/context";
import { SessionContextProvider } from "../context";

const authLink = new SetContextLink((prevContext, operation) => {
  const token = JSCookie.get("user_token");
  const headers = prevContext.headers || {};
  if (operation.operationName && ["Login"].includes(operation.operationName)) {
    return prevContext;
  }

  return {
    ...prevContext,
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const httpLink = new HttpLink({
  uri: "https://apis.falcon-head.org/graphql",
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [configLoading, setConfigLoading] = useState(true);
  const [context, setContext] = useState<{
    isAuthenticated: boolean;
    token: string | null;
  }>({
    isAuthenticated: false,
    token: null,
  });
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });
  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(()=>{
    const token = JSCookie.get("user_token");
    if(token) {
      setContext({
        isAuthenticated: true,
        token: token,
      });
    }
    setConfigLoading(false);
  },[])

  useEffect(() => {
    if (loaded || !configLoading) {
      SplashScreen.hideAsync();
    }
  }, [loaded, configLoading]);

  if (!loaded || configLoading) {
    return null;
  }

  return (
    <SessionContextProvider value={{ ...context, setContext }}>
      <ApolloProvider client={client}>
        <GluestackUIProvider>
          <ThemeProvider value={DefaultTheme}>
            <Stack
              screenOptions={{
                headerShown: false,
              }}
            >
              <Stack.Protected guard={context.isAuthenticated}>
                <Stack.Screen name="(app)" />
              </Stack.Protected>
              <Stack.Protected guard={!context.isAuthenticated}>
                <Stack.Screen name="/" />
                <Stack.Screen name="(auth)" />
              </Stack.Protected>
            </Stack>
          </ThemeProvider>
        </GluestackUIProvider>
      </ApolloProvider>
    </SessionContextProvider>
  );
}
