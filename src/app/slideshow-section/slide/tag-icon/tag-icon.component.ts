import { Component, Input } from '@angular/core';
import { ProjectTag } from '../../../projects/project.model';

@Component({
  selector: 'app-tag-icon',
  standalone: true,
  templateUrl: './tag-icon.component.html',
  styleUrl: './tag-icon.component.scss'
})

export class TagIconComponent {
    @Input() tag! : ProjectTag;

    public getTagCatagory(): string {
        switch (this.tag) {
            case ProjectTag.Unity:
            case ProjectTag.VPS:
            case ProjectTag.HLSL:
            case ProjectTag.ARVR:
                return "game-dev";
            case ProjectTag.FDM:
            case ProjectTag.Laser:
            case ProjectTag.Cricut:
            case ProjectTag.CAD:
            case ProjectTag.Fusion:
            case ProjectTag.Illustrator:
                return "maker-space";
            case ProjectTag.Docker:
                return "dev-ops";
            case ProjectTag.React:
            case ProjectTag.Angular:
            case ProjectTag.HTML:
            case ProjectTag.CSS:
            case ProjectTag.TS:
            case ProjectTag.JS:
                return "web";
            case ProjectTag.MySQL:
            case ProjectTag.SQL:
            case ProjectTag.Matlab:
            case ProjectTag.R:
            case ProjectTag.Halide:
                return "data";
            default:
                return "default";
        }
    }
}