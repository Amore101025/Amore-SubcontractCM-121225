import React from 'react';
import { ARTIST_STYLES } from '../constants';
import { ArtistKey, ThemeColors } from '../types';
import { Palette, X } from 'lucide-react';

interface StyleSelectorProps {
  currentStyle: ArtistKey;
  onSelect: (key: ArtistKey) => void;
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
  colors: ThemeColors;
  isDark: boolean;
}

const StyleSelector: React.FC<StyleSelectorProps> = ({ currentStyle, onSelect, isOpen, setIsOpen, colors, isDark }) => {
  if (!isOpen) return (
    <button 
      onClick={() => setIsOpen(true)}
      className={`fixed bottom-6 right-6 p-4 rounded-full shadow-2xl z-50 transition-transform hover:scale-110 ${colors.accent} text-white`}
    >
      <Palette size={24} />
    </button>
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className={`relative w-full max-w-4xl max-h-[80vh] overflow-y-auto ${colors.cardBg} ${colors.border} border-2 rounded-xl shadow-2xl p-6`}>
        <button 
          onClick={() => setIsOpen(false)}
          className={`absolute top-4 right-4 p-2 rounded-full hover:bg-gray-200/20 ${colors.text}`}
        >
          <X size={24} />
        </button>

        <h2 className={`text-2xl font-bold mb-6 ${colors.text}`}>Select Artist Style</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {ARTIST_STYLES.map((style) => {
            const previewColors = isDark ? style.colors.dark : style.colors.light;
            const isSelected = currentStyle === style.key;
            
            return (
              <button
                key={style.key}
                onClick={() => {
                  onSelect(style.key);
                  setIsOpen(false);
                }}
                className={`
                  flex flex-col items-center p-3 transition-all duration-200
                  ${style.borderRadius} ${style.borderWidth}
                  ${isSelected ? 'ring-4 ring-offset-2 ring-blue-500 scale-105' : 'hover:scale-105'}
                  ${previewColors.bg} ${previewColors.border}
                `}
              >
                <div className={`w-full h-12 mb-2 ${previewColors.accent} ${style.borderRadius}`}></div>
                <span className={`font-bold text-sm ${previewColors.text}`}>{style.name}</span>
                <span className={`text-xs opacity-70 ${previewColors.text} truncate w-full text-center`}>{style.description}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StyleSelector;