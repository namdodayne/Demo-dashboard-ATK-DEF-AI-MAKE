import React from 'react';
import { gameEvents } from '../data/gameData';
import { 
  Sword, 
  Shield, 
  Crown, 
  Coins, 
  Users, 
  Clock,
  AlertTriangle,
  CheckCircle
} from 'lucide-react';

const ActivityFeed: React.FC = () => {
  const getEventIcon = (type: string) => {
    switch (type) {
      case 'attack':
        return <Sword className="w-4 h-4 text-red-400" />;
      case 'defense':
        return <Shield className="w-4 h-4 text-blue-400" />;
      case 'capture':
        return <Crown className="w-4 h-4 text-yellow-400" />;
      case 'resource':
        return <Coins className="w-4 h-4 text-green-400" />;
      case 'alliance':
        return <Users className="w-4 h-4 text-purple-400" />;
      default:
        return <AlertTriangle className="w-4 h-4 text-gray-400" />;
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical':
        return 'border-red-500 bg-red-500/10';
      case 'high':
        return 'border-orange-500 bg-orange-500/10';
      case 'medium':
        return 'border-yellow-500 bg-yellow-500/10';
      case 'low':
        return 'border-blue-500 bg-blue-500/10';
      default:
        return 'border-gray-500 bg-gray-500/10';
    }
  };

  const getEventTypeText = (type: string) => {
    switch (type) {
      case 'attack':
        return 'TẤN CÔNG';
      case 'defense':
        return 'PHÒNG THỦ';
      case 'capture':
        return 'CHIẾM ĐÓNG';
      case 'resource':
        return 'TÀI NGUYÊN';
      case 'alliance':
        return 'LIÊN MINH';
      default:
        return 'KHÁC';
    }
  };

  return (
    <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Clock className="w-5 h-5 text-green-400" />
          <h2 className="text-xl font-semibold text-white">Hoạt Động Trực Tiếp</h2>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-sm text-gray-400">Cập nhật liên tục</span>
        </div>
      </div>

      <div className="space-y-3 max-h-96 overflow-y-auto">
        {gameEvents.map((event) => (
          <div 
            key={event.id} 
            className={`rounded-lg p-4 border-l-4 transition-all hover:bg-gray-700/30 ${getSeverityColor(event.severity)}`}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-3">
                {getEventIcon(event.type)}
                <span className="font-mono text-sm text-gray-400">{event.timestamp}</span>
                <span className={`px-2 py-1 rounded text-xs font-semibold ${
                  event.type === 'attack' ? 'bg-red-500/20 text-red-300' :
                  event.type === 'defense' ? 'bg-blue-500/20 text-blue-300' :
                  event.type === 'capture' ? 'bg-yellow-500/20 text-yellow-300' :
                  event.type === 'resource' ? 'bg-green-500/20 text-green-300' :
                  'bg-purple-500/20 text-purple-300'
                }`}>
                  {getEventTypeText(event.type)}
                </span>
              </div>
              <div className={`text-xs font-semibold ${
                event.severity === 'critical' ? 'text-red-400' :
                event.severity === 'high' ? 'text-orange-400' :
                event.severity === 'medium' ? 'text-yellow-400' :
                'text-blue-400'
              }`}>
                {event.severity === 'critical' ? 'NGHIÊM TRỌNG' :
                 event.severity === 'high' ? 'CAO' :
                 event.severity === 'medium' ? 'TRUNG BÌNH' : 'THẤP'}
              </div>
            </div>

            <div className="pl-7">
              <div className="text-sm text-white mb-1">
                {event.attacker && (
                  <>
                    <span className="font-semibold text-red-300">{event.attacker}</span>
                    {event.defender && (
                      <>
                        <span className="text-gray-400 mx-2">vs</span>
                        <span className="font-semibold text-blue-300">{event.defender}</span>
                      </>
                    )}
                    <span className="text-gray-400 mx-2">tại</span>
                  </>
                )}
                <span className="font-semibold text-yellow-300">{event.territory}</span>
              </div>
              <div className="text-sm text-gray-300">{event.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;