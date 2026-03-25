import { Injectable } from '@angular/core';
import { MyProjects } from '../shared/data/my-projects';
import { Project } from '../interfaces/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects = MyProjects;

  public getAll(): Project[] {
    return this.projects
  }
}
