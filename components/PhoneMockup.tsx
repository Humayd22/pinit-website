import Image from "next/image";

export default function PhoneMockup() {
  return (
    <div className="mx-auto w-full max-w-[360px]">
      <Image
        src="/Mockup.png"
        alt="The Pin!t app showing saved places organised by category"
        width={390}
        height={844}
        priority
        className="h-auto max-h-[480px] w-full object-contain"
      />
    </div>
  );
}
