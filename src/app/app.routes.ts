import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
    { path: 'contact', component: ContactComponent},
    { path: 'about', component: AboutComponent},
    { path: 'main', component: MainComponent },
    { path: 'projects', component: ProjectsComponent},
    { path: '**', redirectTo: '/main' },
];
