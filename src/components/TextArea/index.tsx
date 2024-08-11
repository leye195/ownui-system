import Text from "@ownui-system/components/Text";
import Flex from "@ownui-system/shared/Flex";
import Spacing from "@ownui-system/shared/Spacing";
import { colors } from "@ownui-system/styles/colors";
import { cn } from "@ownui-system/styles/util";
import {
  forwardRef,
  type CSSProperties,
  type ComponentProps,
  useState,
  type FocusEvent,
} from "react";
import { baseStyle, inValidStyle, textAreaSizeMap } from "./TextArea.style";

export interface TextAreaProps
  extends Omit<ComponentProps<"textarea">, "size"> {
  label?: React.ReactNode;
  hasError?: boolean;
  helpMessage?: React.ReactNode;
  focusColor?: CSSProperties["color"];
  size?: "small" | "large";
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  function TextArea(
    {
      label,
      hasError,
      helpMessage,
      size = "large",
      focusColor = colors.gray400,
      onFocus,
      onBlur,
      ...props
    },
    ref,
  ) {
    const [focused, setFocused] = useState(false);

    function handleFocus(e: FocusEvent<HTMLTextAreaElement>) {
      setFocused(true);
      onFocus?.(e);
    }

    function handleBlur(e: FocusEvent<HTMLTextAreaElement>) {
      setFocused(false);
      onBlur?.(e);
    }

    return (
      <Flex direction="column">
        {label ? (
          <>
            <Text color={colors.black} fontSize="14px" fontWeight={600}>
              {label}
            </Text>
            <Spacing direction="horizontal" size={6} />
          </>
        ) : null}
        <textarea
          ref={ref}
          className={cn(
            !props.disabled && hasError ? inValidStyle : baseStyle,
            textAreaSizeMap[size],
            props.disabled ? `bg-[#fafafa]` : ``,
          )}
          style={{
            borderColor: !hasError && focused ? focusColor : undefined,
          }}
          onBlur={handleBlur}
          onFocus={handleFocus}
          {...props}
        />
        {helpMessage ? (
          <>
            <Spacing direction="horizontal" size={4} />
            <Text
              color={hasError ? colors.red200 : colors.gray600}
              fontSize={size === "small" ? "12px" : "14px"}
            >
              {helpMessage}
            </Text>
          </>
        ) : null}
      </Flex>
    );
  },
);

export default TextArea;
