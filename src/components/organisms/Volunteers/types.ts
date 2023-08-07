import type { Volunteer } from "@utils/volunteers";
import type { BoxProps } from "atoms/Box";

export type VolunteersProps = BoxProps & {
  volunteers: Volunteer[];
};
