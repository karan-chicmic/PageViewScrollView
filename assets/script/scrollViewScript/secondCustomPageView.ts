import { _decorator, Component, instantiate, Node, Prefab, ScrollView } from "cc";
import { getCardComponent } from "./getCardComponent";
const { ccclass, property } = _decorator;

@ccclass("secondCustomPageView")
export class secondCustomPageView extends Component {
    // @property({ type: Prefab })
    // rowPrefab: Prefab = null;
    // generate = true;
    // currSNo = 0;

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
    // @property({ type: ScrollView })
    // scrollView: ScrollView | null = null;

    start() {}

    update(deltaTime: number) {}
    // onClick() {
    //     if (this.generate) {
    //         this.generate = false;
    //         this.generateData();
    //     } else {
    //         console.log("please reach the end of the scroll");
    //     }
    // }

    generateData(generate, rowPrefab, scrollView) {
        generate = false;
        for (let i = 0; i < 10; i++) {
            // this.currSNo = this.currSNo + 1;
            const row = instantiate(rowPrefab);
            row.getComponent(getCardComponent).generateData(
                // this.currSNo.toString(),
                this.dataArray[i][0].toString(),
                this.dataArray[i][1].toString()
            );

            scrollView.content.addChild(row);
        }
    }

    consoleFunction() {
        console.log("second Console Function Called!!");
    }

    // generateRandomData(callback){
    // callback()

    // }
}
