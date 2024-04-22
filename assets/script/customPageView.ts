import {
    _decorator,
    Component,
    instantiate,
    Label,
    Node,
    Prefab,
    randomRangeInt,
    ScrollView,
    ScrollViewComponent,
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

    generate = true;

    currSNo = 0;

    protected onLoad(): void {}

    onClick() {
        if (this.generate) {
            this.generate = false;
            this.generateData();
        } else {
            console.log("please reach the end of the scroll");
        }
        if (this.scrollView.content.children.length > 30) {
            for (let i = 0; i < 10; i++) {
                this.scrollView.content.removeChild(this.scrollView.content.children[i]);
                // console.log(this.scrollView.content.children[i]);
            }
        }
    }

    generateData() {
        this.generate = false;
        for (let i = 0; i < 10; i++) {
            this.currSNo = this.currSNo + 1;
            const row = instantiate(this.rowPrefab);
            row.getComponent(getCardComponent).generateData(
                this.currSNo.toString(),
                this.dataArray[i][0].toString(),
                this.dataArray[i][1].toString()
            );

            this.scrollView.content.addChild(row);
        }
    }

    start() {
        this.generateData();
        this.scrollView.node.on(
            "scroll-to-bottom",
            () => {
                // console.log("end of the scroll");
                this.generate = true;
            },
            this
        );
    }

    update(deltaTime: number) {}
}
