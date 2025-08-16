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
  Zap
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
      left: `${territory.x}px`,
      top: `${territory.y}px`,
      width: `${territory.width}px`,
      height: `${territory.height}px`,
      backgroundColor: territory.owner ? territory.ownerColor : '#374151',
      opacity: territory.owner ? 0.8 : 0.4,
      transform: isSelected || isHovered ? 'scale(1.05)' : 'scale(1)',
      zIndex: isSelected ? 20 : isHovered ? 15 : 10,
      boxShadow: territory.isUnderAttack 
        ? '0 0 20px #ef4444, inset 0 0 20px rgba(239, 68, 68, 0.3)' 
        : isSelected 
        ? '0 0 15px #60a5fa' 
        : isHovered 
        ? '0 0 10px rgba(255, 255, 255, 0.5)' 
        : 'none'
    };
  };

  return (
    <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Crown className="w-5 h-5 text-yellow-400" />
          <h2 className="text-xl font-semibold text-white">Bản Đồ Chiến Trường</h2>
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

      {/* Map Container */}
      <div className="relative bg-gray-900 rounded-lg border-2 border-gray-600 overflow-hidden" 
           style={{ height: '400px', backgroundImage: 'radial-gradient(circle at 25% 25%, #1f2937 0%, #111827 50%)' }}>
        
        {/* Grid Background */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#4b5563" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Territories */}
        {territories.map((territory) => (
          <div
            key={territory.id}
            className="absolute border-2 border-gray-600 rounded cursor-pointer transition-all duration-300 hover:border-white"
            style={getTerritoryStyle(territory)}
            onClick={() => onTerritorySelect(territory)}
            onMouseEnter={() => setHoveredTerritory(territory.id)}
            onMouseLeave={() => setHoveredTerritory(null)}
          >
            {/* Territory Content */}
            <div className="h-full flex flex-col justify-between p-2 text-white text-xs">
              <div className="flex items-center justify-between">
                <span className="font-bold truncate">{territory.name}</span>
                {territory.isUnderAttack && (
                  <Zap className="w-3 h-3 text-red-400 animate-pulse" />
                )}
              </div>
              
              <div className="space-y-1">
                <div className="flex items-center space-x-1">
                  <Users className="w-2 h-2" />
                  <span>{(territory.population / 1000000).toFixed(1)}M</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Coins className="w-2 h-2" />
                  <span>{territory.resources}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Shield className="w-2 h-2" />
                  <span>{territory.defenseLevel}%</span>
                </div>
              </div>
            </div>

            {/* Attack Animation */}
            {territory.isUnderAttack && (
              <div className="absolute inset-0 border-2 border-red-500 rounded animate-ping"></div>
            )}
          </div>
        ))}

        {/* Battle Lines */}
        <svg className="absolute inset-0 pointer-events-none">
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" 
                    refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#ef4444" />
            </marker>
          </defs>
          {/* Example battle line */}
          <line x1="100" y1="200" x2="200" y2="300" 
                stroke="#ef4444" strokeWidth="2" strokeDasharray="5,5"
                markerEnd="url(#arrowhead)" className="animate-pulse" />
        </svg>
      </div>

      {/* Map Legend */}
      <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
        <div className="flex items-center space-x-2">
          <Users className="w-4 h-4 text-blue-400" />
          <span className="text-gray-300">Dân số</span>
        </div>
        <div className="flex items-center space-x-2">
          <Coins className="w-4 h-4 text-yellow-400" />
          <span className="text-gray-300">Tài nguyên</span>
        </div>
        <div className="flex items-center space-x-2">
          <Shield className="w-4 h-4 text-green-400" />
          <span className="text-gray-300">Phòng thủ</span>
        </div>
        <div className="flex items-center space-x-2">
          <Sword className="w-4 h-4 text-red-400" />
          <span className="text-gray-300">Tấn công</span>
        </div>
      </div>
    </div>
  );
};

export default GameMap;