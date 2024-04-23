import { _decorator, Component, Label, Node, randomRangeInt, Sprite, SpriteFrame } from "cc";
const { ccclass, property } = _decorator;

@ccclass("CreateCustomProfileContent")
export class CreateCustomProfileContent extends Component {
    @property({ type: [SpriteFrame] })
    profileArray: [SpriteFrame] | [] = [];

    @property({ type: [SpriteFrame] })
    starArray: [SpriteFrame] | [] = [];

    @property({ type: Sprite })
    profile: Sprite;
    @property({ type: Label })
    nameLabel: Sprite;
    @property({ type: Label })
    scoreLabel: Sprite;
    @property({ type: Sprite })
    star: Sprite;

    start() {}

    update(deltaTime: number) {}

    setCustomContent(name: string, score: string) {
        this.profile.getComponent(Sprite).spriteFrame = this.profileArray[randomRangeInt(0, this.profileArray.length)];
        this.nameLabel.getComponent(Label).string = name;
        this.scoreLabel.getComponent(Label).string = score;
        this.star.getComponent(Sprite).spriteFrame = this.starArray[randomRangeInt(0, this.starArray.length)];
    }
}
