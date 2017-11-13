import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  @Output() onShow: () => void;
  @Output() onHide: () => void;

  private click() {
    console.log('click');
  }

}

class GraphZprime {
  
}
