// import { Component, instantiate } from "cc";

// import { ccclass, property, Node, Mask, Graphics, Sprite } from "cc";

// @ccclass("xyz")
// export class xyz extends Component {
//     @property(Node)
//     prefab: Node = null;

//     update(deltaTime: number) {}

//     start() {
//         const instance = instantiate(this.prefab);
//         this.node.addChild(instance);

//         const mask = instance.getComponent(Mask);
//         if (mask) {
//             mask.type = Mask.Type.SPRITE_STENCIL;

//             const maskSprite = instance.getComponentInChildren(Sprite);
//             if (maskSprite) {
//                 maskSprite.spriteFrame = this.getCircleTexture();
//             } else {
//                 const graphics = instance.getComponent(Graphics);
//                 if (graphics) {
//                     graphics.clear();
//                     graphics.circle(cc.v2(0, 0), instance.width / 2);
//                     graphics.fill();
//                 }
//             }
//         }
//     }

//     getCircleTexture() {

//         return texture;
//     }

//     // get end of scroll
//     const scrollView = this.scrollView.getComponent(ScrollViewComponent);
//         const scrollOffset = scrollView.getScrollOffset();
//         const maxScrollOffset = scrollView.getMaxScrollOffset();
//         if (scrollOffset.y >= maxScrollOffset.y) {
//             console.log("Reached the end of the scroll view");

//         }
// }
