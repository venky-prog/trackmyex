import { Text, View } from "@/components/Themed";
import { Button, ButtonText } from "@/components/ui/button";
import { Center } from "@/components/ui/center";
import { FormControl } from "@/components/ui/form-control";
import { Heading } from "@/components/ui/heading/index.web";
import { Input, InputField } from "@/components/ui/input";
import { VStack } from "@/components/ui/vstack";
import { Link } from "expo-router";

function Signup() {
  return (
    <Center className="flex-1 justify-center p-4 px-4">
      <VStack space="4xl" className="w-full">
        <View className="w-full px-4 items-center">
          <Heading className="text-primary-400" size="lg">
            Create Account
          </Heading>
          <Text className="text-primary-600 text-2xl font-extralight">
            to get started now!
          </Text>
        </View>
        <VStack space="md" className="w-full px-4">
          <FormControl>
            <Input>
              <InputField placeholder="Enter your email" />
            </Input>
          </FormControl>
          <FormControl>
            <Input>
              <InputField placeholder="Enter your email" />
            </Input>
          </FormControl>
          <FormControl>
            <Input>
              <InputField placeholder="Enter your password" />
            </Input>
          </FormControl>
          <FormControl>
            <Input>
              <InputField placeholder="Enter your confirm password" />
            </Input>
          </FormControl>

          <Button>
            <ButtonText>Sign Up</ButtonText>
          </Button>
          <Button variant="link">
            <Link href={"/auth/login"} asChild>
              <ButtonText>Sign In</ButtonText>
            </Link>
          </Button>
        </VStack>
      </VStack>
    </Center>
  );
}

export default Signup;
