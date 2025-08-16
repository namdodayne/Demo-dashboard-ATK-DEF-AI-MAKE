import React from 'react';
import { Territory } from '../types/game';
import { 
  Users, 
  Coins, 
  Shield, 
  Clock, 
  AlertTriangle,
  Sword,
  Target,
  Zap
} from 'lucide-react';

interface TerritoryDetailsProps {
  territory: Territory | null;
  onAttack: (territoryId: string) => void;
  onDefend: (territoryId: string) => void;
}

const TerritoryDetails: React.FC<TerritoryDetailsProps> = ({ 
  territory, 
  onAttack, 
  onDefend 
}) => {
  if (!territory) {
    return (
      <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
        <div className="text-center text-gray-400">
          <Target className="w-12 h-12 mx-auto mb-4 opacity-50" />
          <p>Chọn một vùng lãnh thổ trên bản đồ để xem chi tiết</p>
        </div>
      </div>
    );
  }

  const getStatusColor = (status: string) => {
    if (territory.isUnderAttack) return 'text-red-400 bg-red-400/10 border-red-400/20';
    if (territory.owner) return 'text-green-400 bg-green-400/10 border-green-400/20';
    return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
  };

  const getStatusText = () => {
    if (territory.isUnderAttack) return 'ĐANG BỊ TẤN CÔNG';
    if (territory.owner) return 'ĐÃ CHIẾM ĐÓNG';
    return 'TRUNG LẬP';
  };

  return (
    <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-white">{territory.name}</h3>
        <div className={`px-3 py-1 rounded-full border text-xs font-semibold ${getStatusColor('')}`}>
          {getStatusText()}
        </div>
      </div>

      {/* Owner Info */}
      {territory.owner && (
        <div className="mb-4 p-3 bg-gray-700/50 rounded-lg border border-gray-600">
          <div className="flex items-center space-x-2">
            <div 
              className="w-4 h-4 rounded-full" 
              style={{ backgroundColor: territory.ownerColor }}
            ></div>
            <span className="text-white font-semibold">
              Thuộc về: {territory.owner === 'red-dragons' ? 'Rồng Đỏ' : 
                        territory.owner === 'blue-guardians' ? 'Vệ Binh Xanh' :
                        territory.owner === 'green-wolves' ? 'Sói Xanh' : 'Phượng Hoàng Tím'}
            </span>
          </div>
        </div>
      )}

      {/* Territory Stats */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-gray-700/30 rounded-lg p-3">
          <div className="flex items-center space-x-2 mb-2">
            <Users className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-gray-300">Dân số</span>
          </div>
          <div className="text-lg font-bold text-white">
            {(territory.population / 1000000).toFixed(1)}M
          </div>
        </div>

        <div className="bg-gray-700/30 rounded-lg p-3">
          <div className="flex items-center space-x-2 mb-2">
            <Coins className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-gray-300">Tài nguyên</span>
          </div>
          <div className="text-lg font-bold text-white">{territory.resources}</div>
        </div>

        <div className="bg-gray-700/30 rounded-lg p-3">
          <div className="flex items-center space-x-2 mb-2">
            <Shield className="w-4 h-4 text-green-400" />
            <span className="text-sm text-gray-300">Phòng thủ</span>
          </div>
          <div className="text-lg font-bold text-white">{territory.defenseLevel}%</div>
        </div>

        <div className="bg-gray-700/30 rounded-lg p-3">
          <div className="flex items-center space-x-2 mb-2">
            <Clock className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-gray-300">Hoạt động</span>
          </div>
          <div className="text-sm text-white">{territory.lastActivity}</div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3">
        {territory.owner ? (
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => onAttack(territory.id)}
              className="flex items-center justify-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-lg transition-colors font-semibold"
            >
              <Sword className="w-4 h-4" />
              <span>Tấn công</span>
            </button>
            <button
              onClick={() => onDefend(territory.id)}
              className="flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg transition-colors font-semibold"
            >
              <Shield className="w-4 h-4" />
              <span>Phòng thủ</span>
            </button>
          </div>
        ) : (
          <button
            onClick={() => onAttack(territory.id)}
            className="w-full flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg transition-colors font-semibold"
          >
            <Target className="w-4 h-4" />
            <span>Chiếm đóng</span>
          </button>
        )}
      </div>

      {/* Warning for under attack */}
      {territory.isUnderAttack && (
        <div className="mt-4 p-3 bg-red-900/30 border border-red-500/30 rounded-lg">
          <div className="flex items-center space-x-2">
            <AlertTriangle className="w-4 h-4 text-red-400" />
            <span className="text-red-300 text-sm font-semibold">
              Vùng này đang bị tấn công! Hành động ngay!
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default TerritoryDetails;