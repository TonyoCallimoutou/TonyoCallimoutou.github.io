export interface Project {
  title: string;
  image: string;
  link: string;
  category: ProjectCategory;
  stacks: ProjectStack[] ;
}

export enum ProjectStack {
  HTML = "HTML",
  CSS = "CSS",
  JAVASCRIPT = "JavaScript",
  TYPESCRIPT = "TypeScript",
  ANGULAR = "Angular",
  REACT = "React",
  VUE = "Vue",
  NODEJS = "Node.js",
  EXPRESS = "Express",
  GOLANG = "Golang",
  JAVA = "Java",
  SPRING = "Spring",
  PYTHON = "Python",
  MONGODB = "MongoDB",
  MYSQL = "MySQL",
  POSTGRESQL = "PostgreSQL",
  GRAPHQL = "GraphQL",
  RESTAPI = "REST API",
  FIREBASE = "Firebase",
  AWS = "AWS",
  AZURE = "Azure",
  DOCKER = "Docker",
  KUBERNETES = "Kubernetes",
  GIT = "Git",
  JIRA = "Jira",
  CONFLUENCE = "Confluence",
  SLACK = "Slack",
  TEAMS = "Teams",
  VISUAL_STUDIO_CODE = "Visual Studio Code",
  ECLIPSE = "Eclipse",
  INTELLIJ = "IntelliJ",
  ANDROID_STUDIO = "Android Studio"
}

// Category is like personal / EFREI / OpenClassrooms / etc.
export enum ProjectCategory {
  CATEGORY_0 = "Projects.category_0",
  CATEGORY_1 = "Projects.category_1",
  CATEGORY_2 = "Projects.category_2",
  CATEGORY_3 = "Projects.category_3"
}

