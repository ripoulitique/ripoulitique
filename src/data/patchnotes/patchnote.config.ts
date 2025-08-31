import v1_0_0 from ".././patchnotes/2025-09-01.md?raw";

export interface PatchNote {
  id: string;
  title: string;
  date: string;
  content: string;
  version?: string;
}

export const patchNotesConfig: PatchNote[] = [
  {
    id: "2025-09-01",
    title: "Version 1.0.0 - Lancement officiel",
    date: "2025-09-01",
    version: "1.0.0",
    content: v1_0_0,
  },
];
