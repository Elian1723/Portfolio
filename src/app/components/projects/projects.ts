import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, signal } from '@angular/core';
import { ProjectService } from '../../services/projectService';
import { NgxFadeComponent } from '@omnedia/ngx-fade';

@Component({
  selector: 'app-projects',
  imports: [NgxFadeComponent],
  templateUrl: './projects.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Projects {
  private projectService = inject(ProjectService);
  protected projects = signal(this.projectService.getAll());
}
