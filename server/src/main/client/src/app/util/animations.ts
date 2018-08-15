import {
    trigger,
    animate,
    transition,
    style,
    query,
    stagger
  } from '@angular/animations';
  
  export const fadeAnimation = trigger('fadeAnimation', [
    transition('* => *', [
      query(
        ':enter',
        [style({ opacity: 0 })],
        { optional: true }
      ),
      query(
        ':leave',
        [style({ opacity: 1, transform: 'translateX(0)' }), animate('0.3s ease-in-out', style({ opacity: 0, transform: 'translateX(-2%)' }))],
        { optional: true }
      ),
      query(
        ':enter',
        [style({ opacity: 0, transform: 'translateX(-2%)' }), animate('0.3s ease-in-out', style({ opacity: 1, transform: 'translateX(0)'}))],
        { optional: true }
      )
    ])
  ]);

  export const slideDownUpAnimation = trigger('slideDownUpAnimation', [
    transition(':enter', [
      style({opacity: 0, transform: 'translateY(5%)'}),
      animate('0.3s ease-in-out', style({opacity: 1, transform: 'translateY(0%)'}))
    ]),
    transition(':leave', [
      animate('0.3s ease-in-out', style({opacity: 0, transform: 'translateY(5%)'}))
    ])
  ]);