import { Component, inject, signal } from '@angular/core';
import { ProjectService } from '../../services/projectService';
import { NgxFadeComponent } from '@omnedia/ngx-fade';
import * as socialIcons from '../../shared/icons/socialIcons'
import { NgIcon, provideIcons } from '@ng-icons/core';
import { IconService } from '../../services/iconService';

@Component({
  selector: 'app-projects',
  imports: [NgxFadeComponent, NgIcon],
  templateUrl: './projects.html',
  providers: [provideIcons(socialIcons)]
})
export class Projects {
  protected projectService = inject(ProjectService);
  protected iconService = inject(IconService);
}
