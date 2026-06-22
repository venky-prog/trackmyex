import { Text, View } from "@/components/Themed";
import { Button, ButtonText } from "@/components/ui/button";
import { Center } from "@/components/ui/center";
import { ControllerInput } from "@/components/ui/controller/input";
import { FormControl } from "@/components/ui/form-control";
import { Heading } from "@/components/ui/heading/index.web";
import { Input, InputField } from "@/components/ui/input";
import { VStack } from "@/components/ui/vstack";
import { useMutation } from "@apollo/client/react";
import { Link } from "expo-router";
import { useForm } from "react-hook-form";
import { CreateUserDocument, CreateUserInput, CreateUserMutation } from "@/generated/graphql";
import { Alert, AlertIcon, AlertText } from "@/components/ui/alert";
import { InfoIcon } from "@/components/ui/icon";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { DATE_REGEX, dateErrorMessage } from "@/utils/constants";
import {
  Toast,
  ToastDescription,
  ToastTitle,
  useToast,
} from "@/components/ui/toast";

const userSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  dob: Yup.string()
    .matches(DATE_REGEX, dateErrorMessage)
    .required("Date of birth is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
});

function Signup() {
  const toast = useToast();
  const [createUser, { loading, data, error: mutationError }] =
    useMutation(CreateUserDocument);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      dob: "",
      password: "",
      confirmPassword: "",
    },
    resolver: yupResolver(userSchema),
  });

  console.log(errors);

  const onSubmit = (input: any) => {
    try {
      createUser({
        variables: {
          firstName: input.firstName,
          lastName: input.lastName,
          email: input.email,
          password: input.password,
          dob: input.dob
        }
      });
      console.log(data, mutationError);
      if (mutationError) {
        throw new Error(mutationError.message);
      }
    } catch (error) {
      console.log(error);
      toast.show({
        id: "signup-error",
        placement: "top",
        render: ({ id }) => (
          <Toast nativeID={id} className="w-full" variant="outline">
            <ToastTitle className="color-error-400" bold>
              Error creating account!
            </ToastTitle>
            <ToastDescription>Please try again.</ToastDescription>
          </Toast>
        ),
      });
    }
  };
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
          <ControllerInput
            control={control}
            name="email"
            placeholder="Enter your email"
          />
          <ControllerInput
            control={control}
            name="firstName"
            placeholder="First name"
          />
          <ControllerInput
            control={control}
            name="lastName"
            placeholder="Last name"
          />
          <ControllerInput
            control={control}
            name="dob"
            placeholder="DOB: MM/DD/YYYY"
          />
          <ControllerInput
            control={control}
            name="password"
            placeholder="Enter your password"
          />
          <ControllerInput
            control={control}
            name="confirmPassword"
            placeholder="Confirm your password"
          />

          <Button
            onPress={handleSubmit(onSubmit, (errors) => console.log(errors))}
            disabled={loading}
          >
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
