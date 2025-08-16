import React, { useState } from 'react';
import GameMap from '../components/GameMap';
import TerritoryDetails from '../components/TerritoryDetails';
import TeamLeaderboard from '../components/TeamLeaderboard';
import ActivityFeed from '../components/ActivityFeed';
import GameStats from '../components/GameStats';
import { Territory } from '../types/game';
import { Shield, Sword, Crown } from 'lucide-react';

const Dashboard: React.FC = () => {
  const [selectedTerritory, setSelectedTerritory] = useState<Territory | null>(null);

  const handleTerritorySelect = (territory: Territory) => {
    setSelectedTerritory(territory);
  };

  const handleAttack = (territoryId: string) => {
    console.log(`Tấn công vào ${territoryId}`);
    // Implement attack logic
  };

  const handleDefend = (territoryId: string) => {
    console.log(`Phòng thủ ${territoryId}`);
    // Implement defense logic
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700 p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <Crown className="w-8 h-8 text-yellow-400" />
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 via-red-400 to-purple-400 bg-clip-text text-transparent">
                  Chiến Trường Chiếm Đất
                </h1>
                <p className="text-gray-400 text-sm">Đại học An ninh mạng Việt Nam</p>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-400">Vòng 3</div>
              <div className="text-sm text-gray-400">Hiện tại</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-400">147</div>
              <div className="text-sm text-gray-400">Tấn công</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">203</div>
              <div className="text-sm text-gray-400">Phòng thủ</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6">
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
          {/* Left Sidebar - Game Stats */}
          <div className="xl:col-span-1">
            <GameStats />
          </div>

          {/* Center - Map and Territory Details */}
          <div className="xl:col-span-2 space-y-6">
            <GameMap 
              onTerritorySelect={handleTerritorySelect}
              selectedTerritory={selectedTerritory}
            />
            <TerritoryDetails 
              territory={selectedTerritory}
              onAttack={handleAttack}
              onDefend={handleDefend}
            />
          </div>

          {/* Right Sidebar - Leaderboard and Activity */}
          <div className="xl:col-span-1 space-y-6">
            <TeamLeaderboard />
            <ActivityFeed />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;