import { Text, View } from "@/components/Themed";
import { Center } from "@/components/ui/center/index.web";
import Logo from "../assets/icons/Logo";
import { VStack } from "@/components/ui/vstack";
import { Button, ButtonText } from "@/components/ui/button";
import { Link } from "expo-router";

export default function Homepage() {
  return (
    <Center className="flex-1 justify-center p-4 px-4">
      <VStack className="flex-1 w-full justify-center items-center" space="4xl">
        <View className="items-center">
          <Logo width={100} height={100} />
          <Text className="mt-2 text-2xl font-bold">TrackmyEx</Text>
        </View>
        <VStack className=" my-10 w-full px-4" space="md">
          <Link href={"/auth/login"} asChild>
            <Button>
              <ButtonText>Login</ButtonText>
            </Button>
          </Link>

          <Link href={"/auth/signup"} asChild>
            <Button variant="outline">
              <ButtonText>Sign Up</ButtonText>
            </Button>
          </Link>   
        </VStack>
      </VStack>
      <View className="mt-auto">
        <Text className="mt-4 text-center text-sm text-gray-500">
          By logging in, you agree to our Terms of Service and Privacy Policy.
        </Text>
      </View>
    </Center>
  );
}
