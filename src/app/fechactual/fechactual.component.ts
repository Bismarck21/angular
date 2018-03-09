import { Component } from '@angular/core';
@Component({
    selector: 'app-fechactual',
    template: `
            <p> Pamplona, Norte de Santander {{ hoy | date:'d/M/y H:m'}}</p>
            `
})
export class FechactualComponent {
    hoy: any = new Date();
}