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
      </svg>
    </div>
  );
};

export default Illustration;

