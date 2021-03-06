import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {  SettingsService,
          SharedService,
          SidebarService,
          UsuarioService,
          SubirArchivoService,
          LoginGuardsGuard,
          AdminGuard,
          VerificaTokenGuard,
          HospitalService,
          MedicoService } from './service.index';

import { HttpClientModule } from '@angular/common/http';
import { ModalUploadService } from '../components/modal-upload/modal-upload.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    SettingsService,
    SharedService,
    SidebarService,
    UsuarioService,
    SubirArchivoService,
    LoginGuardsGuard,
    AdminGuard,
    VerificaTokenGuard,
    ModalUploadService,
    HospitalService,
    MedicoService
  ],
  declarations: []
})
export class ServiceModule { }
