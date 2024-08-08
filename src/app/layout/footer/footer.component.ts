import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [MatIconModule,FontAwesomeModule],
    templateUrl: './footer.component.html',
})
export class FooterComponent {
    faGithub = faGithub;
    faLinkedin = faLinkedin;
}
