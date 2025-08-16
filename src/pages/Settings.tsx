import React, { useState } from 'react';
import { 
  Settings as SettingsIcon, 
  Clock, 
  Users, 
  Globe, 
  Shield, 
  Volume2,
  Monitor,
  Palette,
  Save,
  RotateCcw
} from 'lucide-react';

const Settings: React.FC = () => {
  const [gameSettings, setGameSettings] = useState({
    gameDuration: 120, // minutes
    maxTeams: 6,
    territoryCount: 8,
    autoSave: true,
    soundEnabled: true,
    notifications: true,
    theme: 'dark',
    mapStyle: 'realistic'
  });

  const handleSettingChange = (key: string, value: any) => {
    setGameSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleSave = () => {
    console.log('Lưu cài đặt:', gameSettings);
    // Implement save logic
  };

  const handleReset = () => {
    setGameSettings({
      gameDuration: 120,
      maxTeams: 6,
      territoryCount: 8,
      autoSave: true,
      soundEnabled: true,
      notifications: true,
      theme: 'dark',
      mapStyle: 'realistic'
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-2">
          <SettingsIcon className="w-8 h-8 text-purple-400" />
          <h1 className="text-3xl font-bold text-white">Cài Đặt Game</h1>
        </div>
        <p className="text-gray-400">Tùy chỉnh các thông số và giao diện của game</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Game Configuration */}
        <div className="space-y-6">
          <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
            <div className="flex items-center space-x-2 mb-6">
              <Clock className="w-5 h-5 text-blue-400" />
              <h2 className="text-xl font-semibold text-white">Cấu Hình Game</h2>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Thời gian game (phút)
                </label>
                <input
                  type="number"
                  value={gameSettings.gameDuration}
                  onChange={(e) => handleSettingChange('gameDuration', parseInt(e.target.value))}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500"
                  min="30"
                  max="300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Số đội tối đa
                </label>
                <select
                  value={gameSettings.maxTeams}
                  onChange={(e) => handleSettingChange('maxTeams', parseInt(e.target.value))}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500"
                >
                  <option value={4}>4 đội</option>
                  <option value={6}>6 đội</option>
                  <option value={8}>8 đội</option>
                  <option value={10}>10 đội</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Số lượng lãnh thổ
                </label>
                <input
                  type="range"
                  min="6"
                  max="20"
                  value={gameSettings.territoryCount}
                  onChange={(e) => handleSettingChange('territoryCount', parseInt(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>6</span>
                  <span className="text-white font-semibold">{gameSettings.territoryCount}</span>
                  <span>20</span>
                </div>
              </div>
            </div>
          </div>

          {/* Display Settings */}
          <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
            <div className="flex items-center space-x-2 mb-6">
              <Monitor className="w-5 h-5 text-green-400" />
              <h2 className="text-xl font-semibold text-white">Cài Đặt Hiển Thị</h2>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Chủ đề giao diện
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => handleSettingChange('theme', 'dark')}
                    className={`p-3 rounded-lg border transition-colors ${
                      gameSettings.theme === 'dark'
                        ? 'border-blue-500 bg-blue-500/10 text-blue-400'
                        : 'border-gray-600 bg-gray-700/30 text-gray-300 hover:border-gray-500'
                    }`}
                  >
                    Tối
                  </button>
                  <button
                    onClick={() => handleSettingChange('theme', 'light')}
                    className={`p-3 rounded-lg border transition-colors ${
                      gameSettings.theme === 'light'
                        ? 'border-blue-500 bg-blue-500/10 text-blue-400'
                        : 'border-gray-600 bg-gray-700/30 text-gray-300 hover:border-gray-500'
                    }`}
                  >
                    Sáng
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Kiểu bản đồ
                </label>
                <select
                  value={gameSettings.mapStyle}
                  onChange={(e) => handleSettingChange('mapStyle', e.target.value)}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500"
                >
                  <option value="realistic">Thực tế</option>
                  <option value="abstract">Trừu tượng</option>
                  <option value="minimal">Tối giản</option>
                  <option value="tactical">Chiến thuật</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* System Settings */}
        <div className="space-y-6">
          <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
            <div className="flex items-center space-x-2 mb-6">
              <Shield className="w-5 h-5 text-yellow-400" />
              <h2 className="text-xl font-semibold text-white">Cài Đặt Hệ Thống</h2>
            </div>

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-white font-medium">Tự động lưu</div>
                  <div className="text-sm text-gray-400">Lưu tiến độ game tự động</div>
                </div>
                <button
                  onClick={() => handleSettingChange('autoSave', !gameSettings.autoSave)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    gameSettings.autoSave ? 'bg-blue-600' : 'bg-gray-600'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      gameSettings.autoSave ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="text-white font-medium">Âm thanh</div>
                  <div className="text-sm text-gray-400">Hiệu ứng âm thanh game</div>
                </div>
                <button
                  onClick={() => handleSettingChange('soundEnabled', !gameSettings.soundEnabled)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    gameSettings.soundEnabled ? 'bg-blue-600' : 'bg-gray-600'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      gameSettings.soundEnabled ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="text-white font-medium">Thông báo</div>
                  <div className="text-sm text-gray-400">Thông báo sự kiện quan trọng</div>
                </div>
                <button
                  onClick={() => handleSettingChange('notifications', !gameSettings.notifications)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    gameSettings.notifications ? 'bg-blue-600' : 'bg-gray-600'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      gameSettings.notifications ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Game Rules */}
          <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
            <div className="flex items-center space-x-2 mb-6">
              <Globe className="w-5 h-5 text-purple-400" />
              <h2 className="text-xl font-semibold text-white">Luật Chơi</h2>
            </div>

            <div className="space-y-4 text-sm">
              <div className="p-3 bg-gray-700/30 rounded-lg">
                <div className="font-semibold text-white mb-2">Chiếm đóng lãnh thổ:</div>
                <div className="text-gray-300">Tấn công thành công để chiếm quyền kiểm soát</div>
              </div>
              
              <div className="p-3 bg-gray-700/30 rounded-lg">
                <div className="font-semibold text-white mb-2">Tính điểm:</div>
                <div className="text-gray-300">Dân số × 10 + Tài nguyên × 50 + Phòng thủ × 20</div>
              </div>
              
              <div className="p-3 bg-gray-700/30 rounded-lg">
                <div className="font-semibold text-white mb-2">Điều kiện thắng:</div>
                <div className="text-gray-300">Kiểm soát {'>'}50% lãnh thổ hoặc điểm cao nhất khi hết giờ</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-8 flex items-center justify-end space-x-4">
        <button
          onClick={handleReset}
          className="flex items-center space-x-2 bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition-colors"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Đặt lại</span>
        </button>
        <button
          onClick={handleSave}
          className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
        >
          <Save className="w-4 h-4" />
          <span>Lưu cài đặt</span>
        </button>
      </div>
    </div>
  );
};

export default Settings;