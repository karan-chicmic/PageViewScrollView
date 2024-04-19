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
const { ccclass, property } = _decorator;

@ccclass("customPageView")
export class customPageView extends Component {
    dataArray = [
        ["karan ", 1000, 1],
        ["prabh", 950, 2],
        ["harjot", 900, 3],
        ["anmol", 870, 4],
        ["santa", 840, 5],
        ["rishi", 800, 6],
        ["harjit", 760, 7],
        ["navjot", 749, 8],
        ["deepak", 730, 9],
        ["rupinder", 729, 10],
        ["navneet", 720, 11],
        ["jashan", 689, 12],
        ["harsh", 500, 13],
        ["saniya", 480, 14],
        ["carry", 400, 15],
    ];
    @property({ type: ScrollView })
    scrollView: ScrollView | null = null;

    // @property({type:Node})
    // rowParent: Node = null;

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
            row.getChildByName("nameAndScore").getChildByName("nameLabel").getComponent(Label).string =
                "Name: " + this.dataArray[i][0].toString();
            row.getChildByName("nameAndScore").getChildByName("scoreLabel").getComponent(Label).string =
                "Score: " + this.dataArray[i][1].toString();
            row.getChildByName("Rank").getChildByName("rankLabel").getComponent(Label).string =
                "Rank: " + this.dataArray[i][2].toString();

            console.log(i, row);
            this.scrollView.content.addChild(row);
        }
    }

    start() {}

    update(deltaTime: number) {}
}
