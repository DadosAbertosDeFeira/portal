import { Box, type BoxProps } from "atoms/Box";
import { Text } from "atoms/Text";
import classNames from "classnames";
import { forwardRef } from "react";

export type TagProps = BoxProps & {
  children: string;
};

export const Tag = forwardRef<HTMLDivElement, TagProps>(function Tag(
  { className, children, ...props },
  ref
) {
  return (
    <Box
      className={classNames("bg-[#f8f9fa] py-xs px-sm inline-block", className)}
      {...props}
      ref={ref}
    >
      <Text className="text-xs text-[#656f78]">{children}</Text>
    </Box>
  );
});
