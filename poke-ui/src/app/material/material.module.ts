import { NgModule } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button"
import { MatIconModule } from "@angular/material/icon"



const MaterialComponents = [
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
]

@NgModule({
    imports:[MaterialComponents],
    exports:[MaterialComponents]
})

export class MaterialModule {};