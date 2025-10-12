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
  // Sort projects by year (descending) and then by status (in-progress first)
  return getPortfolioData().projects.sort((a, b) => {
    // First, sort by year (newest first)
    if (b.year !== a.year) {
      return b.year - a.year;
    }
    // If years are equal, in-progress comes before completed
    if (a.status === 'in-progress' && b.status === 'completed') {
      return -1;
    }
    if (a.status === 'completed' && b.status === 'in-progress') {
      return 1;
    }
    return 0;
  });
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
