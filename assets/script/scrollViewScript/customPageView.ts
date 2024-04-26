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
import { secondCustomPageView } from "./secondCustomPageView";
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

    protected onLoad(): void {
        this.generateData();
    }
    start() {
        this.scrollView.node.on(
            ScrollView.EventType.SCROLL_TO_BOTTOM,

            function () {
                this.consoleFunction();
            },
            // this.getComponent(secondCustomPageView)
            this.node.getChildByName("Button").getComponent(secondCustomPageView)
        );
    }

    onClick() {
        if (this.generate) {
            this.generate = false;
            this.generateData();
        } else {
            console.log("please reach the end of the scroll");
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

    // start() {
    //     this.scrollView.node.on(
    //         "scroll-to-bottom",
    //         // secondCustomPageView.bind(this.generateData()),
    //         () => {
    //             this.generateData();
    //         },
    //         // () => {
    //         //     new secondCustomPageView().generateData;
    //         // },
    //         // this

    //         new secondCustomPageView()
    //     );
    // }

    // start() {
    //     const second = new secondCustomPageView();

    //     this.scrollView.node.on(
    //         ScrollView.EventType.SCROLL_TO_BOTTOM,

    //         function () {
    //             // this.consoleFunction();
    //             this.node.getComponent(secondCustomPageView).consoleFunction();
    //         },

    //         second
    //     );
    // }

    // scrollEvent() {
    //     const obj = new secondCustomPageView();
    //     obj.generateData(this.generate, this.rowPrefab, this.scrollView);
    // }
    // }

    // protected start(): void {
    //     this.scrollView.node.on(
    //         ScrollView.EventType.SCROLL_TO_BOTTOM,
    //         () => {
    //             const second = new secondCustomPageView();
    //             second.generateData();
    //         },
    //         secondCustomPageView
    //     );
    // }

    update(deltaTime: number) {}
}
