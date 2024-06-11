import { Button } from "@/components/ui/button";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";

const TryOnButton = () => {
  const router = useRouter();
  return (
    // <Sheet>
    //   <SheetTrigger asChild>
    //     <Button className="w-32">
    //       3D Try On
    //       <ArrowTopRightIcon className="w-4 h-4 ml-1" />
    //     </Button>
    //   </SheetTrigger>
    //   <SheetContent>
    //     <SheetHeader>
    //       <SheetTitle>3D Try On?</SheetTitle>
    //       <SheetDescription>
    //         We&apos;re excited to show you how our clothes will look on you
    //       </SheetDescription>
    //     </SheetHeader>
    //     <iframe
    //       src="https://yisol-idm-vton.hf.space"
    //       // frameborder="0"
    //       frameBorder="0"
    //       className="w-full h-full mt-6"
    //     ></iframe>
    //   </SheetContent>
    // </Sheet>
    <Button
      className="w-32"
      // TODO: REPLACE this with our HF Space url
      onClick={() =>
        router.push("https://huggingface.co/spaces/yisol/IDM-VTON")
      }
    >
      3D Try On
      <ArrowTopRightIcon className="w-4 h-4 ml-1" />
    </Button>
  );
};

export default TryOnButton;
