import { Component, inject, signal, computed, effect, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IconService } from '../../services/iconService';
import { Icon } from '../../interfaces/icon';

type tabItem = 'languages' | 'frameworks-libraries' | 'databases' | 'tools'

@Component({
  selector: 'app-skills',
  templateUrl: './skills.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Skills {
  private skillService = inject(IconService);
  protected currentTab = signal<tabItem>('languages');
  protected currentSkills = signal<Icon[]>(this.skillService.getLanguages());

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
