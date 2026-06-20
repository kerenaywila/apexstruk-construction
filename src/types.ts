export interface Project {
  id: string;
  title: string;
  category: 'Residential' | 'Commercial' | 'Infrastructure' | 'Industrial';
  location: string;
  state: 'Lagos' | 'Abuja' | 'Port Harcourt' | 'Edo' | 'Delta';
  completionYear: string;
  scope: string[];
  description: string;
  technicalSpecs: Record<string, string>;
  image: string;
}

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  subCapabilites: string[];
}

export interface Statistic {
  value: string;
  label: string;
  description: string;
}