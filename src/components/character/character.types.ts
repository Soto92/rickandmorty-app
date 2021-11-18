export interface RMCharacterItemProps {
  character: APICharacter;
}

export type APICharacter = {
  created: string;
  episode?: [];
  gender: 'Male' | 'Female' | 'Unknown';
  id: number;
  image: string;
  location?: any;
  name: string;
  origin?: any;
  species: 'Human' | 'Alien' | 'Unknown';
  status: 'Alive' | 'Dead';
  type?: string;
  url?: 'string';
};
