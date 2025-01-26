import { trigger, transition, style, animate, query, group } from '@angular/animations';

export const slideAnimation = trigger('routeAnimations', [
  transition('* <=> *', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
      })
    ], { optional: true }),
    query(':enter', [
      style({ 
        transform: 'translateX(100%)',
        opacity: 0
      })
    ], { optional: true }),
    query(':leave', [
      style({ 
        transform: 'translateX(0)',
        opacity: 1
      })
    ], { optional: true }),
    group([
      query(':leave', [
        animate('300ms ease-out', 
          style({ 
            transform: 'translateX(-100%)',
            opacity: 0
          })
        )
      ], { optional: true }),
      query(':enter', [
        animate('300ms ease-out', 
          style({ 
            transform: 'translateX(0)',
            opacity: 1
          })
        )
      ], { optional: true })
    ])
  ])
]); 