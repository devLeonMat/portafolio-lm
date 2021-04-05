import {Component, Input, OnInit} from '@angular/core';
import {SkillModel} from '../../../data/schema/skill.model';

@Component({
  selector: 'app-skill-bar',
  templateUrl: './skill-bar.component.html',
  styleUrls: ['./skill-bar.component.css']
})
export class SkillBarComponent implements OnInit {

  @Input() skill: SkillModel;
  description = 'Basic';
  percent = 0;

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.skill);
    this.percent = Number(this.skill.percent.substring(0, 2));
    if (33 <= this.percent && this.percent <= 66) {
      this.description = 'Intermediate';
    }
    if (67 <= this.percent) {
      this.description = 'Advanced';
    }
  }

}
