export type IconType = 'language' | 'framework-library' | 'database' | 'tool' | 'social';

export interface Icon {
  id: string;
  name: string;
  iconName: string;
  type: IconType;
}
