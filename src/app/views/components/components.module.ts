import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SliderComponent} from "./slider/slider.component";
import { TimelineItemComponent } from './timeline-item/timeline-item.component';
import { SkillBarComponent } from './skill-bar/skill-bar.component';

@NgModule({
  declarations: [
    SliderComponent,
    TimelineItemComponent,
    SkillBarComponent],
  exports: [
    SliderComponent,
    TimelineItemComponent,
    SkillBarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule {
}
