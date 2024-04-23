import { _decorator, Component, instantiate, Label, Node, PageView, Prefab, UITransform, Widget } from "cc";
const { ccclass, property } = _decorator;

@ccclass("curstomPageView")
export class curstomPageView extends Component {
    @property({ type: Prefab })
    page1Prefab: Prefab = null;

    @property({ type: PageView })
    pageView: PageView = null;
    start() {
        for (let i = 1; i <= 60; i++) {
            const row = instantiate(this.page1Prefab);

            row.getComponent(Label).string = i.toString();

            this.pageView.addPage(row);

            // this.pageView.content.addChild(row);

            this.pageView.node.on("page-turning", () => console.log("page turned"), this);
            // this.pageView.setCurrentPageIndex(i - 1);

            // this.node.addChild(row);
        }
    }

    update(deltaTime: number) {}
}
