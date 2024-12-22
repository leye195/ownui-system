import useTimeout from "@ownui-system/hooks/useTimeout";
import Flex from "@ownui-system/shared/Flex";
import { cn } from "@ownui-system/styles/util";
import { AnimatePresence, LazyMotion, domAnimation, m } from "framer-motion";
import { useState } from "react";

import useSnackBarContext from "./snackbar-context";
import SnackBarProvider from "./snackbar-provider";
import {
  baseStyle,
  itemPositionStyle,
  itemStyle,
  withActionStyle,
  withoutActionStyle,
} from "./snackbar-style";
import { slideInOut } from "./snackbar-transition";
import SwitchCase from "../shared/SwitchCase";

type SnackBarProps = {
  className?: string;
};

function SuccessIcon() {
  return (
    <svg
      fill="none"
      height="18"
      viewBox="0 0 18 18"
      width="18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Icon Check Wrapper">
        <circle cx="9" cy="9" fill="#01C009" id="Ellipse 60" r="9" />
        <path
          clipRule="evenodd"
          d="M13.2674 5.96334C13.5733 6.26338 13.5781 6.7546 13.2781 7.06052L8.40803 12.026C8.26212 12.1748 8.06249 12.2586 7.85411 12.2586C7.64573 12.2586 7.44611 12.1748 7.30019 12.026L4.72194 9.39724C4.42191 9.09132 4.42668 8.60009 4.7326 8.30005C5.03852 8.00002 5.52974 8.00479 5.82978 8.31071L7.85411 10.3747L12.1702 5.97399C12.4703 5.66807 12.9615 5.6633 13.2674 5.96334Z"
          fill="#3E4045"
          fillRule="evenodd"
          id="Check"
        />
      </g>
    </svg>
  );
}

function DangerIcon() {
  return (
    <svg
      fill="none"
      height="18"
      viewBox="0 0 18 18"
      width="18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_29608_85298)" id="alert/round fill">
        <circle cx="9" cy="9.00122" fill="#FF5C5C" id="Vector" r="9" />
        <path
          clipRule="evenodd"
          d="M9.83669 3.79243C9.83669 3.33041 9.46215 2.95587 9.00013 2.95587C8.53811 2.95587 8.16357 3.33041 8.16357 3.79243V10.2874C8.16357 10.7494 8.53811 11.124 9.00013 11.124C9.46215 11.124 9.83669 10.7494 9.83669 10.2874V3.79243ZM10.137 13.646C10.137 14.2738 9.62798 14.7826 9.00012 14.7826C8.37226 14.7826 7.86328 14.2738 7.86328 13.646C7.86328 13.0183 8.37226 12.5094 9.00012 12.5094C9.62798 12.5094 10.137 13.0183 10.137 13.646Z"
          fill="#3E4045"
          fillRule="evenodd"
          id="Union"
        />
      </g>
      <defs>
        <clipPath id="clip0_29608_85298">
          <rect fill="white" height="18" width="18" />
        </clipPath>
      </defs>
    </svg>
  );
}

function SnackBar({ className }: SnackBarProps) {
  const { useContext } = useSnackBarContext();
  const { isOpen, message, action, type, delay, zIndex, closeSnackBar } =
    useContext();
  const [isAnimationCompleted, setIsAnimationCompleted] = useState(false);

  useTimeout(
    {
      callback: () => {
        closeSnackBar();
        setIsAnimationCompleted(false);
      },
      enabled: isAnimationCompleted,
      delay,
    },
    [isAnimationCompleted],
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <LazyMotion features={domAnimation}>
          <div className={cn(baseStyle)}>
            <m.div
              animate="enter"
              className={cn(
                itemStyle,
                itemPositionStyle,
                action ? withActionStyle : withoutActionStyle,
                className,
              )}
              exit="exit"
              initial="exit"
              style={{
                "--zIndex": zIndex,
              }}
              variants={slideInOut}
              onAnimationComplete={() => {
                setIsAnimationCompleted(true);
              }}
            >
              <Flex className="items-center gap-2.5">
                <SwitchCase
                  caseBy={{
                    success: <SuccessIcon />,
                    danger: <DangerIcon />,
                  }}
                  defaultComponent={null}
                  value={type ?? "normal"}
                />
                <span className="font-semibold leading-6 text-lg">
                  {message}
                </span>
              </Flex>
              {action && (
                <button
                  className="px-4 h-8 rounded-3xl bg-gray-600 text-white"
                  onClick={action.callback}
                >
                  {action.name}
                </button>
              )}
            </m.div>
          </div>
        </LazyMotion>
      )}
    </AnimatePresence>
  );
}

SnackBar.Provider = SnackBarProvider;

export default SnackBar;
