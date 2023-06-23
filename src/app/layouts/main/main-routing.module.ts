import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { AboutComponent } from 'src/app/modules/about/about.component';
import { MapComponent } from 'src/app/modules/map/map.component';
import { EconductivityComponent } from 'src/app/modules/econductivity/econductivity.component';
import { PhComponent } from 'src/app/modules/ph/ph.component';
import { TupidityComponent } from 'src/app/modules/tupidity/tupidity.component';
import { TotalAlkalinityComponent } from 'src/app/modules/total-alkalinity/total-alkalinity.component';
import { TotalHardnessComponent } from 'src/app/modules/total-hardness/total-hardness.component';
import { NitritesComponent } from 'src/app/modules/nitrites/nitrites.component';
import { SulphatesComponent } from 'src/app/modules/sulphates/sulphates.component';
import { AmmoniumComponent } from 'src/app/modules/ammonium/ammonium.component';
import { ChlorideComponent } from 'src/app/modules/chloride/chloride.component';
import { PhosphatesComponent } from 'src/app/modules/phosphates/phosphates.component';
import { NitratesComponent } from 'src/app/modules/nitrates/nitrates.component';
import { SodiumComponent } from 'src/app/modules/sodium/sodium.component';
import { PotassiumComponent } from 'src/app/modules/potassium/potassium.component';
import { IronComponent } from 'src/app/modules/iron/iron.component';
import { FreeChlorideComponent } from 'src/app/modules/free-chloride/free-chloride.component';
import { TotaldissolvedsolidsComponent } from 'src/app/modules/totaldissolvedsolids/totaldissolvedsolids.component';
import { BicarbonatesComponent } from 'src/app/modules/bicarbonates/bicarbonates.component';
import { MagnesiumHardnessComponent } from 'src/app/modules/magnesium-hardness/magnesium-hardness.component';
import { TotalChlorineComponent } from 'src/app/modules/total-chlorine/total-chlorine.component';
import { DissolvedOxygenComponent } from 'src/app/modules/dissolved-oxygen/dissolved-oxygen.component';
import { CalciumComponent } from 'src/app/modules/calcium/calcium.component';
import { MagnesiumComponent } from 'src/app/modules/magnesium/magnesium.component';
import { SilicaComponent } from 'src/app/modules/silica/silica.component';
import { MercuryComponent } from 'src/app/modules/mercury/mercury.component';
import { LeadComponent } from 'src/app/modules/lead/lead.component';
import { ManganeseComponent } from 'src/app/modules/manganese/manganese.component';
import { TotalIronComponent } from 'src/app/modules/total-iron/total-iron.component';
import { ColorComponent } from 'src/app/modules/color/color.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'map-distributions',
        component: MapComponent
      },
      {
        path: 'conductivity',
        component: EconductivityComponent
      },
      {
        path: 'ph',
        component: PhComponent
      },
      {
        path: 'tupidity',
        component: TupidityComponent
      },
      {
        path: 'total-alkalinity',
        component: TotalAlkalinityComponent
      },
      {
        path: 'total-hardness',
        component: TotalHardnessComponent
      },
      {
        path: 'nitrites',
        component: NitritesComponent
      },
      {
        path: 'sulphates',
        component: SulphatesComponent
      },
      {
        path: 'ammonium',
        component: AmmoniumComponent
      },
      {
        path: 'chloride',
        component: ChlorideComponent
      },
      {
        path: 'phosphates',
        component: PhosphatesComponent
      },
      {
        path: 'nitrates',
        component: NitratesComponent
      },
      {
        path: 'sodium',
        component: SodiumComponent
      },
      {
        path: 'potassium',
        component: PotassiumComponent
      },
      {
        path: 'iron',
        component: IronComponent
      },
      {
        path: 'free-chloride',
        component: FreeChlorideComponent
      },
      {
        path: 'color',
        component: ColorComponent
      },
      {
        path: 'dissolved-solids',
        component: TotaldissolvedsolidsComponent
      },
      {
        path: 'bicarbonates',
        component: BicarbonatesComponent
      },
      {
        path: 'magnesium-hardness',
        component: MagnesiumHardnessComponent
      },
      {
        path: 'total-chlorine',
        component: TotalChlorineComponent
      },
      {
        path: 'dissolved-oxygen',
        component: DissolvedOxygenComponent
      },
      {
        path: 'calcium',
        component: CalciumComponent
      },
      {
        path: 'magnesium',
        component: MagnesiumComponent
      },
      {
        path: 'silica',
        component: SilicaComponent
      },
      {
        path: 'mercury',
        component: MercuryComponent
      },
      {
        path: 'lead',
        component: LeadComponent
      },
      {
        path: 'manganese',
        component: ManganeseComponent
      },
      {
        path: 'total-iron',
        component: TotalIronComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
