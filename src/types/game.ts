export interface Territory {
  id: string;
  name: string;
  owner: string | null;
  ownerColor: string;
  population: number;
  resources: number;
  defenseLevel: number;
  x: number;
  y: number;
  width: number;
  height: number;
  isUnderAttack: boolean;
  lastActivity: string;
}

export interface Team {
  id: string;
  name: string;
  color: string;
  score: number;
  territoriesOwned: number;
  totalPopulation: number;
  totalResources: number;
  attacksLaunched: number;
  defensesWon: number;
  status: 'active' | 'eliminated' | 'winning';
}

export interface GameEvent {
  id: string;
  timestamp: string;
  type: 'attack' | 'defense' | 'capture' | 'resource' | 'alliance';
  attacker?: string;
  defender?: string;
  territory: string;
  description: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
}

export interface GameStats {
  totalTerritories: number;
  activeBattles: number;
  totalPlayers: number;
  gameTime: number;
  isActive: boolean;
}