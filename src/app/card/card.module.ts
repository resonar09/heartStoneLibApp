import { CardService } from './shared/card.service';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CardDeckPage } from './card-deck/card-deck.page';
import { CardListComponent } from './component/card-list.component';



@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        HttpClientModule
    ],
    declarations: [
        CardDeckPage,
        CardListComponent
    ],
    providers: [
        CardService
    ]
})
export class CardPageModule {}
