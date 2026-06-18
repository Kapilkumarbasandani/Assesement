import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  href?: string;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: { height: 40, width: 120, className: "h-10 w-auto" },
  md: { height: 48, width: 144, className: "h-12 w-auto" },
  lg: { height: 72, width: 216, className: "h-[4.5rem] w-auto" },
};

export function Logo({ href = "/", size = "md" }: LogoProps) {
  const { height, width, className } = sizes[size];

  return (
    <Link
      href={href}
      className="inline-flex items-center group transition-transform group-hover:scale-[1.02]"
    >
      <Image
        src="/asteya-logo.png"
        alt="Asteya — Spirit & Emotion & Physical · Social Sector"
        width={width}
        height={height}
        className={`${className} object-contain rounded-lg`}
        priority
      />
    </Link>
  );
}
