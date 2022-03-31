import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {effects, reducers} from "./store";
import {UserResolver} from "@src/app/pages/profile/resolvers";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('profile', reducers),
    EffectsModule.forFeature(effects),
    ProfileRoutingModule
  ],
  providers: [UserResolver]
})
export class ProfileModule { }
