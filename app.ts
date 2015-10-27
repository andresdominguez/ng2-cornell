import {Component, bootstrap} from 'angular2/angular2';

@Component({
  selector: 'hello-cornell',
  template: 'Hello {{name}}!'
})
class HelloCornell {
  name: string;

  constructor() {
    this.name = 'World';
  }
}

bootstrap(HelloCornell);
