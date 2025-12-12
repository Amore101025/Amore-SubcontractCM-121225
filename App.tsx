import React, { useState, useMemo } from 'react';
import { ARTIST_STYLES, TRANSLATIONS } from './constants';
import { ArtistKey, Language } from './types';
import StyleSelector from './components/StyleSelector';
import StepProcess from './components/StepProcess';
import { 
  ModePieChart, 
  TimelineChart, 
  ProcessingBarChart, 
  ErrorRadarChart 
} from './components/charts/InteractiveCharts';
import { Sun, Moon, Languages, Info, FileText, Upload, CreditCard } from 'lucide-react';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('zh');
  const [isDark, setIsDark] = useState<boolean>(false);
  const [styleKey, setStyleKey] = useState<ArtistKey>('vangogh');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const t = TRANSLATIONS[lang];
  
  const currentArtist = useMemo(() => 
    ARTIST_STYLES.find(s => s.key === styleKey) || ARTIST_STYLES[0]
  , [styleKey]);

  const themeColors = isDark ? currentArtist.colors.dark : currentArtist.colors.light;

  // Global styles application
  const appStyle = {
    fontFamily: currentArtist.font === 'serif' ? 'Merriweather, serif' : 
                currentArtist.font === 'display' ? 'Playfair Display, serif' : 
                'Lato, sans-serif',
  };

  return (
    <div 
      style={appStyle}
      className={`min-h-screen w-full transition-colors duration-500 ease-in-out relative
        ${themeColors.bg} ${themeColors.text} ${currentArtist.texture || ''}
      `}
    >
      {/* Background Overlay for texture */}
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-repeat z-0" />

      {/* Header */}
      <header className={`
        sticky top-0 z-40 backdrop-blur-md border-b
        ${themeColors.cardBg} ${themeColors.border} ${currentArtist.borderWidth}
        p-4 flex justify-between items-center shadow-sm
      `}>
        <div className="flex items-center gap-2">
          <div className={`p-2 rounded ${themeColors.accent} text-white`}>
            <FileText size={24} />
          </div>
          <div>
            <h1 className="text-lg md:text-xl font-bold leading-tight">{t.title}</h1>
            <p className={`text-xs ${themeColors.subText}`}>{t.subtitle}</p>
          </div>
        </div>
        
        <div className="flex gap-2">
          <button 
            onClick={() => setLang(l => l === 'en' ? 'zh' : 'en')}
            className={`p-2 rounded-full hover:bg-black/10 transition flex items-center gap-1 font-bold border ${themeColors.border}`}
          >
            <Languages size={18} /> <span className="text-xs uppercase">{lang}</span>
          </button>
          <button 
            onClick={() => setIsDark(!isDark)}
            className={`p-2 rounded-full hover:bg-black/10 transition border ${themeColors.border}`}
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto p-4 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
        
        {/* Left Section: Overview */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <section className={`
            ${themeColors.cardBg} ${currentArtist.borderRadius} ${currentArtist.borderWidth} ${themeColors.border} ${currentArtist.shadow}
            p-6 flex flex-col h-full
          `}>
            <h2 className={`text-2xl font-bold mb-4 pb-2 border-b ${themeColors.border} flex items-center gap-2`}>
              <Info className={themeColors.text} />
              {t.systemOverview}
            </h2>

            {/* Target Audience */}
            <div className="mb-6">
              <h3 className="text-lg font-bold mb-2">{t.targetAudience}</h3>
              <p className={`text-sm ${themeColors.subText} mb-4`}>{t.class23}</p>
            </div>

            {/* Submission Modes - Chart 1 */}
            <div className="mb-8">
              <h3 className="text-md font-semibold mb-2 flex items-center gap-2">
                <Upload size={16} /> {t.modes}
              </h3>
              <div className="flex flex-col md:flex-row items-center gap-4">
                <div className="w-full h-48">
                   <h4 className="text-xs text-center mb-1 opacity-70">{t.charts.submissionMode}</h4>
                   <ModePieChart colors={themeColors} isDark={isDark} />
                </div>
                <div className="text-sm space-y-2">
                  <div className="flex items-center gap-2">
                    <span className={`w-3 h-3 rounded-full ${isDark ? 'bg-[#8884d8]' : 'bg-[#0088FE]'}`}></span>
                    {t.online}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`w-3 h-3 rounded-full ${isDark ? 'bg-[#82ca9d]' : 'bg-[#00C49F]'}`}></span>
                    {t.offline}
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline - Chart 2 */}
            <div className="mt-auto">
              <h3 className="text-md font-semibold mb-2">{t.futurePlans}</h3>
              <ul className="list-disc pl-5 text-sm mb-4 space-y-1">
                <li>{t.smartApp}</li>
                <li>{t.class1}</li>
              </ul>
              <div className="w-full h-48">
                <h4 className="text-xs text-center mb-1 opacity-70">{t.charts.timeline}</h4>
                <TimelineChart colors={themeColors} isDark={isDark} />
              </div>
            </div>
          </section>
        </div>

        {/* Right Section: Process */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <section className={`
             ${themeColors.cardBg} ${currentArtist.borderRadius} ${currentArtist.borderWidth} ${themeColors.border} ${currentArtist.shadow}
             p-6
          `}>
             <h2 className={`text-2xl font-bold mb-6 pb-2 border-b ${themeColors.border} flex items-center gap-2`}>
              <FileText className={themeColors.text} />
              {t.appProcess}
            </h2>

            {/* Interactive Stepper - Chart 3 (Interactive Component) */}
            <div className={`p-4 rounded-xl ${isDark ? 'bg-white/5' : 'bg-black/5'} mb-8`}>
              <h3 className="font-bold mb-4 text-center text-lg">{t.stepTitle}</h3>
              <StepProcess colors={themeColors} t={t} borderRadius={currentArtist.borderRadius} />
            </div>

            {/* Charts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Payment Info */}
              <div className={`col-span-1 md:col-span-2 p-4 border ${themeColors.border} ${currentArtist.borderRadius} bg-opacity-30 ${themeColors.accent} bg-opacity-10`}>
                <div className="flex items-start gap-3">
                  <CreditCard size={32} className="shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg">{t.payment}</h4>
                    <p className="text-sm mt-1 opacity-80">{t.paymentNote}</p>
                  </div>
                </div>
              </div>

              {/* Processing Time - Chart 4 */}
              <div className="p-2">
                <h4 className="text-sm font-bold text-center mb-2">{t.charts.processingTime}</h4>
                <ProcessingBarChart colors={themeColors} isDark={isDark} />
              </div>

              {/* Error Analysis - Chart 5 */}
              <div className="p-2">
                <h4 className="text-sm font-bold text-center mb-2">{t.charts.errorAnalysis}</h4>
                <ErrorRadarChart colors={themeColors} isDark={isDark} />
              </div>
            </div>

          </section>
        </div>
      </main>

      {/* Style Selector Modal/Button */}
      <StyleSelector 
        currentStyle={styleKey} 
        onSelect={setStyleKey} 
        isOpen={isMenuOpen} 
        setIsOpen={setIsMenuOpen} 
        colors={themeColors}
        isDark={isDark}
      />
      
    </div>
  );
};

export default App;