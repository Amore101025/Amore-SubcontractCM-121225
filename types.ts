export type Language = 'en' | 'zh';

export type ArtistKey = 
  | 'mondrian' | 'vangogh' | 'monet' | 'picasso' | 'warhol' 
  | 'dali' | 'davinci' | 'hokusai' | 'pollock' | 'rembrandt'
  | 'matisse' | 'klimt' | 'munch' | 'kahlo' | 'basquiat'
  | 'banksy' | 'okeeffe' | 'hopper' | 'vermeer' | 'lichtenstein';

export interface ThemeColors {
  bg: string;
  cardBg: string;
  text: string;
  subText: string;
  accent: string;
  accentSecondary: string;
  border: string;
}

export interface ArtistStyle {
  key: ArtistKey;
  name: string;
  description: string;
  colors: {
    light: ThemeColors;
    dark: ThemeColors;
  };
  font: 'sans' | 'serif' | 'display';
  borderRadius: string;
  borderWidth: string;
  shadow: string;
  texture?: string; // CSS class for background texture
}

export interface Translation {
  title: string;
  subtitle: string;
  systemOverview: string;
  appProcess: string;
  selectStyle: string;
  targetAudience: string;
  class23: string;
  modes: string;
  online: string;
  offline: string;
  futurePlans: string;
  smartApp: string;
  class1: string;
  stepTitle: string;
  step1: string;
  step2: string;
  step3: string;
  step4: string;
  step5: string;
  payment: string;
  paymentNote: string;
  charts: {
    submissionMode: string;
    processingTime: string;
    errorAnalysis: string;
    userGrowth: string;
    timeline: string;
  }
}