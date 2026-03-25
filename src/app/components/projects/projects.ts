import { Component, inject, signal } from '@angular/core';
import { ProjectService } from '../../services/projectService';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
})
export class Projects {
  private projectService = inject(ProjectService);
  protected projects = signal(this.projectService.getAll());
}
