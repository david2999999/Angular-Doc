import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { ProductTableComponent } from './product/product-table/product-table.component';
import { ProductFormComponent } from './product/product-form/product-form.component';
import { ProductComponent } from './product/product.component';
import {PaIteratorDirective} from "./directives/iterator.directive";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ToggleViewComponent } from './toggle-view/toggle-view.component';
import {PaCellColorSwitcher} from "./directives/cellColorSwitcher.directive";
import {PaCellColor} from "./directives/cellColor.directive";
import {PaStructureDirective} from "./directives/structure.directive";
import {addTaxPipe} from "./pipe/addTax.pipe";
import {categoryFilterPipe} from "./pipe/ategoryFilter.pipe";
import localeFr from '@angular/common/locales/fr';
import {registerLocaleData} from "@angular/common";
import { DiscountDisplayComponent } from './product/discount-display/discount-display.component';
import { DiscountEditorComponent } from './product/discount-editor/discount-editor.component';
import {DiscountService} from "./service/discount.service";
import {DiscountPipe} from "./pipe/discount.pipe";
import {DiscountAmountDirective} from "./directives/discountAmount.directive";
import {SimpleDataSource} from "./model/datasource.model";
import {Model} from "./model/repository.model";
import {LOG_LEVEL, LOG_SERVICE, LogLevel, LogService, SpecialLogService} from "./service/log.service";
import {PaDisplayValueDirective, VALUE_SERVICE} from "./directives/valueDisplay.directive";

let logger = new LogService();
logger.minimumLevel = LogLevel.DEBUG;

@NgModule({
  declarations: [
    AppComponent,
    ProductTableComponent,
    ProductFormComponent,
    ProductComponent,
    PaIteratorDirective,
    ToggleViewComponent,
    PaCellColorSwitcher,
    PaCellColor,
    PaStructureDirective,
    DiscountAmountDirective,
    addTaxPipe,
    categoryFilterPipe,
    DiscountPipe,
    DiscountDisplayComponent,
    DiscountEditorComponent,
    PaDisplayValueDirective
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule
  ],
  providers: [DiscountService, SimpleDataSource, Model, LogService,
              { provide: VALUE_SERVICE, useValue: "Apples" }],
  bootstrap: [AppComponent]
})
export class AppModule { }
