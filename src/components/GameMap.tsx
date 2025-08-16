import React, { useState } from 'react';
import { territories } from '../data/gameData';
import { Territory } from '../types/game';
import { 
  Shield, 
  Sword, 
  Users, 
  Coins, 
  AlertTriangle,
  Crown,
  Zap,
  Globe
} from 'lucide-react';

interface GameMapProps {
  onTerritorySelect: (territory: Territory) => void;
  selectedTerritory: Territory | null;
}

const GameMap: React.FC<GameMapProps> = ({ onTerritorySelect, selectedTerritory }) => {
  const [hoveredTerritory, setHoveredTerritory] = useState<string | null>(null);

  const getTerritoryStyle = (territory: Territory) => {
    const isSelected = selectedTerritory?.id === territory.id;
    const isHovered = hoveredTerritory === territory.id;
    
    return {
      fill: territory.owner ? territory.ownerColor : '#374151',
      opacity: territory.owner ? 0.8 : 0.4,
      stroke: isSelected ? '#60a5fa' : isHovered ? '#ffffff' : '#4b5563',
      strokeWidth: isSelected ? 3 : isHovered ? 2 : 1,
      filter: territory.isUnderAttack 
        ? 'drop-shadow(0 0 10px #ef4444)' 
        : isSelected 
        ? 'drop-shadow(0 0 8px #60a5fa)' 
        : 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    };
  };

  return (
    <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Globe className="w-5 h-5 text-blue-400" />
          <h2 className="text-xl font-semibold text-white">Bản Đồ Thế Giới - Chiến Trường Toàn Cầu</h2>
        </div>
        <div className="flex items-center space-x-4 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-gray-300">Đang tấn công</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
            <span className="text-gray-300">Trung lập</span>
          </div>
        </div>
      </div>

      {/* World Map SVG */}
      <div className="relative bg-gradient-to-br from-blue-900/20 to-blue-800/20 rounded-lg border-2 border-gray-600 overflow-hidden" 
           style={{ height: '500px' }}>
        
        <svg 
          width="100%" 
          height="100%" 
          viewBox="0 0 800 400" 
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #1d4ed8 100%)' }}
        >
          {/* Ocean Background */}
          <rect width="800" height="400" fill="url(#oceanGradient)" />
          
          {/* Gradient Definitions */}
          <defs>
            <linearGradient id="oceanGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e3a8a" />
              <stop offset="50%" stopColor="#1e40af" />
              <stop offset="100%" stopColor="#1d4ed8" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Grid Lines */}
          <g opacity="0.1">
            {Array.from({ length: 9 }, (_, i) => (
              <line key={`v${i}`} x1={i * 100} y1="0" x2={i * 100} y2="400" stroke="#ffffff" strokeWidth="1" />
            ))}
            {Array.from({ length: 5 }, (_, i) => (
              <line key={`h${i}`} x1="0" y1={i * 100} x2="800" y2={i * 100} stroke="#ffffff" strokeWidth="1" />
            ))}
          </g>

          {/* Continents Base Shapes */}
          {/* North America */}
          <path 
            d="M 80 40 Q 120 30 180 40 Q 240 50 280 80 Q 290 120 270 160 Q 250 180 200 190 Q 150 185 120 170 Q 90 150 80 120 Q 75 80 80 40 Z"
            fill="#2d3748"
            opacity="0.3"
          />
          
          {/* South America */}
          <path 
            d="M 180 200 Q 200 190 220 200 Q 240 220 250 260 Q 260 300 240 340 Q 220 380 200 390 Q 180 385 170 360 Q 160 320 165 280 Q 170 240 180 200 Z"
            fill="#2d3748"
            opacity="0.3"
          />

          {/* Europe */}
          <path 
            d="M 380 80 Q 420 70 460 80 Q 480 90 490 110 Q 485 130 470 140 Q 450 145 420 140 Q 390 135 380 120 Q 375 100 380 80 Z"
            fill="#2d3748"
            opacity="0.3"
          />

          {/* Asia */}
          <path 
            d="M 480 60 Q 580 50 680 60 Q 750 70 780 100 Q 790 140 770 180 Q 750 220 700 240 Q 650 250 600 245 Q 550 240 520 220 Q 490 200 480 160 Q 475 110 480 60 Z"
            fill="#2d3748"
            opacity="0.3"
          />

          {/* Africa */}
          <path 
            d="M 420 180 Q 460 170 500 180 Q 520 200 525 240 Q 530 280 520 320 Q 510 360 490 380 Q 470 390 450 385 Q 430 380 420 360 Q 410 320 415 280 Q 418 240 420 180 Z"
            fill="#2d3748"
            opacity="0.3"
          />

          {/* Australia */}
          <path 
            d="M 680 300 Q 720 290 760 300 Q 780 310 785 330 Q 780 350 760 360 Q 720 365 680 360 Q 660 350 655 330 Q 660 310 680 300 Z"
            fill="#2d3748"
            opacity="0.3"
          />

          {/* Territory Rectangles */}
          {territories.map((territory) => (
            <g key={territory.id}>
              <rect
                x={territory.x}
                y={territory.y}
                width={territory.width}
                height={territory.height}
                style={getTerritoryStyle(territory)}
                onClick={() => onTerritorySelect(territory)}
                onMouseEnter={() => setHoveredTerritory(territory.id)}
                onMouseLeave={() => setHoveredTerritory(null)}
                rx="4"
              />
              
              {/* Territory Label */}
              <text
                x={territory.x + territory.width / 2}
                y={territory.y + territory.height / 2 - 8}
                textAnchor="middle"
                className="fill-white text-xs font-bold pointer-events-none"
                style={{ fontSize: '10px' }}
              >
                {territory.name}
              </text>
              
              {/* Territory Stats */}
              <text
                x={territory.x + territory.width / 2}
                y={territory.y + territory.height / 2 + 8}
                textAnchor="middle"
                className="fill-gray-300 text-xs pointer-events-none"
                style={{ fontSize: '8px' }}
              >
                {(territory.population / 1000000).toFixed(0)}M | {territory.resources}% | {territory.defenseLevel}%
              </text>

              {/* Attack Animation */}
              {territory.isUnderAttack && (
                <rect
                  x={territory.x - 2}
                  y={territory.y - 2}
                  width={territory.width + 4}
                  height={territory.height + 4}
                  fill="none"
                  stroke="#ef4444"
                  strokeWidth="2"
                  rx="6"
                  className="animate-ping"
                />
              )}

              {/* Attack Icon */}
              {territory.isUnderAttack && (
                <circle
                  cx={territory.x + territory.width - 10}
                  cy={territory.y + 10}
                  r="6"
                  fill="#ef4444"
                  className="animate-pulse"
                />
              )}
            </g>
          ))}

          {/* Battle Lines */}
          <g className="pointer-events-none">
            {/* Example battle connections */}
            <line 
              x1="200" y1="120" x2="580" y2="160" 
              stroke="#ef4444" 
              strokeWidth="2" 
              strokeDasharray="5,5"
              className="animate-pulse"
              opacity="0.7"
            />
            <line 
              x1="680" y1="160" x2="200" y2="260" 
              stroke="#10b981" 
              strokeWidth="2" 
              strokeDasharray="3,3"
              className="animate-pulse"
              opacity="0.5"
            />
          </g>

          {/* Legend */}
          <g transform="translate(20, 320)">
            <rect x="0" y="0" width="200" height="70" fill="#1f2937" fillOpacity="0.9" rx="4" stroke="#374151" />
            <text x="10" y="15" className="fill-white text-xs font-bold">Chú thích:</text>
            <circle cx="15" cy="25" r="3" fill="#ef4444" />
            <text x="25" y="29" className="fill-gray-300 text-xs">Rồng Đỏ</text>
            <circle cx="15" cy="35" r="3" fill="#3b82f6" />
            <text x="25" y="39" className="fill-gray-300 text-xs">Vệ Binh Xanh</text>
            <circle cx="15" cy="45" r="3" fill="#10b981" />
            <text x="25" y="49" className="fill-gray-300 text-xs">Sói Xanh</text>
            <circle cx="15" cy="55" r="3" fill="#8b5cf6" />
            <text x="25" y="59" className="fill-gray-300 text-xs">Phượng Hoàng Tím</text>
            
            <circle cx="110" cy="25" r="3" fill="#6b7280" />
            <text x="120" y="29" className="fill-gray-300 text-xs">Trung lập</text>
            <circle cx="110" cy="35" r="3" fill="#ef4444" className="animate-pulse" />
            <text x="120" y="39" className="fill-gray-300 text-xs">Đang tấn công</text>
          </g>
        </svg>

        {/* Floating Territory Info */}
        {hoveredTerritory && (
          <div className="absolute top-4 right-4 bg-gray-900/95 border border-gray-600 rounded-lg p-4 min-w-48">
            {(() => {
              const territory = territories.find(t => t.id === hoveredTerritory);
              if (!territory) return null;
              
              return (
                <div className="space-y-2">
                  <div className="font-bold text-white">{territory.name}</div>
                  <div className="text-sm space-y-1">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Dân số:</span>
                      <span className="text-white">{(territory.population / 1000000).toFixed(1)}M</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Tài nguyên:</span>
                      <span className="text-yellow-400">{territory.resources}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Phòng thủ:</span>
                      <span className="text-green-400">{territory.defenseLevel}%</span>
                    </div>
                    {territory.owner && (
                      <div className="flex justify-between">
                        <span className="text-gray-400">Chủ sở hữu:</span>
                        <span style={{ color: territory.ownerColor }}>
                          {territory.owner === 'red-dragons' ? 'Rồng Đỏ' : 
                           territory.owner === 'blue-guardians' ? 'Vệ Binh Xanh' :
                           territory.owner === 'green-wolves' ? 'Sói Xanh' : 'Phượng Hoàng Tím'}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })()}
          </div>
        )}
      </div>

      {/* Map Controls */}
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center space-x-4 text-sm">
          <div className="flex items-center space-x-2">
            <Users className="w-4 h-4 text-blue-400" />
            <span className="text-gray-300">Dân số (triệu)</span>
          </div>
          <div className="flex items-center space-x-2">
            <Coins className="w-4 h-4 text-yellow-400" />
            <span className="text-gray-300">Tài nguyên (%)</span>
          </div>
          <div className="flex items-center space-x-2">
            <Shield className="w-4 h-4 text-green-400" />
            <span className="text-gray-300">Phòng thủ (%)</span>
          </div>
        </div>
        
        <div className="text-sm text-gray-400">
          Click vào lãnh thổ để xem chi tiết và thực hiện hành động
        </div>
      </div>
    </div>
  );
};

export default GameMap;