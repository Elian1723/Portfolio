import { Injectable } from '@angular/core';
import { MySkills } from '../shared/data/my-skills';
import { SkillIcon } from '../shared/interfaces/skillIcon';

@Injectable({
  providedIn: 'root'
})
export class SkillIcons {
  private skills = MySkills;

  public getAll(): SkillIcon[] {
    return this.skills;
  }

  public getLanguages(): SkillIcon[] {
    return this.skills.filter(s => s.type === 'language');
  }

  public getFrameworksLibraries(): SkillIcon[] {
    return this.skills.filter(s => s.type === 'framework&library');
  }

  public getDatabases(): SkillIcon[] {
    return this.skills.filter(s => s.type === 'database');
  }

  public getTools(): SkillIcon[] {
    return this.skills.filter(s => s.type === 'tool');
  }

}
