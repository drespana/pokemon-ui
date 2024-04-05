import { NgModule } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";

const MaterialComponents = [
    MatCardModule,
    MatToolbarModule,
]

@NgModule({
    imports:[MaterialComponents],
    exports:[MaterialComponents]
})

export class MaterialModel {};