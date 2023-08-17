import type { ComponentPropsWithRef } from "react";

import type { VolunteerModel } from "@/models/VolunteerModel";

export type VolunteersProps = ComponentPropsWithRef<"div"> & {
  volunteers: VolunteerModel[];
};
