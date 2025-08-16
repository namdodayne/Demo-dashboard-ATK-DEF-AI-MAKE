import { Territory, Team, GameEvent } from '../types/game';

export const territories: Territory[] = [
  // Bắc Mỹ
  {
    id: 'usa',
    name: 'Hoa Kỳ',
    owner: 'red-dragons',
    ownerColor: '#ef4444',
    population: 331000000,
    resources: 95,
    defenseLevel: 88,
    x: 120,
    y: 80,
    width: 140,
    height: 80,
    isUnderAttack: false,
    lastActivity: '2 phút trước'
  },
  {
    id: 'canada',
    name: 'Canada',
    owner: 'blue-guardians',
    ownerColor: '#3b82f6',
    population: 38000000,
    resources: 78,
    defenseLevel: 82,
    x: 100,
    y: 40,
    width: 160,
    height: 60,
    isUnderAttack: false,
    lastActivity: '5 phút trước'
  },
  {
    id: 'mexico',
    name: 'Mexico',
    owner: null,
    ownerColor: '#6b7280',
    population: 128000000,
    resources: 65,
    defenseLevel: 45,
    x: 80,
    y: 140,
    width: 100,
    height: 60,
    isUnderAttack: false,
    lastActivity: '8 phút trước'
  },

  // Nam Mỹ
  {
    id: 'brazil',
    name: 'Brazil',
    owner: 'green-wolves',
    ownerColor: '#10b981',
    population: 215000000,
    resources: 85,
    defenseLevel: 72,
    x: 200,
    y: 220,
    width: 120,
    height: 100,
    isUnderAttack: true,
    lastActivity: '1 phút trước'
  },
  {
    id: 'argentina',
    name: 'Argentina',
    owner: 'purple-phoenixes',
    ownerColor: '#8b5cf6',
    population: 45000000,
    resources: 58,
    defenseLevel: 65,
    x: 180,
    y: 300,
    width: 80,
    height: 80,
    isUnderAttack: false,
    lastActivity: '4 phút trước'
  },

  // Châu Âu
  {
    id: 'russia',
    name: 'Nga',
    owner: 'red-dragons',
    ownerColor: '#ef4444',
    population: 146000000,
    resources: 92,
    defenseLevel: 90,
    x: 480,
    y: 60,
    width: 200,
    height: 80,
    isUnderAttack: false,
    lastActivity: '3 phút trước'
  },
  {
    id: 'germany',
    name: 'Đức',
    owner: 'blue-guardians',
    ownerColor: '#3b82f6',
    population: 83000000,
    resources: 88,
    defenseLevel: 85,
    x: 420,
    y: 100,
    width: 40,
    height: 35,
    isUnderAttack: false,
    lastActivity: '6 phút trước'
  },
  {
    id: 'france',
    name: 'Pháp',
    owner: 'blue-guardians',
    ownerColor: '#3b82f6',
    population: 67000000,
    resources: 82,
    defenseLevel: 80,
    x: 400,
    y: 110,
    width: 35,
    height: 40,
    isUnderAttack: false,
    lastActivity: '7 phút trước'
  },
  {
    id: 'uk',
    name: 'Anh',
    owner: 'green-wolves',
    ownerColor: '#10b981',
    population: 67000000,
    resources: 85,
    defenseLevel: 88,
    x: 380,
    y: 95,
    width: 30,
    height: 35,
    isUnderAttack: false,
    lastActivity: '9 phút trước'
  },

  // Châu Á
  {
    id: 'china',
    name: 'Trung Quốc',
    owner: 'red-dragons',
    ownerColor: '#ef4444',
    population: 1400000000,
    resources: 98,
    defenseLevel: 92,
    x: 580,
    y: 120,
    width: 120,
    height: 80,
    isUnderAttack: true,
    lastActivity: '30 giây trước'
  },
  {
    id: 'japan',
    name: 'Nhật Bản',
    owner: 'purple-phoenixes',
    ownerColor: '#8b5cf6',
    population: 125000000,
    resources: 90,
    defenseLevel: 95,
    x: 720,
    y: 130,
    width: 50,
    height: 60,
    isUnderAttack: false,
    lastActivity: '2 phút trước'
  },
  {
    id: 'india',
    name: 'Ấn Độ',
    owner: 'green-wolves',
    ownerColor: '#10b981',
    population: 1380000000,
    resources: 75,
    defenseLevel: 68,
    x: 520,
    y: 180,
    width: 80,
    height: 70,
    isUnderAttack: false,
    lastActivity: '5 phút trước'
  },
  {
    id: 'vietnam',
    name: 'Việt Nam',
    owner: 'blue-guardians',
    ownerColor: '#3b82f6',
    population: 97000000,
    resources: 70,
    defenseLevel: 75,
    x: 620,
    y: 200,
    width: 35,
    height: 50,
    isUnderAttack: false,
    lastActivity: '1 phút trước'
  },

  // Châu Phi
  {
    id: 'egypt',
    name: 'Ai Cập',
    owner: null,
    ownerColor: '#6b7280',
    population: 102000000,
    resources: 55,
    defenseLevel: 50,
    x: 460,
    y: 200,
    width: 40,
    height: 35,
    isUnderAttack: false,
    lastActivity: '12 phút trước'
  },
  {
    id: 'south-africa',
    name: 'Nam Phi',
    owner: 'purple-phoenixes',
    ownerColor: '#8b5cf6',
    population: 59000000,
    resources: 68,
    defenseLevel: 62,
    x: 460,
    y: 320,
    width: 60,
    height: 50,
    isUnderAttack: false,
    lastActivity: '6 phút trước'
  },

  // Châu Đại Dương
  {
    id: 'australia',
    name: 'Úc',
    owner: 'green-wolves',
    ownerColor: '#10b981',
    population: 25000000,
    resources: 80,
    defenseLevel: 78,
    x: 680,
    y: 300,
    width: 100,
    height: 70,
    isUnderAttack: false,
    lastActivity: '4 phút trước'
  }
];

