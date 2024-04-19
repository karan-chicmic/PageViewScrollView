import {
    _decorator,
    Component,
    instantiate,
    Label,
    Node,
    Prefab,
    randomRangeInt,
    ScrollView,
    UITransform,
    Vec3,
} from "cc";
import { getCardComponent } from "./getCardComponent";
const { ccclass, property } = _decorator;

@ccclass("customPageView")
export class customPageView extends Component {
    dataArray = [
        ["karan ", 1000, 1, 5],
        ["prabh", 950, 2, 5],
        ["harjot", 900, 3, 5],
        ["anmol", 870, 4, 4],
        ["santa", 840, 5, 4],
        ["rishi", 800, 6, 4],
        ["harjit", 760, 7, 4],
        ["navjot", 749, 8, 4],
        ["deepak", 730, 9, 3],
        ["rupinder", 729, 10, 3],
        ["navneet", 720, 11, 3],
        ["jashan", 689, 12, 2],
        ["harsh", 500, 13, 2],
        ["saniya", 480, 14, 2],
        ["carry", 400, 15, 2],
    ];
    @property({ type: ScrollView })
    scrollView: ScrollView | null = null;

    @property({ type: Prefab })
    rowPrefab: Prefab = null;

    @property({ type: Prefab })
    starPrefab: Prefab = null;

    generate = true;

    protected onLoad(): void {
        this.generateData(this.generate);
    }

    onClick() {
        this.generate = true;
        this.generateData(this.generate);
    }
    generateData(generate: boolean) {
        generate = false;
        for (let i = 0; i < 15; i++) {
            const row = instantiate(this.rowPrefab);
            row.getComponent(getCardComponent).generateData(
                this.dataArray[i][0].toString(),
                this.dataArray[i][1].toString()
            );

            console.log(i, row);
            this.scrollView.content.addChild(row);
        }
    }

    start() {}

    update(deltaTime: number) {}
}
