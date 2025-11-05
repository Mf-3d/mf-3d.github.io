export type Card = {
  title: string,
  image?: string,
  description?: string,
  contents: CardContent[],
};

type MarkdownContent = {
  type: "md";
  text: string;
};

type LinkContent = {
  type: "link";
  links: { title: string; url: string }[];
};

// --- 今後ここに追加 ------------------
// type ImageContent = { type: "image"; src: string };
// type CodeContent  = { type: "code"; lang: string; code: string };
// -------------------------------------

type KnownCardContent = MarkdownContent | LinkContent;

type UnknownCardContent = {
  type: string;
  [k: string]: unknown;
};

type CardContent = KnownCardContent | UnknownCardContent;

export function isKnownCardContent(
  c: CardContent
): c is KnownCardContent {
  return c.type === "md" || c.type === "link";
}

export function isLinkContent(
  c: CardContent
): c is LinkContent {
  return c.type === "link";
}

export function isMarkdownContent(
  c: CardContent
): c is MarkdownContent {
  return c.type === "md";
}