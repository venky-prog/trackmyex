import { Text, View } from "@/components/Themed";
import Cookie from "js-cookie";
import { Button, ButtonSpinner, ButtonText } from "@/components/ui/button";
import { Center } from "@/components/ui/center";
import { ControllerInput } from "@/components/ui/controller/input";
import { Heading } from "@/components/ui/heading/index.web";
import { VStack } from "@/components/ui/vstack";
import { Link } from "expo-router";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@apollo/client/react";
import { LoginDocument } from "@/schemas/login.generated";
import {
  Toast,
  ToastDescription,
  ToastTitle,
  useToast,
} from "@/components/ui/toast";
import { useSession } from "@/context";

const loginSchema = Yup.object({
  email: Yup.string().required().email(""),
  password: Yup.string().required(),
});

type LoginSchemaType = Yup.InferType<typeof loginSchema>;

function Login() {
  const toast = useToast();
  const { setContext } = useSession();
  const [login, { data: loginMutationData, error: loginMutationError }] =
    useMutation(LoginDocument);
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(loginSchema),
  });

  const submit = async (input: LoginSchemaType) => {
    try {
      const result = await login({
        variables: {
          input,
        },
      });
      if (loginMutationError) {
        throw new Error(loginMutationError.message);
      }

      if (result?.data?.login?.token) {
        Cookie.set("user_token", result?.data?.login?.token, {
          expires: 7,
          secure: false,
          sameSite: "strict",
        });
        setContext({
          isAuthenticated: true,
          token: result?.data?.login?.token,
        });
      }
    } catch (error) {
      console.log(error);
      toast.show({
        id: "login-error",
        placement: "top",
        render: ({ id }) => (
          <Toast nativeID={id} className="w-full" variant="outline">
            <ToastTitle className="color-error-400" bold>
              Login failed!
            </ToastTitle>
            <ToastDescription>Please try later.</ToastDescription>
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
            Welcome.
          </Heading>
          <Text className="text-primary-600 text-2xl font-extralight">
            Glad to see you amigo!
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
            name="password"
            placeholder="password"
          />
          <Button onPress={handleSubmit(submit)}>
            {isSubmitting ? (
              <ButtonSpinner color={"#FFF"} />
            ) : (
              <ButtonText>Login</ButtonText>
            )}
          </Button>
          <Button variant="link">
            <Link href={"/forgot-password"} asChild>
              <ButtonText>Forgot Password?</ButtonText>
            </Link>
          </Button>
        </VStack>
      </VStack>
    </Center>
  );
}

export default Login;
