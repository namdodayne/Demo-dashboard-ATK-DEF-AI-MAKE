import React from 'react';
import { teams } from '../data/gameData';
import { 
  Users, 
  Crown, 
  Sword, 
  Shield, 
  Trophy, 
  Target,
  TrendingUp,
  Award
} from 'lucide-react';

const Teams: React.FC = () => {
  const getStatusText = (status: string) => {
    switch (status) {
      case 'active':
        return 'ĐANG HOẠT ĐỘNG';
      case 'winning':
        return 'ĐANG DẪN ĐẦU';
      case 'eliminated':
        return 'ĐÃ BỊ LOẠI';
      default:
        return 'KHÔNG XÁC ĐỊNH';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'text-blue-400 bg-blue-400/10 border-blue-400/20';
      case 'winning':
        return 'text-green-400 bg-green-400/10 border-green-400/20';
      case 'eliminated':
        return 'text-red-400 bg-red-400/10 border-red-400/20';
      default:
        return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-2">
          <Users className="w-8 h-8 text-blue-400" />
          <h1 className="text-3xl font-bold text-white">Quản Lý Đội</h1>
        </div>
        <p className="text-gray-400">Thông tin chi tiết về các đội tham gia chiến trường</p>
      </div>

      {/* Teams Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {teams.map((team, index) => (
          <div key={team.id} className="bg-gray-800 rounded-lg border border-gray-700 p-6 hover:border-gray-600 transition-colors">
            {/* Team Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
                  style={{ backgroundColor: team.color }}
                >
                  {team.name.charAt(0)}
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">{team.name}</h2>
                  <div className={`inline-flex items-center px-2 py-1 rounded text-xs border font-semibold ${getStatusColor(team.status)}`}>
                    {getStatusText(team.status)}
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold" style={{ color: team.color }}>
                  #{index + 1}
                </div>
                <div className="text-xs text-gray-400">Hạng</div>
              </div>
            </div>

            {/* Score Display */}
            <div className="bg-gray-700/50 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Trophy className="w-5 h-5 text-yellow-400" />
                  <span className="text-gray-300">Tổng Điểm</span>
                </div>
                <div className="text-2xl font-bold text-yellow-400">
                  {team.score.toLocaleString()}
                </div>
              </div>
            </div>

            {/* Detailed Stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-700/30 rounded-lg p-3">
                <div className="flex items-center space-x-2 mb-2">
                  <Crown className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm text-gray-300">Lãnh thổ</span>
                </div>
                <div className="text-lg font-bold text-white">{team.territoriesOwned}</div>
                <div className="text-xs text-gray-400">vùng đất</div>
              </div>

              <div className="bg-gray-700/30 rounded-lg p-3">
                <div className="flex items-center space-x-2 mb-2">
                  <Users className="w-4 h-4 text-blue-400" />
                  <span className="text-sm text-gray-300">Dân số</span>
                </div>
                <div className="text-lg font-bold text-white">
                  {(team.totalPopulation / 1000000).toFixed(1)}M
                </div>
                <div className="text-xs text-gray-400">người dân</div>
              </div>

              <div className="bg-gray-700/30 rounded-lg p-3">
                <div className="flex items-center space-x-2 mb-2">
                  <Sword className="w-4 h-4 text-red-400" />
                  <span className="text-sm text-gray-300">Tấn công</span>
                </div>
                <div className="text-lg font-bold text-red-400">{team.attacksLaunched}</div>
                <div className="text-xs text-gray-400">lần tấn công</div>
              </div>

              <div className="bg-gray-700/30 rounded-lg p-3">
                <div className="flex items-center space-x-2 mb-2">
                  <Shield className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-gray-300">Phòng thủ</span>
                </div>
                <div className="text-lg font-bold text-green-400">{team.defensesWon}</div>
                <div className="text-xs text-gray-400">lần thắng</div>
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">Tỷ lệ thắng tấn công</span>
                  <span className="text-white">{Math.round((team.attacksLaunched / (team.attacksLaunched + team.defensesWon)) * 100)}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-red-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${Math.round((team.attacksLaunched / (team.attacksLaunched + team.defensesWon)) * 100)}%` }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">Hiệu quả phòng thủ</span>
                  <span className="text-white">{Math.round((team.defensesWon / (team.attacksLaunched + team.defensesWon)) * 100)}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-green-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${Math.round((team.defensesWon / (team.attacksLaunched + team.defensesWon)) * 100)}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                <Target className="w-4 h-4" />
                <span>Xem Chi Tiết</span>
              </button>
              <button className="flex items-center justify-center space-x-2 bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors">
                <Award className="w-4 h-4" />
                <span>Lịch Sử</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;