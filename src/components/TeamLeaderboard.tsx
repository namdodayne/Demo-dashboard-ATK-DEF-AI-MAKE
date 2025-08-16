import React from 'react';
import { teams } from '../data/gameData';
import { Crown, Users, Coins, Sword, Shield, Trophy } from 'lucide-react';

const TeamLeaderboard: React.FC = () => {
  const sortedTeams = [...teams].sort((a, b) => b.score - a.score);

  const getRankIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Crown className="w-5 h-5 text-yellow-400" />;
      case 1:
        return <Trophy className="w-5 h-5 text-gray-400" />;
      case 2:
        return <Trophy className="w-5 h-5 text-amber-600" />;
      default:
        return <div className="w-5 h-5 rounded-full bg-gray-600 flex items-center justify-center text-xs font-bold">{index + 1}</div>;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'winning':
        return 'text-green-400 bg-green-400/10 border-green-400/20';
      case 'active':
        return 'text-blue-400 bg-blue-400/10 border-blue-400/20';
      case 'eliminated':
        return 'text-red-400 bg-red-400/10 border-red-400/20';
      default:
        return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
    }
  };

  return (
    <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
      <div className="flex items-center space-x-2 mb-6">
        <Trophy className="w-5 h-5 text-yellow-400" />
        <h2 className="text-xl font-semibold text-white">Bảng Xếp Hạng Đội</h2>
      </div>

      <div className="space-y-4">
        {sortedTeams.map((team, index) => (
          <div key={team.id} className="bg-gray-700/50 rounded-lg p-4 border border-gray-600 hover:border-gray-500 transition-colors">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                {getRankIcon(index)}
                <div>
                  <h3 className="font-bold text-white">{team.name}</h3>
                  <div className={`px-2 py-1 rounded text-xs border ${getStatusColor(team.status)} mt-1`}>
                    {team.status === 'active' ? 'ĐANG HOẠT ĐỘNG' : 
                     team.status === 'winning' ? 'ĐANG DẪN ĐẦU' : 'BỊ LOẠI'}
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold" style={{ color: team.color }}>
                  {team.score.toLocaleString()}
                </div>
                <div className="text-xs text-gray-400">điểm</div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1 text-gray-400 mb-1">
                  <Crown className="w-3 h-3" />
                  <span>Lãnh thổ</span>
                </div>
                <div className="font-bold text-white">{team.territoriesOwned}</div>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1 text-gray-400 mb-1">
                  <Users className="w-3 h-3" />
                  <span>Dân số</span>
                </div>
                <div className="font-bold text-white">{(team.totalPopulation / 1000000).toFixed(1)}M</div>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1 text-gray-400 mb-1">
                  <Sword className="w-3 h-3" />
                  <span>Tấn công</span>
                </div>
                <div className="font-bold text-red-400">{team.attacksLaunched}</div>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1 text-gray-400 mb-1">
                  <Shield className="w-3 h-3" />
                  <span>Phòng thủ</span>
                </div>
                <div className="font-bold text-green-400">{team.defensesWon}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamLeaderboard;