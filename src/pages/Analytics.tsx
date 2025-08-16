import React from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Activity, 
  Target, 
  Shield, 
  Users,
  Clock,
  Zap,
  Globe,
  Award
} from 'lucide-react';

const Analytics: React.FC = () => {
  const battleStats = [
    { time: '14:00', attacks: 12, defenses: 8, captures: 2 },
    { time: '14:15', attacks: 18, defenses: 15, captures: 3 },
    { time: '14:30', attacks: 25, defenses: 22, captures: 1 },
    { time: '14:45', attacks: 31, defenses: 28, captures: 4 },
    { time: '15:00', attacks: 28, defenses: 35, captures: 2 },
  ];

  const territoryControl = [
    { team: 'Rồng Đỏ', percentage: 35, color: '#ef4444' },
    { team: 'Vệ Binh Xanh', percentage: 30, color: '#3b82f6' },
    { team: 'Sói Xanh', percentage: 25, color: '#10b981' },
    { team: 'Phượng Hoàng Tím', percentage: 10, color: '#8b5cf6' },
  ];

  const performanceMetrics = [
    {
      icon: <Target className="w-6 h-6 text-red-400" />,
      title: 'Tổng Tấn Công',
      value: '147',
      change: '+23',
      trend: 'up'
    },
    {
      icon: <Shield className="w-6 h-6 text-blue-400" />,
      title: 'Phòng Thủ Thành Công',
      value: '89',
      change: '+15',
      trend: 'up'
    },
    {
      icon: <Crown className="w-6 h-6 text-yellow-400" />,
      title: 'Lãnh Thổ Chiếm',
      value: '7/8',
      change: '+1',
      trend: 'up'
    },
    {
      icon: <Activity className="w-6 h-6 text-purple-400" />,
      title: 'Hoạt Động/Phút',
      value: '47',
      change: '+12',
      trend: 'up'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-2">
          <BarChart3 className="w-8 h-8 text-purple-400" />
          <h1 className="text-3xl font-bold text-white">Phân Tích & Thống Kê</h1>
        </div>
        <p className="text-gray-400">Dữ liệu chi tiết về hiệu suất và xu hướng game</p>
      </div>

      {/* Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {performanceMetrics.map((metric, index) => (
          <div key={index} className="bg-gray-800 rounded-lg border border-gray-700 p-6">
            <div className="flex items-center justify-between mb-4">
              {metric.icon}
              <div className={`flex items-center space-x-1 text-xs ${
                metric.trend === 'up' ? 'text-green-400' : 'text-red-400'
              }`}>
                <TrendingUp className="w-3 h-3" />
                <span>{metric.change}</span>
              </div>
            </div>
            <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
            <div className="text-sm text-gray-400">{metric.title}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Battle Activity Chart */}
        <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
          <div className="flex items-center space-x-2 mb-6">
            <Activity className="w-5 h-5 text-green-400" />
            <h2 className="text-xl font-semibold text-white">Hoạt Động Chiến Đấu</h2>
          </div>
          
          <div className="space-y-4">
            {battleStats.map((stat, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="text-sm text-gray-400 w-16">{stat.time}</div>
                <div className="flex-1 mx-4">
                  <div className="flex items-center space-x-2">
                    <div className="flex-1 bg-gray-700 rounded-full h-2 relative">
                      <div 
                        className="bg-red-500 h-2 rounded-full"
                        style={{ width: `${(stat.attacks / 40) * 100}%` }}
                      ></div>
                    </div>
                    <div className="flex-1 bg-gray-700 rounded-full h-2 relative">
                      <div 
                        className="bg-blue-500 h-2 rounded-full"
                        style={{ width: `${(stat.defenses / 40) * 100}%` }}
                      ></div>
                    </div>
                    <div className="flex-1 bg-gray-700 rounded-full h-2 relative">
                      <div 
                        className="bg-yellow-500 h-2 rounded-full"
                        style={{ width: `${(stat.captures / 5) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="text-sm text-gray-300 w-20 text-right">
                  {stat.attacks + stat.defenses + stat.captures} hoạt động
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-center space-x-6 text-xs">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded"></div>
              <span className="text-gray-400">Tấn công</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded"></div>
              <span className="text-gray-400">Phòng thủ</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-yellow-500 rounded"></div>
              <span className="text-gray-400">Chiếm đóng</span>
            </div>
          </div>
        </div>

        {/* Territory Control */}
        <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
          <div className="flex items-center space-x-2 mb-6">
            <Globe className="w-5 h-5 text-blue-400" />
            <h2 className="text-xl font-semibold text-white">Kiểm Soát Lãnh Thổ</h2>
          </div>

          <div className="space-y-4">
            {territoryControl.map((control, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div 
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: control.color }}
                    ></div>
                    <span className="text-white font-semibold">{control.team}</span>
                  </div>
                  <span className="text-white font-bold">{control.percentage}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div 
                    className="h-3 rounded-full transition-all duration-1000"
                    style={{ 
                      width: `${control.percentage}%`,
                      backgroundColor: control.color 
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="mt-6 p-4 bg-gray-700/30 rounded-lg">
            <div className="text-center">
              <div className="text-lg font-bold text-white mb-1">87.5%</div>
              <div className="text-sm text-gray-400">Lãnh thổ đã được chiếm</div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Analytics */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Zap className="w-5 h-5 text-yellow-400" />
            <h3 className="text-lg font-semibold text-white">Cường Độ Chiến Đấu</h3>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">Cao</div>
            <div className="text-sm text-gray-400">47 hoạt động/phút</div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Clock className="w-5 h-5 text-blue-400" />
            <h3 className="text-lg font-semibold text-white">Thời Gian Trung Bình</h3>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">3:24</div>
            <div className="text-sm text-gray-400">mỗi trận chiến</div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Award className="w-5 h-5 text-green-400" />
            <h3 className="text-lg font-semibold text-white">Điểm Cao Nhất</h3>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">15,420</div>
            <div className="text-sm text-gray-400">Rồng Đỏ</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;