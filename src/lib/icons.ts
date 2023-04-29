import { z } from "astro:content";

type Mutable<Type> = {
  -readonly [Key in keyof Type]: Type[Key];
};

type Rec<K extends keyof any, T> = {
  [P in K]?: T;
};

export const techIcons = [
  "rust",
  "typescript",
  "github",
  "vscode",
  "c",
  "microchip",
  "avr",
  "raspi",
  "python",
  "react",
  "nextjs",
  "github",
  "html5",
  "css3",
] as const;
const techIconsSet = new Set(techIcons);

type MutIcon = Mutable<typeof techIcons>;
export type Icon = (typeof techIcons)[number];

export const iconContent = z.enum(techIcons);
export const techParser = z.string().transform((val, ctx) => {
  const output: Icon[] = [];
  for (const tech of val.split(",")) {
    const valueToBeTested = tech.trim().toLowerCase() as Icon;
    if (!techIconsSet.has(valueToBeTested)) {
      ctx.addIssue({
        code: z.ZodIssueCode.invalid_enum_value,
        options: techIcons as MutIcon,
        received: tech,
        message: `Invalid tech: ${tech}|${valueToBeTested}`,
      });
      return z.NEVER;
    }
    output.push(valueToBeTested);
  }
  return output;
});

const techIconDictionary: Rec<Icon, string> = {
  github: "cib:github",
  rust: "cib:rust",
  typescript: "cib:typescript",
  vscode: "ic:baseline-question-mark",
  c: "cib:c",
  microchip: "ic:baseline-question-mark",
  avr: "ic:baseline-question-mark",
  raspi: "ic:baseline-question-mark",
  python: "cib:python",
  react: "cib:react",
  nextjs: "ic:baseline-question-mark",
  html5: "cib:html5",
  css3: "cib:css3",
};

export const getTechIcon = (icon?: Icon) => {
  if (!icon) return;
  return techIconDictionary[icon] ?? icon;
};
