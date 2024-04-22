import {
    _decorator,
    Component,
    instantiate,
    Label,
    Mask,
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

    @property({ type: Node })
    imageSprite: Node = null;

    @property({ type: Label })
    namelabel: Label = null;

    @property({ type: Label })
    sNolabel: Label = null;

    @property({ type: Label })
    score: Label = null;

    currSNo = 0;

    // @property({ type: Prefab })
    // starPrefab: Prefab;
    start() {}

    update(deltaTime: number) {}

    generateData(sNo: string, name: string, score: string) {
        this.sNolabel.string = sNo;

        this.imageSprite.getComponent(Sprite).spriteFrame =
            this.personArray[randomRangeInt(0, this.personArray.length)];
        this.namelabel.string = name;
        this.score.string = score;
        // console.log("sprite Frame", this.imageSprite.getComponent(Sprite).spriteFrame);
    }

    // generateStars(stars: number) {
    //     for (let i = 0; i < stars; i++) {
    //         const star = instantiate(this.starPrefab);
    //         this.node.getChildByName("star").addChild(star);
    //     }
    // }
}
