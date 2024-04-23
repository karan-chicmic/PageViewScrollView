import { _decorator, Component, Node, Prefab, randomRangeInt, Sprite, SpriteFrame } from "cc";
const { ccclass, property } = _decorator;

@ccclass("generateRandomImage")
export class generateRandomImage extends Component {
    @property({ type: [SpriteFrame] })
    image: [SpriteFrame] | [] = [];

    start() {}

    update(deltaTime: number) {}

    generateImage() {
        console.log("generate node", this.node);
        this.node.getComponent(Sprite).spriteFrame = this.image[randomRangeInt(0, this.image.length)];
    }
}
