import Image from "next/image";
import loader from "@/assets/loader.gif";

type Props = {};
export default function LoadingPage({}: Props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Image src={loader} height={150} width={150} alt="Loading..." />
    </div>
  );
}