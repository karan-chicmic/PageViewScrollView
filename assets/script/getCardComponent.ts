import {
    _decorator,
    Component,
    instantiate,
    Label,
    Node,
    Prefab,
    randomRange,
    randomRangeInt,
    Sprite,
    SpriteFrame,
} from "cc";
const { ccclass, property } = _decorator;

@ccclass("getCardComponent")
export class getCardComponent extends Component {
    @property({ type: [SpriteFrame] })
    personArray: [SpriteFrame] | [] = [];

    @property({ type: Prefab })
    starPrefab: Prefab;
    start() {}

    update(deltaTime: number) {}

    getImage() {
        this.node.getChildByName("dataNode").getChildByName("image").getComponent(Sprite).spriteFrame =
            this.personArray[randomRangeInt(0, this.personArray.length)];
    }

    getData(child: string, data: string) {
        this.node.getChildByName("dataNode").getChildByName(child).getComponent(Label).string = data;
    }

    generateStars(stars: number) {
        for (let i = 0; i < stars; i++) {
            const star = instantiate(this.starPrefab);
            this.node.getChildByName("star").addChild(star);
        }
    }
}
