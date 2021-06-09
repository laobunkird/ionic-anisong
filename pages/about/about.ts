import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  dark = false;
  get page() {
    return {
      title: 'About'
    };
  }

  constructor(public navCtrl: NavController) {
    const prefersColor = window.matchMedia('(prefers-color-scheme: dark)');
    this.dark = prefersColor.matches;
    this.updateDarkMode();

    prefersColor.addEventListener('change', mediaQuery => {
      this.dark = mediaQuery.matches;
      this.updateDarkMode();
    });
  }
  updateDarkMode() {
    document.body.classList.toggle('dark', this.dark);
  }
}
