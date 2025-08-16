import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  Target, 
  Activity, 
  Users, 
  Clock, 
  AlertTriangle, 
  CheckCircle, 
  XCircle,
  Zap,
  Network,
  Eye,
  Server,
  Lock,
  Unlock
} from 'lucide-react';

interface Team {
  id: number;
  name: string;
  score: number;
  attacks: number;
  defenses: number;
  status: 'active' | 'compromised' | 'secure';
}

interface Activity {
  id: number;
  timestamp: string;
  type: 'attack' | 'defense' | 'breach' | 'patch';
  source: string;
  target: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  description: string;
}

interface SystemHealth {
  name: string;
  status: 'healthy' | 'warning' | 'critical';
  uptime: string;
  threats: number;
}

const Dashboard: React.FC = () => {
  const [gameTime, setGameTime] = useState(7200); // 2 hours in seconds
  const [isGameActive, setIsGameActive] = useState(true);

  const teams: Team[] = [
    { id: 1, name: "Red Hawks", score: 2750, attacks: 23, defenses: 18, status: 'active' },
    { id: 2, name: "Blue Guardians", score: 2580, attacks: 19, defenses: 22, status: 'secure' },
    { id: 3, name: "Cyber Wolves", score: 2420, attacks: 21, defenses: 16, status: 'compromised' },
    { id: 4, name: "Digital Shields", score: 2350, attacks: 17, defenses: 24, status: 'secure' },
    { id: 5, name: "Code Breakers", score: 2180, attacks: 25, defenses: 14, status: 'active' },
    { id: 6, name: "Network Ninjas", score: 2050, attacks: 16, defenses: 19, status: 'compromised' },
  ];

  const activities: Activity[] = [
    { id: 1, timestamp: "14:23:45", type: 'attack', source: "Red Hawks", target: "Web Server", severity: 'high', description: "SQL injection attempt detected" },
    { id: 2, timestamp: "14:23:12", type: 'defense', source: "Blue Guardians", target: "Database", severity: 'medium', description: "Firewall rule updated" },
    { id: 3, timestamp: "14:22:58", type: 'breach', source: "Code Breakers", target: "Admin Panel", severity: 'critical', description: "Unauthorized access gained" },
    { id: 4, timestamp: "14:22:31", type: 'patch', source: "Digital Shields", target: "API Gateway", severity: 'low', description: "Security patch applied" },
    { id: 5, timestamp: "14:22:15", type: 'attack', source: "Cyber Wolves", target: "User Database", severity: 'high', description: "Brute force attack initiated" },
    { id: 6, timestamp: "14:21:47", type: 'defense', source: "Network Ninjas", target: "Mail Server", severity: 'medium', description: "Intrusion detection activated" },
  ];

  const systemHealth: SystemHealth[] = [
    { name: "Web Services", status: 'healthy', uptime: "99.8%", threats: 3 },
    { name: "Database Cluster", status: 'warning', uptime: "98.2%", threats: 7 },
    { name: "API Gateway", status: 'healthy', uptime: "99.9%", threats: 2 },
    { name: "Authentication", status: 'critical', uptime: "95.1%", threats: 12 },
    { name: "File Storage", status: 'healthy', uptime: "99.5%", threats: 1 },
    { name: "Network Core", status: 'warning', uptime: "97.8%", threats: 5 },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      if (isGameActive && gameTime > 0) {
        setGameTime(prev => prev - 1);
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

  const getStatusColor = (status: string): string => {
    switch (status) {
      case 'healthy':
      case 'secure':
        return 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20';
      case 'warning':
      case 'active':
        return 'text-amber-400 bg-amber-400/10 border-amber-400/20';
      case 'critical':
      case 'compromised':
        return 'text-red-400 bg-red-400/10 border-red-400/20';
      default:
        return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
    }
  };

  const getSeverityColor = (severity: string): string => {
    switch (severity) {
      case 'low':
        return 'text-blue-400';
      case 'medium':
        return 'text-amber-400';
      case 'high':
        return 'text-orange-400';
      case 'critical':
        return 'text-red-400';
      default:
        return 'text-gray-400';
    }
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'attack':
        return <Target className="w-4 h-4 text-red-400" />;
      case 'defense':
        return <Shield className="w-4 h-4 text-blue-400" />;
      case 'breach':
        return <Unlock className="w-4 h-4 text-red-500" />;
      case 'patch':
        return <Lock className="w-4 h-4 text-green-400" />;
      default:
        return <Activity className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Shield className="w-8 h-8 text-blue-400" />
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                CyberDefense Arena
              </h1>
            </div>
            <div className={`px-3 py-1 rounded-full border ${isGameActive ? 'text-green-400 bg-green-400/10 border-green-400/20' : 'text-red-400 bg-red-400/10 border-red-400/20'}`}>
              {isGameActive ? 'ACTIVE' : 'ENDED'}
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <div className="text-center">
              <div className="text-2xl font-mono font-bold text-blue-400">
                {formatTime(gameTime)}
              </div>
              <div className="text-sm text-gray-400">Time Remaining</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">
                {teams.length}
              </div>
              <div className="text-sm text-gray-400">Active Teams</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Team Leaderboard */}
        <div className="lg:col-span-1">
          <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
            <div className="flex items-center space-x-2 mb-4">
              <Users className="w-5 h-5 text-blue-400" />
              <h2 className="text-xl font-semibold">Team Leaderboard</h2>
            </div>
            <div className="space-y-3">
              {teams.map((team, index) => (
                <div key={team.id} className="bg-gray-700/50 rounded-lg p-4 border border-gray-600">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold ${
                        index === 0 ? 'bg-yellow-400 text-gray-900' :
                        index === 1 ? 'bg-gray-400 text-gray-900' :
                        index === 2 ? 'bg-amber-600 text-white' :
                        'bg-gray-600 text-gray-300'
                      }`}>
                        {index + 1}
                      </div>
                      <span className="font-semibold">{team.name}</span>
                    </div>
                    <div className={`px-2 py-1 rounded text-xs border ${getStatusColor(team.status)}`}>
                      {team.status.toUpperCase()}
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <div className="text-2xl font-bold text-blue-400">{team.score.toLocaleString()}</div>
                    <div className="flex space-x-4 text-gray-400">
                      <span className="flex items-center space-x-1">
                        <Target className="w-3 h-3" />
                        <span>{team.attacks}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Shield className="w-3 h-3" />
                        <span>{team.defenses}</span>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Activity Feed & System Health */}
        <div className="lg:col-span-2 space-y-6">
          {/* Activity Feed */}
          <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
            <div className="flex items-center space-x-2 mb-4">
              <Activity className="w-5 h-5 text-green-400" />
              <h2 className="text-xl font-semibold">Live Activity Feed</h2>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </div>
            <div className="space-y-2 max-h-80 overflow-y-auto">
              {activities.map((activity) => (
                <div key={activity.id} className="bg-gray-700/30 rounded p-3 border-l-4 border-gray-600 hover:border-blue-400 transition-colors">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center space-x-2">
                      {getActivityIcon(activity.type)}
                      <span className="font-mono text-sm text-gray-400">{activity.timestamp}</span>
                      <span className="text-sm font-semibold">{activity.source}</span>
                      <span className="text-gray-400">→</span>
                      <span className="text-sm">{activity.target}</span>
                    </div>
                    <div className={`text-xs font-semibold ${getSeverityColor(activity.severity)}`}>
                      {activity.severity.toUpperCase()}
                    </div>
                  </div>
                  <div className="text-sm text-gray-300 pl-6">{activity.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* System Health */}
          <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
            <div className="flex items-center space-x-2 mb-4">
              <Server className="w-5 h-5 text-purple-400" />
              <h2 className="text-xl font-semibold">System Health Overview</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {systemHealth.map((system, index) => (
                <div key={index} className="bg-gray-700/50 rounded-lg p-4 border border-gray-600">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-sm">{system.name}</h3>
                    <div className={`px-2 py-1 rounded text-xs border ${getStatusColor(system.status)}`}>
                      {system.status.toUpperCase()}
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Uptime:</span>
                      <span className="font-mono">{system.uptime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Active Threats:</span>
                      <span className={`font-bold ${system.threats > 5 ? 'text-red-400' : system.threats > 2 ? 'text-amber-400' : 'text-green-400'}`}>
                        {system.threats}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Statistics Bar */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-gray-800 rounded-lg border border-gray-700 p-4 text-center">
          <div className="text-2xl font-bold text-red-400">147</div>
          <div className="text-sm text-gray-400">Total Attacks</div>
        </div>
        <div className="bg-gray-800 rounded-lg border border-gray-700 p-4 text-center">
          <div className="text-2xl font-bold text-blue-400">203</div>
          <div className="text-sm text-gray-400">Defenses Deployed</div>
        </div>
        <div className="bg-gray-800 rounded-lg border border-gray-700 p-4 text-center">
          <div className="text-2xl font-bold text-amber-400">12</div>
          <div className="text-sm text-gray-400">Systems Compromised</div>
        </div>
        <div className="bg-gray-800 rounded-lg border border-gray-700 p-4 text-center">
          <div className="text-2xl font-bold text-green-400">91%</div>
          <div className="text-sm text-gray-400">Overall Security</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;