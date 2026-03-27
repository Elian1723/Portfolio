import { Component, inject, signal, computed, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IconService } from '../../services/iconService';
import { TitleCasePipe } from '@angular/common';

type tabItem = 'languages' | 'frameworks-libraries' | 'databases' | 'tools'

@Component({
  selector: 'app-skills',
  templateUrl: './skills.html',
  imports: [TitleCasePipe],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Skills {
  private skillService = inject(IconService);
  protected currentTab = signal<tabItem>('languages');
  protected tabs = signal<tabItem[]>(['languages', 'frameworks-libraries', 'databases', 'tools']);

  protected currentIcons = computed(() => {
    const tab = this.currentTab();

    switch (tab) {
      case 'languages': return this.skillService.getLanguages();
      case 'frameworks-libraries': return this.skillService.getFrameworksLibraries();
      case 'databases': return this.skillService.getDatabases();
      case 'tools': return this.skillService.getTools();
      default: return [];
    }
  });

  protected changeCurrentTab(tab: tabItem): void {
    this.currentTab.set(tab);
  }
}
