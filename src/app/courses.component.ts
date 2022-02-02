import { Component } from '@angular/core';
import { AbstractFormGroupDirective } from '@angular/forms';
import { CoursesService } from './course/courses.service';

@Component({
  selector: 'courses',
  template: ` {{ text | summary: 10 }}`,
})
//create component
export class CoursesComponent {
  text = `Lorem ipsum black fox running simply dymmy text need to be 50 chars and more ...`;
}
