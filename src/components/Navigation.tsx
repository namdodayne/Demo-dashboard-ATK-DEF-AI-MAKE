import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Crown, 
  Users, 
  BarChart3, 
  Settings, 
  Home,
  Shield
} from 'lucide-react';

const Navigation: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', icon: Home, label: 'Dashboard', color: 'text-blue-400' },
    { path: '/teams', icon: Users, label: 'Đội', color: 'text-green-400' },
    { path: '/analytics', icon: BarChart3, label: 'Thống Kê', color: 'text-purple-400' },
    { path: '/settings', icon: Settings, label: 'Cài Đặt', color: 'text-yellow-400' },
  ];

  return (
    <nav className="bg-gray-800 border-b border-gray-700">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <Shield className="w-8 h-8 text-red-400" />
              <Crown className="w-8 h-8 text-yellow-400" />
            </div>
            <div>
              <div className="text-xl font-bold text-white">CyberWar</div>
              <div className="text-xs text-gray-400">Chiến Trường Số</div>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                    isActive
                      ? 'bg-gray-700 text-white border border-gray-600'
                      : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? item.color : ''}`} />
                  <span className="font-medium">{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Game Status */}
          <div className="flex items-center space-x-4">
            <div className="text-center">
              <div className="text-sm font-bold text-green-400">HOẠT ĐỘNG</div>
              <div className="text-xs text-gray-400">Trạng thái</div>
            </div>
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;