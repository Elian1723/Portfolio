import { Component, inject } from '@angular/core';
import { ProjectService } from '../../services/projectService';
import { NgxFadeComponent } from '@omnedia/ngx-fade';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { ionLogoOctocat, ionArrowUpRightBoxOutline } from '@ng-icons/ionicons';
import { LanguageService } from '../../services/languageService';

@Component({
  selector: 'app-projects',
  imports: [NgxFadeComponent, NgIcon],
  templateUrl: './projects.html',
  providers: [provideIcons({ionLogoOctocat}), provideIcons({ionArrowUpRightBoxOutline})]
})
export class Projects {
  protected projectService = inject(ProjectService);
  protected languageService = inject(LanguageService);
}
