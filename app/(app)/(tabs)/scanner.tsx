import EditScreenInfo from "@/components/EditScreenInfo";
import { Center } from "@/components/ui/center";
import { CameraView } from "expo-camera";
import { Divider } from "@/components/ui/divider";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";

export default function Tab2() {
  return (
    <Center className="flex-1">
      <CameraView
        style={{ width: 300, height: 250 }}
        barcodeScannerSettings={{
          barcodeTypes: ["qr"],
        }}
        onBarcodeScanned={(result)=>{
          window.alert('result captured from qr: ' + JSON.stringify(result))
          console.log('result captured from qr', result)
        }}
      />
    </Center>
  );
}
