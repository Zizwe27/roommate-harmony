import React from 'react';
import './Illustration.css';

const Illustration = ({ variant = 'welcome' }) => {
  return (
    <div className="illustration-container">
      <svg
        className="illustration"
        viewBox="0 0 400 300"
        xmlns="http://www.w3.org/2000/svg"
      >
        {variant === 'welcome' && (
          <>
            {/* Wall with frames */}
            <rect x="50" y="40" width="300" height="200" fill="#E8E0C0" rx="4" />
            <rect x="80" y="60" width="80" height="60" fill="#D4C9A8" rx="2" />
            <rect x="240" y="60" width="80" height="60" fill="#D4C9A8" rx="2" />
            
            {/* Hanging plant */}
            <circle cx="200" cy="50" r="15" fill="#9CAB84" />
            <path d="M 200 65 Q 180 80 190 100" stroke="#9CAB84" strokeWidth="3" fill="none" />
            <path d="M 200 65 Q 220 80 210 100" stroke="#9CAB84" strokeWidth="3" fill="none" />
            
            {/* Person 1 (left) with watering can */}
            <circle cx="120" cy="180" r="20" fill="#8B7355" />
            <rect x="100" y="200" width="40" height="60" fill="#C5D89D" rx="4" />
            <rect x="105" y="200" width="30" height="50" fill="#9CAB84" />
            <rect x="140" y="210" width="8" height="20" fill="#3B4953" />
            <rect x="148" y="215" width="12" height="8" fill="#3B4953" />
            <ellipse cx="154" cy="219" rx="6" ry="4" fill="#3B4953" />
            
            {/* Person 2 (right) with plant */}
            <circle cx="280" cy="180" r="20" fill="#8B7355" />
            <rect x="260" y="200" width="40" height="60" fill="#C5D89D" rx="4" />
            <rect x="265" y="200" width="30" height="50" fill="#9CAB84" />
            <ellipse cx="280" cy="240" rx="8" ry="12" fill="#9CAB84" />
            <path d="M 272 240 Q 280 220 288 240" stroke="#9CAB84" strokeWidth="2" fill="none" />
            <path d="M 276 240 Q 280 225 284 240" stroke="#9CAB84" strokeWidth="2" fill="none" />
            
            {/* Small plants on ground */}
            <ellipse cx="100" cy="260" rx="6" ry="10" fill="#9CAB84" />
            <ellipse cx="300" cy="260" rx="6" ry="10" fill="#9CAB84" />
          </>
        )}
        
        {variant === 'login' && (
          <>
            {/* Sofa */}
            <rect x="80" y="180" width="240" height="60" fill="#C5D89D" rx="8" />
            <rect x="90" y="190" width="220" height="40" fill="#9CAB84" rx="4" />
            
            {/* Side table */}
            <rect x="50" y="200" width="30" height="40" fill="#9CAB84" />
            <ellipse cx="65" cy="200" rx="15" ry="5" fill="#C5D89D" />
            
            {/* Lamp */}
            <rect x="60" y="180" width="4" height="20" fill="#3B4953" />
            <circle cx="62" cy="175" r="8" fill="#C5D89D" />
            
            {/* Wall frame */}
            <rect x="150" y="60" width="100" height="80" fill="#E8E0C0" rx="2" />
            <rect x="160" y="70" width="80" height="60" fill="#D4C9A8" />
            
            {/* Plant */}
            <ellipse cx="320" cy="240" rx="12" ry="20" fill="#9CAB84" />
            <path d="M 308 240 Q 320 200 332 240" stroke="#9CAB84" strokeWidth="3" fill="none" />
            <path d="M 312 240 Q 320 210 328 240" stroke="#9CAB84" strokeWidth="3" fill="none" />
            
            {/* Person 1 (left) */}
            <circle cx="150" cy="140" r="18" fill="#8B7355" />
            <rect x="135" y="158" width="30" height="50" fill="#C5D89D" rx="4" />
            <rect x="140" y="158" width="20" height="40" fill="#9CAB84" />
            
            {/* Person 2 (right) */}
            <circle cx="250" cy="140" r="18" fill="#8B7355" />
            <rect x="235" y="158" width="30" height="50" fill="#C5D89D" rx="4" />
            <rect x="240" y="158" width="20" height="40" fill="#9CAB84" />
            
            {/* High-five hands */}
            <ellipse cx="200" cy="150" rx="15" ry="8" fill="#8B7355" />
          </>
        )}
        
        {variant === 'dashboard' && (
          <>
            <rect x="0" y="0" width="400" height="300" fill="#F6F0D7" />
            <rect x="0" y="0" width="400" height="300" fill="#E8E0C0" />
            <rect x="40" y="30" width="140" height="120" fill="#D4C9A8" rx="2" />
            <rect x="50" y="40" width="120" height="100" fill="#C5D89D" />
            <rect x="60" y="50" width="100" height="80" fill="#9CAB84" />
            <circle cx="220" cy="25" r="12" fill="#9CAB84" />
            <path d="M 220 37 Q 205 50 212 65" stroke="#9CAB84" strokeWidth="2.5" fill="none" />
            <path d="M 220 37 Q 235 50 228 65" stroke="#9CAB84" strokeWidth="2.5" fill="none" />
            <ellipse cx="90" cy="260" rx="28" ry="7" fill="#F6F0D7" />
            <rect x="70" y="210" width="22" height="32" fill="#9CAB84" />
            <ellipse cx="81" cy="210" rx="11" ry="3" fill="#C5D89D" />
            <rect x="78" y="195" width="2.5" height="13" fill="#3B4953" />
            <circle cx="79.25" cy="189" r="5.5" fill="#C5D89D" />
            <rect x="330" y="230" width="14" height="22" fill="#9CAB84" />
            <ellipse cx="337" cy="230" rx="7" ry="2.5" fill="#C5D89D" />
            <path d="M 323 240 Q 337 205 351 240" stroke="#9CAB84" strokeWidth="2.5" fill="none" />
            <path d="M 326 240 Q 337 215 348 240" stroke="#9CAB84" strokeWidth="2.5" fill="none" />
            <ellipse cx="80" cy="250" rx="5" ry="7" fill="#9CAB84" />
            <ellipse cx="100" cy="255" rx="10" ry="14" fill="#9CAB84" />
            <path d="M 90 255 Q 100 225 110 255" stroke="#9CAB84" strokeWidth="2.5" fill="none" />
            <path d="M 93 255 Q 100 235 107 255" stroke="#9CAB84" strokeWidth="2.5" fill="none" />
            <rect x="200" y="190" width="180" height="55" fill="#C5D89D" rx="7" />
            <rect x="210" y="200" width="160" height="35" fill="#9CAB84" rx="4" />
            <ellipse cx="220" cy="250" rx="18" ry="5" fill="#9CAB84" />
            <ellipse cx="300" cy="255" rx="20" ry="6" fill="#9CAB84" />
            <ellipse cx="250" cy="248" rx="12" ry="4" fill="#9CAB84" />
            <rect x="350" y="210" width="14" height="20" fill="#9CAB84" />
            <ellipse cx="357" cy="210" rx="7" ry="2.5" fill="#C5D89D" />
            <rect x="270" y="70" width="90" height="70" fill="#D4C9A8" rx="2" />
            <rect x="280" y="80" width="70" height="50" fill="#C5D89D" />
            <rect x="290" y="90" width="50" height="30" fill="#9CAB84" />
            <circle cx="315" cy="105" r="4" fill="#F6F0D7" />
            <rect x="350" y="70" width="12" height="18" fill="#9CAB84" />
            <ellipse cx="356" cy="70" rx="6" ry="2.5" fill="#C5D89D" />
            <circle cx="110" cy="210" r="15" fill="#8B7355" />
            <rect x="98" y="225" width="24" height="42" fill="#C5D89D" rx="3" />
            <rect x="102" y="225" width="16" height="36" fill="#9CAB84" />
            <rect x="118" y="232" width="6" height="14" fill="#3B4953" />
            <rect x="124" y="236" width="8" height="6" fill="#3B4953" />
            <ellipse cx="128" cy="239" rx="4" ry="3" fill="#3B4953" />
            <circle cx="190" cy="200" r="14" fill="#8B7355" />
            <rect x="180" y="214" width="20" height="38" fill="#C5D89D" rx="3" />
            <rect x="184" y="214" width="12" height="32" fill="#9CAB84" />
            <ellipse cx="190" cy="245" rx="6" ry="9" fill="#9CAB84" />
            <path d="M 184 245 Q 190 228 196 245" stroke="#9CAB84" strokeWidth="1.8" fill="none" />
            <path d="M 186 245 Q 190 235 194 245" stroke="#9CAB84" strokeWidth="1.8" fill="none" />
            <circle cx="250" cy="170" r="13" fill="#8B7355" />
            <rect x="240" y="183" width="20" height="32" fill="#C5D89D" rx="3" />
            <rect x="244" y="183" width="12" height="27" fill="#9CAB84" />
            <rect x="250" y="188" width="7" height="6" fill="#3B4953" />
            <rect x="254" y="190" width="5" height="4" fill="#3B4953" />
            <rect x="248" y="197" width="10" height="7" fill="#9CAB84" />
            <circle cx="310" cy="170" r="13" fill="#8B7355" />
            <rect x="300" y="183" width="20" height="32" fill="#C5D89D" rx="3" />
            <rect x="304" y="183" width="12" height="27" fill="#9CAB84" />
            <rect x="310" y="188" width="7" height="6" fill="#3B4953" />
            <ellipse cx="220" cy="260" rx="20" ry="6" fill="#9CAB84" />
            <ellipse cx="300" cy="265" rx="5" ry="7" fill="#9CAB84" />
            <ellipse cx="110" cy="265" rx="5" ry="7" fill="#9CAB84" />
          </>
        )}
      </svg>
    </div>
  );
};

export default Illustration;

