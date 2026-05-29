export interface Service {
  id: string;
  title: string;
  description: string;
  detailedBenefit: string;
  icon: string;
}

export interface StoryboardScene {
  timeRange: string;
  seconds: [number, number];
  title: string;
  description: string;
  visualConcept: string;
  textOverlay: string;
}

export interface ReportItem {
  question: string;
  answer: string;
}
