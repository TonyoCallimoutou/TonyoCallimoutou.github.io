export interface EventItem {
  category: "degree" | "experience";
  title: string;
  image?: string;
  date: string;
  where: string;
  description: string;
  bulletPoint?: string[];
}
