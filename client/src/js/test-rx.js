import { Observable, Observer, Subject, fromEvent } from 'rxjs'
import { Rx } from 'rxjs'
import { subscribe } from 'rxjs/operators'
let button = document.getElementsByClassName('react__btn')[0]
console.log(subscribe)
fromEvent(button, 'click')
  .subscribe(() => console.log('Clicked!'))