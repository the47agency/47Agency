export interface ProcessStep {
  n: string;
  t: string;
  d: string;
}

export const PROCESS: ProcessStep[] = [
  {
    n: '01',
    t: 'Understand',
    d: 'We understand the business, market, audience, challenges and objectives.',
  },
  {
    n: '02',
    t: 'Strategize',
    d: 'We define the strategy, channels, messaging, creative direction and campaign structure.',
  },
  {
    n: '03',
    t: 'Build',
    d: 'We create the content, creative assets, campaigns and digital materials.',
  },
  {
    n: '04',
    t: 'Launch',
    d: 'We launch campaigns, publish content and activate the strategy.',
  },
  {
    n: '05',
    t: 'Optimize',
    d: 'We monitor performance, analyze data, test, improve and scale.',
  },
];
