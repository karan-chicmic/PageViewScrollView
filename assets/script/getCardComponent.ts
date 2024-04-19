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

    @property({ type: Sprite })
    imageSprite: Sprite = null;

    @property({ type: Label })
    namelabel: Label = null;

    @property({ type: Label })
    score: Label = null;

    @property({ type: Prefab })
    starPrefab: Prefab;
    start() {}

    update(deltaTime: number) {}

    generateData(name: string, score: string) {
        const mask = this.imageSprite.getComponent(Mask);
        mask.type = Mask.Type.SPRITE_STENCIL;
        const sprite = mask.getComponent(Sprite);
        sprite.spriteFrame = this.personArray[randomRangeInt(0, this.personArray.length)];
        mask.alphaThreshold = 0.1;
    }

    generateStars(stars: number) {
        for (let i = 0; i < stars; i++) {
            const star = instantiate(this.starPrefab);
            this.node.getChildByName("star").addChild(star);
        }
    }
}
