import { useSession } from "@/context";
import { Redirect, Stack } from "expo-router";

export default function AuthLayout() {
    const { isAuthenticated } = useSession();
    console.log("AuthLayout isAuthenticated", isAuthenticated);
    if(isAuthenticated) {
        return <Redirect href={"/(app)/(tabs)/tab1"} />
    }
    return (
        <Stack />
    )
}