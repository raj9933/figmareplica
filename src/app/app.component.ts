import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PortfolioComponent } from "./portfolio/portfolio.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PortfolioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'blocklywebsite';

  formshow=false;

  showform(){
    this.formshow=!this.formshow;
  }

}