export const teams: Team[] = [
  {
    id: 'red-dragons',
    name: 'Rồng Đỏ',
    color: '#ef4444',
    score: 25420,
    territoriesOwned: 3,
    totalPopulation: 1877000000,
    totalResources: 285,
    attacksLaunched: 34,
    defensesWon: 28,
    status: 'active'
  },
  {
    id: 'blue-guardians',
    name: 'Vệ Binh Xanh',
    color: '#3b82f6',
    score: 22850,
    territoriesOwned: 4,
    totalPopulation: 585000000,
    totalResources: 325,
    attacksLaunched: 28,
    defensesWon: 35,
    status: 'active'
  },
  {
    id: 'green-wolves',
    name: 'Sói Xanh',
    color: '#10b981',
    score: 21680,
    territoriesOwned: 4,
    totalPopulation: 1470000000,
    totalResources: 313,
    attacksLaunched: 31,
    defensesWon: 26,
    status: 'active'
  },
  {
    id: 'purple-phoenixes',
    name: 'Phượng Hoàng Tím',
    color: '#8b5cf6',
    score: 18920,
    territoriesOwned: 3,
    totalPopulation: 229000000,
    totalResources: 216,
    attacksLaunched: 25,
    defensesWon: 22,
    status: 'active'
  }
];

export const gameEvents: GameEvent[] = [
  {
    id: '1',
    timestamp: '14:23:45',
    type: 'attack',
    attacker: 'Rồng Đỏ',
    defender: 'Sói Xanh',
    territory: 'Trung Quốc',
    description: 'Tấn công quy mô lớn vào hệ thống phòng thủ',
    severity: 'critical'
  },
  {
    id: '2',
    timestamp: '14:22:18',
    type: 'defense',
    defender: 'Vệ Binh Xanh',
    territory: 'Việt Nam',
    description: 'Kích hoạt lá chắn phòng thủ tự động',
    severity: 'high'
  },
  {
    id: '3',
    timestamp: '14:21:52',
    type: 'capture',
    attacker: 'Sói Xanh',
    territory: 'Úc',
    description: 'Chiếm đóng thành công lục địa',
    severity: 'high'
  },
  {
    id: '4',
    timestamp: '14:21:15',
    type: 'resource',
    territory: 'Hoa Kỳ',
    description: 'Thu thập tài nguyên từ mỏ dầu',
    severity: 'low'
  },
  {
    id: '5',
    timestamp: '14:20:43',
    type: 'alliance',
    attacker: 'Phượng Hoàng Tím',
    defender: 'Sói Xanh',
    territory: 'Nam Phi',
    description: 'Ký kết hiệp ước liên minh tạm thời',
    severity: 'medium'
  },
  {
    id: '6',
    timestamp: '14:20:12',
    type: 'attack',
    attacker: 'Vệ Binh Xanh',
    defender: 'Rồng Đỏ',
    territory: 'Nga',
    description: 'Tấn công mạng vào hệ thống năng lượng',
    severity: 'high'
  },
  {
    id: '7',
    timestamp: '14:19:58',
    type: 'defense',
    defender: 'Phượng Hoàng Tím',
    territory: 'Nhật Bản',
    description: 'Triển khai tường lửa nâng cao',
    severity: 'medium'
  },
  {
    id: '8',
    timestamp: '14:19:33',
    type: 'capture',
    attacker: 'Rồng Đỏ',
    territory: 'Hoa Kỳ',
    description: 'Kiểm soát hoàn toàn hạ tầng mạng',
    severity: 'critical'
  }
];