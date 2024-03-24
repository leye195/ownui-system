import Input from "@ownui-system/components/Input";
import Text from "@ownui-system/components/Text";
import Flex from "@ownui-system/shared/Flex";
import Spacing from "@ownui-system/shared/Spacing";
import { colors } from "@ownui-system/styles/colors";
import {
  CSSProperties,
  ComponentProps,
  FocusEvent,
  forwardRef,
  useState,
} from "react";

export interface TextFieldProps extends Omit<ComponentProps<"input">, "size"> {
  label?: React.ReactNode;
  hasError?: boolean;
  helpMessage?: React.ReactNode;
  focusColor?: CSSProperties["color"];
  size?: "small" | "medium" | "large";
}
const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  function TextField(
    {
      label,
      hasError,
      helpMessage,
      size = "medium",
      focusColor = colors.gray300,
      onFocus,
      onBlur,
      ...props
    }: TextFieldProps,
    ref,
  ) {
    const [focused, setFocused] = useState(false);

    function handleFocus(e: FocusEvent<HTMLInputElement>) {
      setFocused(true);
      onFocus?.(e);
    }

    function handleBlur(e: FocusEvent<HTMLInputElement>) {
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
        <Input
          ref={ref}
          inValid={!!hasError}
          size={size}
          style={
            !hasError && focused
              ? {
                  borderColor: focusColor,
                }
              : {}
          }
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

export default TextField;
