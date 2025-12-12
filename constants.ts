import { ArtistStyle, Translation, Language } from './types';

export const ARTIST_STYLES: ArtistStyle[] = [
  {
    key: 'mondrian',
    name: 'Mondrian',
    description: 'De Stijl: Primary colors, grids, black lines.',
    font: 'sans',
    borderRadius: 'rounded-none',
    borderWidth: 'border-4',
    shadow: 'shadow-none',
    colors: {
      light: { bg: 'bg-white', cardBg: 'bg-gray-50', text: 'text-black', subText: 'text-gray-700', accent: 'bg-red-600', accentSecondary: 'bg-blue-600', border: 'border-black' },
      dark: { bg: 'bg-gray-900', cardBg: 'bg-black', text: 'text-white', subText: 'text-gray-300', accent: 'bg-red-700', accentSecondary: 'bg-yellow-500', border: 'border-white' }
    }
  },
  {
    key: 'vangogh',
    name: 'Van Gogh',
    description: 'Post-Impressionism: Swirling blues and yellows.',
    font: 'serif',
    borderRadius: 'rounded-2xl',
    borderWidth: 'border-2',
    shadow: 'shadow-xl',
    texture: 'texture-canvas',
    colors: {
      light: { bg: 'bg-sky-100', cardBg: 'bg-yellow-50', text: 'text-slate-900', subText: 'text-slate-700', accent: 'bg-blue-700', accentSecondary: 'bg-amber-400', border: 'border-blue-800' },
      dark: { bg: 'bg-slate-900', cardBg: 'bg-slate-800', text: 'text-yellow-100', subText: 'text-yellow-200', accent: 'bg-amber-500', accentSecondary: 'bg-blue-600', border: 'border-amber-300' }
    }
  },
  {
    key: 'monet',
    name: 'Monet',
    description: 'Impressionism: Soft pastels, light, no harsh lines.',
    font: 'serif',
    borderRadius: 'rounded-xl',
    borderWidth: 'border',
    shadow: 'shadow-lg shadow-purple-200/50',
    colors: {
      light: { bg: 'bg-purple-50', cardBg: 'bg-white/80 backdrop-blur', text: 'text-gray-700', subText: 'text-gray-500', accent: 'bg-pink-300', accentSecondary: 'bg-green-200', border: 'border-pink-200' },
      dark: { bg: 'bg-slate-800', cardBg: 'bg-slate-700/80 backdrop-blur', text: 'text-pink-100', subText: 'text-pink-200', accent: 'bg-purple-500', accentSecondary: 'bg-teal-500', border: 'border-purple-400' }
    }
  },
  {
    key: 'warhol',
    name: 'Warhol',
    description: 'Pop Art: High contrast, neon colors, repetition.',
    font: 'sans',
    borderRadius: 'rounded-none',
    borderWidth: 'border-0',
    shadow: 'shadow-[8px_8px_0_0_rgba(0,0,0,1)]',
    colors: {
      light: { bg: 'bg-yellow-300', cardBg: 'bg-pink-400', text: 'text-black', subText: 'text-gray-900', accent: 'bg-cyan-400', accentSecondary: 'bg-lime-400', border: 'border-black' },
      dark: { bg: 'bg-purple-900', cardBg: 'bg-fuchsia-600', text: 'text-yellow-300', subText: 'text-yellow-100', accent: 'bg-green-400', accentSecondary: 'bg-orange-500', border: 'border-white' }
    }
  },
  {
    key: 'hokusai',
    name: 'Hokusai',
    description: 'Ukiyo-e: Prussian blue, cream, nature tones.',
    font: 'serif',
    borderRadius: 'rounded-lg',
    borderWidth: 'border-2',
    shadow: 'shadow-md',
    texture: 'texture-paper',
    colors: {
      light: { bg: 'bg-orange-50', cardBg: 'bg-stone-100', text: 'text-slate-800', subText: 'text-slate-600', accent: 'bg-sky-800', accentSecondary: 'bg-red-700', border: 'border-slate-800' },
      dark: { bg: 'bg-slate-900', cardBg: 'bg-slate-800', text: 'text-stone-100', subText: 'text-stone-300', accent: 'bg-sky-500', accentSecondary: 'bg-red-500', border: 'border-stone-400' }
    }
  },
  {
    key: 'picasso',
    name: 'Picasso',
    description: 'Cubism: Fragmented shapes, mismatched angles.',
    font: 'sans',
    borderRadius: 'rounded-none',
    borderWidth: 'border-2',
    shadow: 'shadow-lg',
    colors: {
      light: { bg: 'bg-stone-200', cardBg: 'bg-white', text: 'text-black', subText: 'text-gray-800', accent: 'bg-orange-600', accentSecondary: 'bg-gray-500', border: 'border-black' },
      dark: { bg: 'bg-gray-800', cardBg: 'bg-gray-700', text: 'text-white', subText: 'text-gray-300', accent: 'bg-orange-500', accentSecondary: 'bg-blue-400', border: 'border-white' }
    }
  },
  {
    key: 'dali',
    name: 'Dalí',
    description: 'Surrealism: Dreamy, melting shapes, orange/gold.',
    font: 'display',
    borderRadius: 'rounded-[30px_10px_40px_15px]',
    borderWidth: 'border',
    shadow: 'shadow-2xl',
    colors: {
      light: { bg: 'bg-orange-100', cardBg: 'bg-amber-50', text: 'text-amber-900', subText: 'text-amber-700', accent: 'bg-orange-500', accentSecondary: 'bg-sky-400', border: 'border-amber-600' },
      dark: { bg: 'bg-amber-900', cardBg: 'bg-amber-800', text: 'text-orange-100', subText: 'text-orange-200', accent: 'bg-orange-400', accentSecondary: 'bg-purple-400', border: 'border-orange-300' }
    }
  },
  {
    key: 'banksy',
    name: 'Banksy',
    description: 'Street Art: Grayscale stencils with red accents.',
    font: 'sans',
    borderRadius: 'rounded-sm',
    borderWidth: 'border-4',
    shadow: 'shadow-xl',
    texture: 'texture-noise',
    colors: {
      light: { bg: 'bg-stone-300', cardBg: 'bg-stone-100', text: 'text-black', subText: 'text-gray-800', accent: 'bg-red-600', accentSecondary: 'bg-black', border: 'border-black' },
      dark: { bg: 'bg-black', cardBg: 'bg-stone-900', text: 'text-white', subText: 'text-gray-400', accent: 'bg-red-600', accentSecondary: 'bg-gray-600', border: 'border-gray-500' }
    }
  },
  {
    key: 'matisse',
    name: 'Matisse',
    description: 'Fauvism: Cut-outs, organic shapes, vibrant.',
    font: 'sans',
    borderRadius: 'rounded-3xl',
    borderWidth: 'border-0',
    shadow: 'shadow-none',
    colors: {
      light: { bg: 'bg-blue-500', cardBg: 'bg-white', text: 'text-blue-900', subText: 'text-blue-800', accent: 'bg-red-500', accentSecondary: 'bg-yellow-400', border: 'border-transparent' },
      dark: { bg: 'bg-indigo-900', cardBg: 'bg-blue-800', text: 'text-white', subText: 'text-blue-200', accent: 'bg-pink-500', accentSecondary: 'bg-green-400', border: 'border-transparent' }
    }
  },
  {
    key: 'klimt',
    name: 'Klimt',
    description: 'Golden Phase: Gold leaf, decorative patterns.',
    font: 'serif',
    borderRadius: 'rounded-md',
    borderWidth: 'border',
    shadow: 'shadow-md',
    texture: 'texture-noise',
    colors: {
      light: { bg: 'bg-yellow-100', cardBg: 'bg-yellow-50', text: 'text-amber-900', subText: 'text-amber-700', accent: 'bg-yellow-600', accentSecondary: 'bg-black', border: 'border-yellow-600' },
      dark: { bg: 'bg-stone-900', cardBg: 'bg-stone-800', text: 'text-yellow-400', subText: 'text-yellow-200', accent: 'bg-yellow-500', accentSecondary: 'bg-purple-900', border: 'border-yellow-500' }
    }
  },
  // Adding placeholders for the rest to reach 20 with similar logic
  {
    key: 'davinci', name: 'Da Vinci', description: 'Renaissance: Sepia, parchment, sketch-like.',
    font: 'serif', borderRadius: 'rounded-lg', borderWidth: 'border', shadow: 'shadow-inner', texture: 'texture-paper',
    colors: { light: { bg: 'bg-amber-100', cardBg: 'bg-orange-50', text: 'text-stone-800', subText: 'text-stone-600', accent: 'bg-stone-700', accentSecondary: 'bg-amber-700', border: 'border-stone-400' }, dark: { bg: 'bg-stone-900', cardBg: 'bg-stone-800', text: 'text-amber-100', subText: 'text-amber-200', accent: 'bg-amber-600', accentSecondary: 'bg-stone-500', border: 'border-amber-700' } }
  },
  {
    key: 'pollock', name: 'Pollock', description: 'Abstract Expressionism: Chaotic splatters.',
    font: 'sans', borderRadius: 'rounded-none', borderWidth: 'border-0', shadow: 'shadow-lg', texture: 'texture-noise',
    colors: { light: { bg: 'bg-gray-200', cardBg: 'bg-white', text: 'text-black', subText: 'text-gray-700', accent: 'bg-black', accentSecondary: 'bg-slate-500', border: 'border-gray-400' }, dark: { bg: 'bg-black', cardBg: 'bg-gray-900', text: 'text-white', subText: 'text-gray-400', accent: 'bg-gray-500', accentSecondary: 'bg-gray-700', border: 'border-gray-600' } }
  },
  {
    key: 'rembrandt', name: 'Rembrandt', description: 'Baroque: Chiaroscuro, dramatic lighting.',
    font: 'serif', borderRadius: 'rounded-sm', borderWidth: 'border', shadow: 'shadow-2xl',
    colors: { light: { bg: 'bg-stone-300', cardBg: 'bg-stone-100', text: 'text-black', subText: 'text-stone-800', accent: 'bg-yellow-700', accentSecondary: 'bg-stone-600', border: 'border-stone-800' }, dark: { bg: 'bg-black', cardBg: 'bg-stone-900', text: 'text-amber-100', subText: 'text-stone-400', accent: 'bg-amber-600', accentSecondary: 'bg-stone-700', border: 'border-stone-700' } }
  },
  {
    key: 'munch', name: 'Munch', description: 'Expressionism: Dark, psychological, flowing lines.',
    font: 'sans', borderRadius: 'rounded-xl', borderWidth: 'border-2', shadow: 'shadow-lg',
    colors: { light: { bg: 'bg-orange-200', cardBg: 'bg-red-100', text: 'text-slate-900', subText: 'text-slate-700', accent: 'bg-orange-600', accentSecondary: 'bg-blue-600', border: 'border-orange-400' }, dark: { bg: 'bg-slate-900', cardBg: 'bg-slate-800', text: 'text-orange-200', subText: 'text-orange-300', accent: 'bg-orange-700', accentSecondary: 'bg-blue-800', border: 'border-slate-600' } }
  },
  {
    key: 'kahlo', name: 'Frida Kahlo', description: 'Naïve Art: Vibrant floral, Mexican folk.',
    font: 'sans', borderRadius: 'rounded-2xl', borderWidth: 'border-2', shadow: 'shadow-md',
    colors: { light: { bg: 'bg-green-100', cardBg: 'bg-pink-50', text: 'text-green-900', subText: 'text-green-700', accent: 'bg-pink-600', accentSecondary: 'bg-green-600', border: 'border-pink-300' }, dark: { bg: 'bg-green-900', cardBg: 'bg-green-800', text: 'text-pink-100', subText: 'text-pink-200', accent: 'bg-pink-500', accentSecondary: 'bg-green-400', border: 'border-green-600' } }
  },
  {
    key: 'basquiat', name: 'Basquiat', description: 'Neo-Expressionism: Graffiti, scribbles, crowns.',
    font: 'sans', borderRadius: 'rounded-none', borderWidth: 'border-4', shadow: 'shadow-none',
    colors: { light: { bg: 'bg-yellow-100', cardBg: 'bg-white', text: 'text-black', subText: 'text-gray-800', accent: 'bg-black', accentSecondary: 'bg-blue-600', border: 'border-black' }, dark: { bg: 'bg-black', cardBg: 'bg-gray-900', text: 'text-white', subText: 'text-gray-300', accent: 'bg-yellow-400', accentSecondary: 'bg-red-500', border: 'border-white' } }
  },
  {
    key: 'okeeffe', name: "O'Keeffe", description: 'Modernism: Large flowers, gradients, smooth.',
    font: 'sans', borderRadius: 'rounded-full', borderWidth: 'border', shadow: 'shadow-xl',
    colors: { light: { bg: 'bg-rose-50', cardBg: 'bg-white', text: 'text-slate-600', subText: 'text-slate-400', accent: 'bg-rose-400', accentSecondary: 'bg-indigo-300', border: 'border-rose-100' }, dark: { bg: 'bg-slate-900', cardBg: 'bg-slate-800', text: 'text-rose-100', subText: 'text-rose-200', accent: 'bg-rose-600', accentSecondary: 'bg-indigo-600', border: 'border-slate-700' } }
  },
  {
    key: 'hopper', name: 'Hopper', description: 'Realism: Solitary, shadows, architectural.',
    font: 'sans', borderRadius: 'rounded-sm', borderWidth: 'border', shadow: 'shadow-lg',
    colors: { light: { bg: 'bg-sky-200', cardBg: 'bg-emerald-100', text: 'text-slate-900', subText: 'text-slate-700', accent: 'bg-red-700', accentSecondary: 'bg-emerald-700', border: 'border-slate-400' }, dark: { bg: 'bg-slate-900', cardBg: 'bg-slate-800', text: 'text-sky-100', subText: 'text-sky-200', accent: 'bg-yellow-600', accentSecondary: 'bg-emerald-800', border: 'border-slate-600' } }
  },
  {
    key: 'vermeer', name: 'Vermeer', description: 'Dutch Golden Age: Lapis lazuli, window light.',
    font: 'serif', borderRadius: 'rounded-md', borderWidth: 'border', shadow: 'shadow-md',
    colors: { light: { bg: 'bg-slate-200', cardBg: 'bg-blue-50', text: 'text-slate-900', subText: 'text-slate-600', accent: 'bg-blue-600', accentSecondary: 'bg-yellow-500', border: 'border-blue-200' }, dark: { bg: 'bg-slate-900', cardBg: 'bg-slate-800', text: 'text-blue-100', subText: 'text-blue-200', accent: 'bg-yellow-600', accentSecondary: 'bg-blue-700', border: 'border-slate-700' } }
  },
  {
    key: 'lichtenstein', name: 'Lichtenstein', description: 'Pop Art: Comic strip dots, bold outlines.',
    font: 'sans', borderRadius: 'rounded-lg', borderWidth: 'border-4', shadow: 'shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]',
    colors: { light: { bg: 'bg-blue-200', cardBg: 'bg-white', text: 'text-black', subText: 'text-blue-900', accent: 'bg-red-500', accentSecondary: 'bg-yellow-400', border: 'border-black' }, dark: { bg: 'bg-blue-900', cardBg: 'bg-blue-800', text: 'text-white', subText: 'text-yellow-200', accent: 'bg-red-600', accentSecondary: 'bg-yellow-500', border: 'border-white' } }
  }
];

