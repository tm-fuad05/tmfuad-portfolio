export type EducationTimelineKind = "ongoing" | "completed";

export interface EducationEntry {
  degree: string;
  institution: string;
  location: string;
  kind: EducationTimelineKind;
  /** Shown when kind is "ongoing" (e.g. "Ongoing") */
  statusLabel?: string;
  /** Shown when kind is "completed" */
  passingYear?: number;
}

export const educationEntries: EducationEntry[] = [
  {
    degree: "BSc in Computer Science and Engineering",
    institution: "East West University",
    location: "Dhaka",
    kind: "ongoing",
    statusLabel: "Ongoing",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Dhaka College",
    location: "Dhaka",
    kind: "completed",
    passingYear: 2025,
  },
];
