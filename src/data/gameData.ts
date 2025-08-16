import { Territory, Team, GameEvent } from '../types/game';

export const territories: Territory[] = [
  {
    id: 'hanoi',
    name: 'Hà Nội',
    owner: 'red-dragons',
    ownerColor: '#ef4444',
    population: 8500000,
    resources: 95,
    defenseLevel: 85,
    x: 20,
    y: 15,
    width: 80,
    height: 60,
    isUnderAttack: false,
    lastActivity: '2 phút trước'
  },
  {
    id: 'hcm',
    name: 'TP.HCM',
    owner: 'blue-guardians',
    ownerColor: '#3b82f6',
    population: 9200000,
    resources: 88,
    defenseLevel: 92,
    x: 25,
    y: 280,
    width: 75,
    height: 55,
    isUnderAttack: true,
    lastActivity: '30 giây trước'
  },
  {
    id: 'danang',
    name: 'Đà Nẵng',
    owner: 'green-wolves',
    ownerColor: '#10b981',
    population: 1200000,
    resources: 72,
    defenseLevel: 68,
    x: 180,
    y: 180,
    width: 50,
    height: 40,
    isUnderAttack: false,
    lastActivity: '5 phút trước'
  },
  {
    id: 'haiphong',
    name: 'Hải Phòng',
    owner: 'red-dragons',
    ownerColor: '#ef4444',
    population: 2100000,
    resources: 65,
    defenseLevel: 75,
    x: 140,
    y: 45,
    width: 45,
    height: 35,
    isUnderAttack: false,
    lastActivity: '1 phút trước'
  },
  {
    id: 'cantho',
    name: 'Cần Thơ',
    owner: null,
    ownerColor: '#6b7280',
    population: 1300000,
    resources: 58,
    defenseLevel: 45,
    x: 60,
    y: 320,
    width: 55,
    height: 45,
    isUnderAttack: false,
    lastActivity: '10 phút trước'
  },
  {
    id: 'nhatrang',
    name: 'Nha Trang',
    owner: 'purple-phoenixes',
    ownerColor: '#8b5cf6',
    population: 650000,
    resources: 45,
    defenseLevel: 55,
    x: 200,
    y: 240,
    width: 40,
    height: 30,
    isUnderAttack: false,
    lastActivity: '3 phút trước'
  },
  {
    id: 'hue',
    name: 'Huế',
    owner: 'green-wolves',
    ownerColor: '#10b981',
    population: 450000,
    resources: 52,
    defenseLevel: 62,
    x: 160,
    y: 120,
    width: 35,
    height: 30,
    isUnderAttack: false,
    lastActivity: '7 phút trước'
  },
  {
    id: 'vungtau',
    name: 'Vũng Tàu',
    owner: 'blue-guardians',
    ownerColor: '#3b82f6',
    population: 480000,
    resources: 38,
    defenseLevel: 48,
    x: 80,
    y: 260,
    width: 30,
    height: 25,
    isUnderAttack: false,
    lastActivity: '4 phút trước'
  }
];

export const teams: Team[] = [
  {
    id: 'red-dragons',
    name: 'Rồng Đỏ',
    color: '#ef4444',
    score: 15420,
    territoriesOwned: 2,
    totalPopulation: 10600000,
    totalResources: 160,
    attacksLaunched: 23,
    defensesWon: 18,
    status: 'active'
  },
  {
    id: 'blue-guardians',
    name: 'Vệ Binh Xanh',
    color: '#3b82f6',
    score: 14850,
    territoriesOwned: 2,
    totalPopulation: 9680000,
    totalResources: 126,
    attacksLaunched: 19,
    defensesWon: 24,
    status: 'active'
  },
  {
    id: 'green-wolves',
    name: 'Sói Xanh',
    color: '#10b981',
    score: 12680,
    territoriesOwned: 2,
    totalPopulation: 1650000,
    totalResources: 124,
    attacksLaunched: 21,
    defensesWon: 16,
    status: 'active'
  },
  {
    id: 'purple-phoenixes',
    name: 'Phượng Hoàng Tím',
    color: '#8b5cf6',
    score: 8920,
    territoriesOwned: 1,
    totalPopulation: 650000,
    totalResources: 45,
    attacksLaunched: 15,
    defensesWon: 12,
    status: 'active'
  }
];

export const gameEvents: GameEvent[] = [
  {
    id: '1',
    timestamp: '14:23:45',
    type: 'attack',
    attacker: 'Rồng Đỏ',
    defender: 'Vệ Binh Xanh',
    territory: 'TP.HCM',
    description: 'Tấn công quy mô lớn vào hệ thống phòng thủ',
    severity: 'critical'
  },
  {
    id: '2',
    timestamp: '14:22:18',
    type: 'defense',
    defender: 'Vệ Binh Xanh',
    territory: 'TP.HCM',
    description: 'Kích hoạt lá chắn phòng thủ tự động',
    severity: 'high'
  },
  {
    id: '3',
    timestamp: '14:21:52',
    type: 'capture',
    attacker: 'Sói Xanh',
    territory: 'Huế',
    description: 'Chiếm đóng thành công vùng lãnh thổ',
    severity: 'high'
  },
  {
    id: '4',
    timestamp: '14:21:15',
    type: 'resource',
    territory: 'Hà Nội',
    description: 'Thu thập tài nguyên từ mỏ khoáng sản',
    severity: 'low'
  },
  {
    id: '5',
    timestamp: '14:20:43',
    type: 'alliance',
    attacker: 'Phượng Hoàng Tím',
    defender: 'Sói Xanh',
    territory: 'Đà Nẵng',
    description: 'Ký kết hiệp ước liên minh tạm thời',
    severity: 'medium'
  }
];