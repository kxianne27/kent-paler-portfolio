import Image from "next/image";

export function HeroImage() {
  return (
    <div className="flex justify-center lg:justify-end">
      <div className="relative h-[430px] w-[340px] overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-2xl">
        <Image
          src="/images/profile.jpg"
          alt="Kent Niño Paler"
          fill
          priority
          className="object-cover"
        />
      </div>
    </div>
  );
}
