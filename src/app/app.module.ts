import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarComponent } from './bar/bar.component';
import { PieComponent } from './pie/pie.component';
import { ScatterComponent } from './scatter/scatter.component';
import { Bar2Component } from './bar2/bar2.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainModule } from './layouts/main/main.module';
import { SharedModule } from './shared/shared.module';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { MapComponent } from './modules/map/map.component';
import { DataService } from './shared/services/data.service';
import { MarkerService } from './shared/services/marker/marker.service';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { EconductivityComponent } from './modules/econductivity/econductivity.component';
import { PhComponent } from './modules/ph/ph.component';
import { TupidityComponent } from './modules/tupidity/tupidity.component';
import { TotalAlkalinityComponent } from './modules/total-alkalinity/total-alkalinity.component';
import { PhMapComponent } from './modules/ph/ph-map/ph-map.component';
import { TotalHardnessComponent } from './modules/total-hardness/total-hardness.component';
import { NitritesComponent } from './modules/nitrites/nitrites.component';
import { SulphatesComponent } from './modules/sulphates/sulphates.component';
import { AmmoniumComponent } from './modules/ammonium/ammonium.component';
import { ChlorideComponent } from './modules/chloride/chloride.component';
import { PhosphatesComponent } from './modules/phosphates/phosphates.component';
import { NitratesComponent } from './modules/nitrates/nitrates.component';
import { SodiumComponent } from './modules/sodium/sodium.component';
import { PotassiumComponent } from './modules/potassium/potassium.component';
import { IronComponent } from './modules/iron/iron.component';
import { FreeChlorideComponent } from './modules/free-chloride/free-chloride.component';
import { ColorComponent } from './modules/color/color.component';
import { TotaldissolvedsolidsComponent } from './modules/totaldissolvedsolids/totaldissolvedsolids.component';
import { BicarbonatesComponent } from './modules/bicarbonates/bicarbonates.component';
import { MagnesiumHardnessComponent } from './modules/magnesium-hardness/magnesium-hardness.component';
import { TotalChlorineComponent } from './modules/total-chlorine/total-chlorine.component';
import { DissolvedOxygenComponent } from './modules/dissolved-oxygen/dissolved-oxygen.component';
import { CalciumComponent } from './modules/calcium/calcium.component';
import { MagnesiumComponent } from './modules/magnesium/magnesium.component';
import { SilicaComponent } from './modules/silica/silica.component';
import { MercuryComponent } from './modules/mercury/mercury.component';
import { LeadComponent } from './modules/lead/lead.component';
import { ManganeseComponent } from './modules/manganese/manganese.component';
import { TotalIronComponent } from './modules/total-iron/total-iron.component';

@NgModule({
  declarations: [
    AppComponent,
    BarComponent,
    PieComponent,
    ScatterComponent,
    Bar2Component,
    MapComponent,
    EconductivityComponent,
    PhComponent,
    TupidityComponent,
    TotalAlkalinityComponent,
    PhMapComponent,
    TotalHardnessComponent,
    NitritesComponent,
    SulphatesComponent,
    AmmoniumComponent,
    ChlorideComponent,
    PhosphatesComponent,
    NitratesComponent,
    SodiumComponent,
    PotassiumComponent,
    IronComponent,
    FreeChlorideComponent,
    ColorComponent,
    TotaldissolvedsolidsComponent,
    BicarbonatesComponent,
    MagnesiumHardnessComponent,
    TotalChlorineComponent,
    DissolvedOxygenComponent,
    CalciumComponent,
    MagnesiumComponent,
    SilicaComponent,
    MercuryComponent,
    LeadComponent,
    ManganeseComponent,
    TotalIronComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MainModule,
    SharedModule,
    LeafletModule,
  ],
  providers: [DataService, MarkerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
