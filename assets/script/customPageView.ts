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
    @property({ type: ScrollView })
    scrollView: ScrollView | null = null;

    // @property({type:Node})
    // rowParent: Node = null;

    @property({ type: Prefab })
    rowPrefab: Prefab = null;

    protected onLoad(): void {
        for (let i = 0; i < 50; i++) {
            const row = instantiate(this.rowPrefab);
            row.getChildByName("nameAndScore").getChildByName("nameLabel").getComponent(Label).string =
                "Name: Karan Kalra";
            row.getChildByName("nameAndScore").getChildByName("scoreLabel").getComponent(Label).string =
                `Score: ` + randomRangeInt(0, 1000).toString();
            row.getChildByName("Rank").getChildByName("rankLabel").getComponent(Label).string =
                "Rank: " + (i + 1).toString();

            console.log(i, row);
            this.scrollView.content.addChild(row);
        }
    }

    start() {}

    update(deltaTime: number) {}
}
