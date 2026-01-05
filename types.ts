
export interface Game {
  id: string;
  title: string;
  thumbnail: string;
  rating: number; // Percentage like 92%
  players: string; // Like "12.5K"
  link: string;
}

export interface NavItem {
  label: string;
  icon: string;
  href: string;
  active?: boolean;
}
