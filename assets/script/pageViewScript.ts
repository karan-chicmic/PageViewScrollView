import { _decorator, Component, instantiate, Label, Node, PageView, Prefab, UITransform } from "cc";
const { ccclass, property } = _decorator;

@ccclass("pageViewScript")
export class pageViewScript extends Component {
    // @property({ type: Node })
    // page1: Node = null;
    // @property({ type: Node })
    // page: Node = null;
    // @property({ type: Node })
    // page3: Node = null;

    @property({ type: PageView })
    pageView: PageView = null;

    @property({ type: Prefab })
    page1Prefab: Prefab;

    start() {
        for (let i = 1; i <= 60; i++) {
            const row = instantiate(this.page1Prefab);

            row.getComponent(Label).string = i.toString() + "                   ";
            row.getComponent(UITransform).height = 600;
            this.pageView.addPage(row);
            // this.pageView.content.addChild(row);

            this.pageView.node.on("page-turning", () => console.log("page turned"), this);
            // this.pageView.setCurrentPageIndex(i - 1);

            // this.node.addChild(row);
        }
    }

    update(deltaTime: number) {}
}
