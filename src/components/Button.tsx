import clsx from "clsx";
import { ReactNode } from "react";
import { Marker } from "./Marker";

type ButtonProps = {
  text: string;
  containerClassName?: string;
  onClick?: () => void;
  icon?: ReactNode;
  href?: string;
  markerFill?: string;
};

type ButtonInnerProps = {
  text: string;
  icon?: ReactNode;
  markerFill?: string;
};

const ButtonInner = ({ icon, text, markerFill }: ButtonInnerProps) => (
  <>
    <span className="relative flex items-center min-h-[60px] px-4 g4 rounded-2xl inner-before group-hover:before:opacity-100 overflow-hidden">
      <span className="absolute -left-[1px]">
        <Marker markerFill={markerFill} />
      </span>

      {icon && (
        <span className="size-10 mx-2 border flex items-center justify-center border-white/10 rounded-xl z-20">
          {icon}
        </span>
      )}

      <span className="relative z-10 font-poppins base-bold text-cyan-300 uppercase">
        {text}
      </span>
    </span>

    <span className="glow-before glow-after" />
  </>
);

export const Button = ({
  icon,
  text,
  href,
  containerClassName,
  onClick,
  markerFill,
}: ButtonProps) => {
  return href ? (
    <a
      className={clsx(
        "relative p-0.5 g5 rounded-2xl shadow-500 group",
        containerClassName
      )}
      href={href}
    >
      <ButtonInner icon={icon} text={text} markerFill={markerFill} />
    </a>
  ) : (
    <button
      className={clsx(
        "relative p-0.5 g5 rounded-2xl shadow-500 group",
        containerClassName
      )}
      onClick={onClick}
    >
      <ButtonInner icon={icon} text={text} markerFill={markerFill} />
    </button>
  );
};
