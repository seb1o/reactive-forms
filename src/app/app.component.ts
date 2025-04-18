import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BigFormComponent } from './components/big-form/big-form.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BigFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'reactive-forms';
}
