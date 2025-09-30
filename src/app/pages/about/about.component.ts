import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  skills = [
    {
      name: 'Frontend',
      items: ['Angular', 'React', 'HTML & CSS', 'TypeScript']
    },
    {
      name: 'Backend',
      items: ['Node.js / Express', 'Java / Spring Boot', 'Python / Django', 'SQL & NoSQL Databases']
    },
    {
      name: 'Tools & Others',
      items: ['Git / GitHub', 'Linux', 'Docker', 'Figma']
    }
  ];

  goBack() {
    window.history.back();
  }
}
