import Image from "next/image";
import { initials } from "@/data/portfolio";

const SIZES = {
  sm: "h-10 w-10 text-xs md:h-12 md:w-12 md:text-sm",
  md: "h-16 w-16 text-lg",
};

// A company/project logo on a square tile, or the name's initials when there is no logo.
// `logoBg` lets a light (e.g. white) logo sit on a dark tile.
const LogoTile = ({ logo, logoBg = "#ffffff", name, size = "sm", className = "" }) => {
  if (logo) {
    return (
      <div style={{ backgroundColor: logoBg }} className={`relative shrink-0 overflow-hidden ${SIZES[size]} ${className}`}>
        <div className="absolute inset-1.5">
          <Image src={logo} alt={`${name} logo`} fill sizes="64px" className="object-contain" />
        </div>
      </div>
    );
  }

  return (
    <div
      aria-hidden="true"
      className={`rule grid shrink-0 place-items-center border-2 font-bold ${SIZES[size]} ${className}`}
    >
      {initials(name)}
    </div>
  );
};

export default LogoTile;
