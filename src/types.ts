export enum TabsTitles {
  FIND = 'Вакансии FE',
  ABOUT = 'Обо мне',
}

export enum Tabs {
  find = 'find',
  about = 'about',
}

export interface Tab {
  name: Tabs
  title: TabsTitles
  src?: string
}

export enum Currency {
  RUR = '₽',
  KZT = '₸',
  BYN = 'Br',
}

export interface Salary {
  from: number
  to: number | null
  currency: string
}

export enum ExperienceId {
  noExperience = 'noExperience',
  between1And3 = 'between1And3',
  between3And6 = 'between3And6',
  moreThan6 = 'moreThan6',
}

export enum ExperienceName {
  noExperience = 'Без опыта',
  between1And3 = 'Опыт 1 - 3 года',
  between3And6 = 'Опыт 3 - 6 лет',
  moreThan6 = 'Опыт более 6 лет',
}

export interface ExperienceOption {
  id: string
  name: string
}
export interface Area {
  id: string
  name: string
}
export interface Employer {
  id: string
  name: string
}

export enum WorkFormatId {
  ON_SITE = 'ON_SITE',
  REMOTE = 'REMOTE',
  HYBRID = 'HYBRID',
}

export const WorkFormatColors: Record<string, { bg: string; color: string }> = {
  ON_SITE: { bg: 'red', color: 'white' },
  REMOTE: { bg: 'blue', color: 'white' },
  HYBRID: { bg: 'yellow', color: 'gray' },
}

export enum WorkFormatName {
  ON_SITE = 'ОФИС',
  REMOTE = 'МОЖНО УДАЛЕННО',
  HYBRID = 'ГИБРИД',
}

export interface WorkFormatOption {
  id: string
  name: string
}

export interface Card {
  id: string
  name: string
  salary: Salary | null
  experience: ExperienceOption
  employer: Employer
  area: Area
  work_format: WorkFormatOption[]
  alternate_url: string
}
