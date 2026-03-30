export type IconType = 'language' | 'framework-library' | 'database' | 'tool' | 'social' | 'ia';

export interface Icon {
  id: string;
  name: string;
  iconName: string;
  type: IconType;
}
