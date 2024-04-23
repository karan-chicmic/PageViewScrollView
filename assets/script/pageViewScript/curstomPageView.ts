import { _decorator, Component, instantiate, Label, Node, PageView, Prefab, UITransform, Widget } from "cc";
const { ccclass, property } = _decorator;

@ccclass("curstomPageView")
export class curstomPageView extends Component {
    // @property({ type: Node })
    // page1: Node = null;
    // @property({ type: Node })
    // page2: Node = null;
    // @property({ type: Node })
    // page3: Node = null;
    // @property({ type: Node })
    // page4: Node = null;
    // @property({ type: Node })
    // page5: Node = null;

    @property({ type: [Node] })
    pageArray: [Node] | [] = [];

    @property({ type: PageView })
    pageView: PageView = null;

    @property({ type: Prefab })
    page1Prefab: Prefab = null;
    start() {
        for (let k = 0; k < this.pageArray.length; k++) {
            const row = this.pageArray[k];
            for (let j = 0; j < 15; j++) {
                const labelInstance = instantiate(this.page1Prefab);
                labelInstance.getComponent(Label).string = (k + 1).toString();
                row.addChild(labelInstance);
            }
            this.pageView.node.on("page-turning", () => this.pageTurnCallback(k), this);
        }
    }
    pageTurnCallback(currPageIndex) {
        this.pageView.scrollToPage(currPageIndex + 1);
    }
    update(deltaTime: number) {}
}
