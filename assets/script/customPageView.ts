import { _decorator, Component, instantiate, Label, Node, Prefab, ScrollView, UITransform, Vec3 } from "cc";
const { ccclass, property } = _decorator;

@ccclass("customPageView")
export class customPageView extends Component {
    @property({ type: ScrollView })
    scrollView: ScrollView | null = null;

    // @property({type:Node})
    // rowParent: Node = null;

    @property({ type: Prefab })
    rowPrefab: Prefab = null;

    protected onLoad(): void {
        this.scrollView.node.on("scroll-to-top", this.callback, this);
        for (let i = 0; i < 50; i++) {
            const row = instantiate(this.rowPrefab);
            this.scrollView.content.addChild(row);
            console.log(this.scrollView.content.position);
        }
    }

    callback(scrollView: ScrollView) {}
    start() {}

    update(deltaTime: number) {}
}
