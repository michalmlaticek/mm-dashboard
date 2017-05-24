import { Component, Input } from '@angular/core';
import { ITooltipConfig } from 'mm-dashboard-core';


@Component({
    selector: 'mm-baloon',
    template: `
        <div class="mm-baloon" [style.top]="config.event.clientY + 'px'" [style.left]="config.event.clientX + 'px'">
            <ul>
                <li *ngFor="let item of config.values; let i = index">
                    <span>{{item.key}}</span><span>:</span><span>{{item.value}}</span>
                </li>
            </ul>
        </div>
    `,
    styles: [
        `
        .mm-baloon {
            display: box;
            position: absolute;
        }

        .mm-baloon ul {
            margin: 0xp 0px;
            padding: 3px 3px;
            list-style-type: none;
        }
        
        `
    ]
})
export class BaloonComponent {
    @Input() config: ITooltipConfig;


}