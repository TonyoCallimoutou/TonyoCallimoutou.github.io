export interface Project {
  title: string;
  image: string;
  link: string;
  category: Category;
  stacks: Stack[] ;
}

export type Stack =
  "HTML" | "CSS" | "JavaScript" | "TypeScript" |
  "Angular" | "React" | "Vue" |
  "Node.js" | "Express" | "Golang" | "Java" | "Spring" | "Python" |
  "MongoDB" | "MySQL" | "PostgreSQL" | "GraphQL" | "REST API" |
  "Firebase" | "AWS" | "Azure" |
  "Docker" | "Kubernetes" |
  "Git" | "Jira" | "Confluence" | "Slack" | "Teams" |
  "Visual Studio Code" | "Eclipse" | "IntelliJ" | "Android Studio";

export type Type =
  "Mobile" | "Multiplatform" |
  "Web" | "Front" | "Back" | "Fullstack" |
  "DevOps";

export type Category =
  "Projects.category_0" | "Projects.category_1" | "Projects.category_2" | "Projects.category_3";


