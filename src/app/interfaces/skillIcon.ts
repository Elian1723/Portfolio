export type SkillIconType = 'language' | 'framework&library' | 'database' | 'tool';

export interface SkillIcon {
  id: string;
  name: string;
  iconName: string;
  type: SkillIconType;
}
