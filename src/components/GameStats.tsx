import React, { useState, useEffect } from 'react';
import { 
  Clock, 
  Users, 
  Target, 
  Shield, 
  Zap, 
  Globe,
  Activity,
  TrendingUp
} from 'lucide-react';

const GameStats: React.FC = () => {
  const [gameTime, setGameTime] = useState(7200); // 2 hours
  const [isGameActive, setIsGameActive] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      if (isGameActive && gameTime > 0) {
        setGameTime(prev => prev - 1);
      } else if (gameTime === 0) {
        setIsGameActive(false);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [gameTime, isGameActive]);

  const formatTime = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const stats = [
    {
      icon: <Globe className="w-6 h-6 text-blue-400" />,
      label: 'Tổng Lãnh Thổ',
      value: '8',
      change: '+0',
      color: 'text-blue-400'
    },
    {
      icon: <Zap className="w-6 h-6 text-red-400" />,
      label: 'Trận Chiến Đang Diễn Ra',
      value: '3',
      change: '+1',
      color: 'text-red-400'
    },
    {
      icon: <Users className="w-6 h-6 text-green-400" />,
      label: 'Đội Tham Gia',
      value: '4',
      change: '0',
      color: 'text-green-400'
    },
    {
      icon: <Activity className="w-6 h-6 text-purple-400" />,
      label: 'Hoạt Động/Phút',
      value: '47',
      change: '+12',
      color: 'text-purple-400'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Game Timer */}
      <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <Clock className="w-6 h-6 text-yellow-400" />
            <h2 className="text-xl font-semibold text-white">Thời Gian Còn Lại</h2>
          </div>
          <div className="text-4xl font-mono font-bold text-yellow-400 mb-2">
            {formatTime(gameTime)}
          </div>
          <div className={`inline-flex items-center px-3 py-1 rounded-full border text-sm font-semibold ${
            isGameActive 
              ? 'text-green-400 bg-green-400/10 border-green-400/20' 
              : 'text-red-400 bg-red-400/10 border-red-400/20'
          }`}>
            {isGameActive ? 'GAME ĐANG DIỄN RA' : 'GAME ĐÃ KẾT THÚC'}
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="bg-gray-800 rounded-lg border border-gray-700 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                {stat.icon}
                <div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                  <div className={`text-2xl font-bold ${stat.color}`}>
                    {stat.value}
                  </div>
                </div>
              </div>
              {stat.change !== '0' && (
                <div className={`flex items-center space-x-1 text-xs ${
                  stat.change.startsWith('+') ? 'text-green-400' : 'text-red-400'
                }`}>
                  <TrendingUp className="w-3 h-3" />
                  <span>{stat.change}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Game Progress */}
      <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Tiến Độ Game</h3>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-400">Thời gian đã trôi qua</span>
              <span className="text-white">{Math.round(((7200 - gameTime) / 7200) * 100)}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                style={{ width: `${((7200 - gameTime) / 7200) * 100}%` }}
              ></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-400">Lãnh thổ đã chiếm</span>
              <span className="text-white">87.5%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full w-[87.5%]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameStats;