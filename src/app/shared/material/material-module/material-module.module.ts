import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { CdkMenu, CdkMenuItem, CdkMenuTrigger } from '@angular/cdk/menu';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatExpansionModule } from '@angular/material/expansion'
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatBadgeModule } from '@angular/material/badge';
import { MatRadioModule } from '@angular/material/radio';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
// import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatChipsModule } from '@angular/material/chips';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const MaterialComponents = [
    MatSelectModule,
    MatInputModule,
    FormsModule,
    MatCheckboxModule,
    MatNativeDateModule,
    CdkMenu,
    CdkMenuItem,
    CdkMenuTrigger,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatDividerModule,
    // MatMomentDateModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatMenuModule,
    MatSortModule,
    MatButtonModule,
    MatToolbarModule,
    MatStepperModule,
    MatDatepickerModule,
    MatSidenavModule,
    MatListModule,
    MatTooltipModule,
    MatSlideToggleModule,
    MatExpansionModule,
    ReactiveFormsModule,
    CdkAccordionModule,
    MatBadgeModule,
    MatProgressBarModule,
    MatRadioModule,
    DragDropModule,
    MatChipsModule,
    MatSidenavModule,
    MatIconModule,
    
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModuleModule { }
