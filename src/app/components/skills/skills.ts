import { Component, inject, signal, computed, effect } from '@angular/core';
import { SkillIconService } from '../../services/skillIconService';
import { SkillIcon } from '../../interfaces/skillIcon';
import { Icon } from "../../shared/components/icon/icon";

type tabItem = 'languages' | 'frameworks-libraries' | 'databases' | 'tools'

@Component({
  selector: 'app-skills',
  imports: [Icon],
  templateUrl: './skills.html',
})
export class Skills {
  private skillService = inject(SkillIconService);
  protected currentTab = signal<tabItem>('languages');
  protected currentSkills = signal<SkillIcon[]>(this.skillService.getLanguages());

  protected changeCurrentTab(tab: tabItem): void {
    this.currentTab.update(() => tab);
  }

  protected onCurrentTabChange = effect(() => {
    const skillOption = this.currentTab();

    switch (skillOption) {
      case 'languages':
        this.currentSkills.update(() => this.skillService.getLanguages());
        break;
      case 'frameworks-libraries':
        this.currentSkills.update(() => this.skillService.getFrameworksLibraries());
        break;
      case 'databases':
        this.currentSkills.update(() => this.skillService.getDatabases());
        break;
      case 'tools':
        this.currentSkills.update(() => this.skillService.getTools());
        break;
    }
  })
}
