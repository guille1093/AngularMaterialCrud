 import { NgModule } from '@angular/core';
 import { CommonModule } from '@angular/common';
 import {MatFormFieldModule} from "@angular/material/form-field";
 import {MatInputModule} from "@angular/material/input";
 import {MatButtonModule} from "@angular/material/button";
 import {ReactiveFormsModule} from "@angular/forms";
 import {MatSnackBarModule} from "@angular/material/snack-bar";
 import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
 import {MatIconModule} from "@angular/material/icon";
 import {MatCardModule} from "@angular/material/card";
 import {MatTableModule} from "@angular/material/table";
 import {MatToolbarModule} from "@angular/material/toolbar";

 @NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatToolbarModule
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatToolbarModule

  ]
})
export class SharedModule { }
