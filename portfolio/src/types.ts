export interface Project {
  _id: string;
  name: string;
  title: string;
  url: string;
  img: string;
  tech: string[];
}
export type FormDatas = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export interface Skill {
  _id: string;
  name: string;
  icon: string;
  __v: number;
}

export interface ApiResponse<T> {
  data: T[];
  status: string;
}

export type ProjectsResponse = ApiResponse<Project>;
export type SkillsResponse = ApiResponse<Skill>;

export interface LoaderData {
  skill: SkillsResponse;
  project: ProjectsResponse;
}
