import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {Component, bootstrap, CORE_DIRECTIVES, provide} from 'angular2/angular2'
import {GuestService} from './guest-service';
import {Registration} from './registration';
import {GuestList} from './guest-list';

var routes = {
  registration: {
    path: '/',
    as: 'Registration',
    component: Registration,
    caption: 'Registration',
    link: ['/Registration']
  },
  guestList: {
    path: '/list',
    as: 'GuestList',
    caption: 'GuestList',
    component: GuestList,
    link: ['/GuestList']
  }
};

@RouteConfig([
  routes.registration,
  routes.guestList,
])
@Component({
  selector: 'hello-cornell',
  templateUrl: 'app/hello-cornell.html',
  directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES]
})
class HelloCornell {
}

bootstrap(HelloCornell, [
  ROUTER_PROVIDERS,
  GuestService,
  provide(LocationStrategy, {useClass: HashLocationStrategy})
]);
