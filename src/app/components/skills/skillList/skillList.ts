import { Component, input } from '@angular/core';
import { SkillIcon } from '../../../shared/interfaces/skillIcon';
import { Icon } from "../../../shared/components/icon/icon";

@Component({
  selector: 'app-skill-list',
  imports: [Icon],
  templateUrl: './skillList.html',
})
export class SkillList {
  public currentSkills = input.required<SkillIcon[]>();
}
