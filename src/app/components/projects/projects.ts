import { Component, inject, signal } from '@angular/core';
import { ProjectService } from '../../services/projectService';
import { NgxFadeComponent } from '@omnedia/ngx-fade';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { ionLogoOctocat } from '@ng-icons/ionicons';

@Component({
  selector: 'app-projects',
  imports: [NgxFadeComponent, NgIcon],
  templateUrl: './projects.html',
  providers: [provideIcons({ionLogoOctocat})]
})
export class Projects {
  protected projectService = inject(ProjectService);
}
