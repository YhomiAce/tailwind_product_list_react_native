import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Switch, Text, View } from "react-native";
import { useColorScheme } from "nativewind";
import ProductsLists from "./components/ProductsLists";

export default function App() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-gray-200 dark:bg-black pt-16">
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
      <View className="flex-row w-full gap-5">
        <Text className="text-2xl font-bold dark:text-white">
          New Collection
        </Text>
        <Switch value={colorScheme === "dark"} onChange={toggleColorScheme} />
      </View>
      <ProductsLists />
    </SafeAreaView>
  );
}
