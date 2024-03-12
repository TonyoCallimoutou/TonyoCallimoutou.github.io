export interface Project {
  title: string;
  description: string;
  image: string;
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


