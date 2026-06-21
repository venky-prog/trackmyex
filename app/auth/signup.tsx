import { Text, View } from "@/components/Themed";
import { Button, ButtonText } from "@/components/ui/button";
import { Center } from "@/components/ui/center";
import { ControllerInput } from "@/components/ui/controller/input";
import { FormControl } from "@/components/ui/form-control";
import { Heading } from "@/components/ui/heading/index.web";
import { Input, InputField } from "@/components/ui/input";
import { VStack } from "@/components/ui/vstack";
import { Link } from "expo-router";
import { useForm } from "react-hook-form";

function Signup() {
  const { control } = useForm({
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      dob: "",
      password: "",
      confirmPassword: "",
    },
  })
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
          <ControllerInput control={control} name='email' placeholder="Enter your email" />
          <ControllerInput control={control} name='firstName' placeholder="First name" />
          <ControllerInput control={control} name='lastName' placeholder="Last name" />
          <ControllerInput control={control} name='dob' placeholder="DOB: MM/DD/YYYY" />
          <ControllerInput control={control} name='password' placeholder="Enter your password" />
          <ControllerInput control={control} name='confirmPassword' placeholder="Confirm your password" />
          {/* <FormControl>
            <Input>
              <InputField placeholder="Last name" />
            </Input>
          </FormControl>
          <FormControl>
            <Input>
              <InputField placeholder="DOB: MM/DD/YYYY" />
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
          </FormControl> */}

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
