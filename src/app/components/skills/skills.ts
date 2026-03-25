import { Component, inject, signal, computed, effect } from '@angular/core';
import { SkillIcons } from '../../services/skillIcons';
import { SkillIcon } from '../../shared/interfaces/skillIcon';
import { SkillList } from "./skillList/skillList";

type tabItem = 'languages' | 'frameworks-libraries' | 'databases' | 'tools'

@Component({
  selector: 'app-skills',
  imports: [SkillList],
  templateUrl: './skills.html',
})
export class Skills {
  private skills = inject(SkillIcons);
  protected currentTab = signal<tabItem>('languages');
  protected currentSkills = signal<SkillIcon[]>(this.skills.getLanguages());

  protected changeCurrentTab(tab: tabItem): void {
    this.currentTab.update(() => tab);
  }

  protected onCurrentTabChange = effect(() => {
    const skillOption = this.currentTab();

    switch (skillOption) {
      case 'languages':
        this.currentSkills.update(() => this.skills.getLanguages());
        break;
      case 'frameworks-libraries':
        this.currentSkills.update(() => this.skills.getFrameworksLibraries());
        break;
      case 'databases':
        this.currentSkills.update(() => this.skills.getDatabases());
        break;
      case 'tools':
        this.currentSkills.update(() => this.skills.getTools());
        break;
    }
  })
}
