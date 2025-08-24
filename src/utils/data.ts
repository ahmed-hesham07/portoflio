import { PortfolioData } from '@/types';
import portfolioData from '@/data/portfolio.json';

export const getPortfolioData = (): PortfolioData => {
  return portfolioData as PortfolioData;
};

export const getPersonalInfo = () => {
  return getPortfolioData().personal;
};

export const getSkills = () => {
  return getPortfolioData().skills;
};

export const getProjects = () => {
  return getPortfolioData().projects;
};

export const getProjectBySlug = (slug: string) => {
  return getPortfolioData().projects.find(project => project.slug === slug);
};

export const getExperience = () => {
  return getPortfolioData().experience;
};

export const getEducation = () => {
  return getPortfolioData().education;
};

export const getAchievements = () => {
  return getPortfolioData().achievements;
};

export const getCVData = () => {
  return getPortfolioData().cv;
};
