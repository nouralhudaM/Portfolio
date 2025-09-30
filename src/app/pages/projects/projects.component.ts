import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Project {
  img: string;
  title: string;
  subtitle: string;
  link?: string;
}

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  sliderItems: Project[] = [
    { img: '/assets/images/inf1900.jpg', 
      title: 'Obstacle Detection Robot', 
      subtitle: 'Autonomous four-wheeled robot project using a microcontroller and a distance sensor to detect poles and generate trajectory visualizations.' 
    },
    { img: '/assets/images/polyhoot.jpg', 
      title: 'Polyhoot', 
      subtitle: 'A full-stack interactive PC website with Angular and NestJS, featuring real-time functionalities and an enhanced user experience.',
      link: 'https://github.com/nouralhudaM/Polyhoot'
    },
    { img: '/assets/images/polyhoot2.jpg', 
      title: 'Polyhoot V2', 
      subtitle: 'Enhancement and maintenance projet. Transformed Polyhoot into desktop and Android versions while adding new features and ensuring stability through comprehensive testing.' 
    },
    { img: '/assets/images/portfolio.jpg', 
      title: 'Portfolio', 
      subtitle: 'Showcases a collection of my projects, skills, and technical expertise in software development.',
      link: 'https://github.com/nouralhudaM/Portfolio'
    },
    { img: '/assets/images/violetvortex.jpg', 
      title: 'Video Games Website', 
      subtitle: 'Developing a browser-based video game website featuring multiple 2D games with interactive gameplay and optimized user experience.',
      link: 'https://github.com/nouralhudaM/Video-Games-Website'
    },
    { img: '/assets/images/ledmatrix.jpg', 
      title: 'Led Matrix', 
      subtitle: 'A Snake game on an 8×8 RGB LED matrix developped using Arduino, featuring interactive controls and smooth gameplay.',
      link: 'https://github.com/nouralhudaM/LED-Matrix-Game'
    },
    { img: '/assets/images/mmachine.jpg', 
      title: 'Monitoring Machine', 
      subtitle: 'Angular web application for visualizing production sites, departments, and machines, featuring hierarchical navigation, potential real-time machine status, and interactive monitoring.', 
      link:'https://github.com/nouralhudaM/factory-visualizer' 
    },
  ];

  activeIndex = 3;
  scrollTimeout: any;

  setActive(index: number) {
    this.activeIndex = index;
  }
  
  onWheel(event: WheelEvent) {
    if (this.scrollTimeout) return;
  
    if (event.deltaY > 0) {
      this.activeIndex = (this.activeIndex + 1) % this.sliderItems.length;
    } else {
      this.activeIndex = (this.activeIndex - 1 + this.sliderItems.length) % this.sliderItems.length;
    }
  
    this.scrollTimeout = setTimeout(() => this.scrollTimeout = null, 200);
    event.preventDefault();
  }

  navigateToRepo(item: Project) {
    if (item.link) {
      window.open(item.link, "_blank");
    }
  }

  goBack() {
    window.history.back();
  }
}