export const TRANSLATIONS: Record<Language, Translation> = {
  en: {
    title: "Medical Device Registration",
    subtitle: "Electronic Submission System Guide",
    systemOverview: "System Overview & Future Plans",
    appProcess: "Application Process & Notes",
    selectStyle: "Select Artist Style",
    targetAudience: "Applicable to Class II & III Medical Devices",
    class23: "For registration, license changes, or extensions.",
    modes: "Submission Modes",
    online: "Instant Online Upload",
    offline: "Offline CD/DVD Submission",
    futurePlans: "Future Roadmap",
    smartApp: "July 2025: New Smart Application Mode",
    class1: "Future: Incorporating Class I Devices",
    stepTitle: "Key 5-Step Process",
    step1: "Login",
    step2: "Click Apply",
    step3: "Fill/Upload",
    step4: "Sign",
    step5: "Submit",
    payment: "Online & Counter Payment Supported",
    paymentNote: "Note: Online payment needs 3-5 days to clear before submission.",
    charts: {
      submissionMode: "Submission Mode Usage",
      processingTime: "Processing Time (Days)",
      errorAnalysis: "Common Document Errors",
      userGrowth: "Digital Adoption Rate",
      timeline: "System Rollout Timeline"
    }
  },
  zh: {
    title: "醫療器材查驗登記",
    subtitle: "電子化送件系統指南",
    systemOverview: "系統總覽與未來規劃",
    appProcess: "申辦流程與注意事項",
    selectStyle: "選擇畫家風格",
    targetAudience: "適用於第二、三等級醫療器材",
    class23: "辦理查驗登記、許可證變更或展延申請。",
    modes: "提供網頁與離線兩種申辦模式",
    online: "線上即時上傳",
    offline: "下載資料製作光碟後寄送",
    futurePlans: "未來規劃",
    smartApp: "114年7月起：將新增智慧申請模式",
    class1: "未來更規劃納入第一等級醫材",
    stepTitle: "關鍵申辦五步驟",
    step1: "憑證登入",
    step2: "點選申請",
    step3: "填寫/上傳",
    step4: "上傳簽章",
    step5: "送出",
    payment: "支援線上與臨櫃繳費",
    paymentNote: "注意！線上繳費需待3-5天入帳後，系統才能送出申請。",
    charts: {
      submissionMode: "申辦模式分佈",
      processingTime: "平均審查天數",
      errorAnalysis: "常見文件錯誤分析",
      userGrowth: "數位化採用率",
      timeline: "系統導入時程表"
    }
  }
};

// Mock Data for Charts
export const CHART_DATA = {
  submissionModes: [
    { name: 'Online', value: 65 },
    { name: 'Offline (CD)', value: 35 },
  ],
  timeline: [
    { year: '2023', class1: 0, class2: 80, class3: 60 },
    { year: '2024', class1: 20, class2: 90, class3: 75 },
    { year: '2025', class1: 50, class2: 95, class3: 90 }, // Smart Mode launch
    { year: '2026', class1: 100, class2: 100, class3: 100 },
  ],
  processingTime: [
    { mode: 'Paper', days: 120 },
    { mode: 'Electronic', days: 85 },
    { mode: 'Smart (Est.)', days: 60 },
  ],
  errors: [
    { subject: 'Missing Sig', A: 120, fullMark: 150 },
    { subject: 'Wrong Format', A: 98, fullMark: 150 },
    { subject: 'Payment Delay', A: 86, fullMark: 150 },
    { subject: 'Doc Expired', A: 99, fullMark: 150 },
    { subject: 'Wrong Class', A: 85, fullMark: 150 },
    { subject: 'Other', A: 65, fullMark: 150 },
  ]
};