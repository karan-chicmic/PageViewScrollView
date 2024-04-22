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

    @property({ type: [SpriteFrame] })
    starArray: [SpriteFrame] | [] = [];

    @property({ type: Node })
    imageSprite: Node = null;

    @property({ type: Label })
    namelabel: Label = null;

    @property({ type: Label })
    sNolabel: Label = null;

    @property({ type: Label })
    score: Label = null;
    @property({ type: Node })
    star: Node = null;

    currSNo = 0;

    // @property({ type: Prefab })
    // starPrefab: Prefab;
    start() {}

    update(deltaTime: number) {}

    generateData(sNo: string, name: string, score: string) {
        this.sNolabel.string = sNo;

        // this.imageSprite.getComponent(Sprite).spriteFrame =
        //     this.personArray[randomRangeInt(0, this.personArray.length)];

        this.imageSprite.getComponent(Sprite).spriteFrame =
            this.personArray[randomRangeInt(0, this.personArray.length)];
        console.log(this.imageSprite.getComponent(Sprite).spriteFrame);

        this.namelabel.string = name;
        this.score.string = score;
        this.star.getComponent(Sprite).spriteFrame = this.starArray[randomRangeInt(0, this.starArray.length)];
    }
}
