import type { Volunteer } from "@utils/volunteers";
import type { ComponentPropsWithRef } from "react";

export type VolunteersProps = ComponentPropsWithRef<"div"> & {
  volunteers: Volunteer[];
};
