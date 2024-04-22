// import { _decorator, Component, ScrollView, Prefab, Vec3 } from "cc";
// const { ccclass, property } = _decorator;

// @ccclass("abc")
// export class abc extends Component {
//     start() {}

//     update(deltaTime: number) {}

//     @property(ScrollView) scrollView: ScrollView | null = null;
//     @property(Prefab) itemPrefab: Prefab | null = null;
//     initialItemCount = 15;
//     additionalItemCount = 15;

//     private loadedItems: number = 0;
//     private totalItems: number = 0;

//     onLoad() {
//         if (!this.scrollView || !this.itemPrefab) {
//             console.error("Missing required properties: scrollView or itemPrefab");
//             return;
//         }

//         this.totalItems = this.initialItemCount;
//         this.loadedItems = this.initialItemCount;

//         for (let i = 0; i < this.initialItemCount; i++) {
//             this.addItem();
//         }

//         this.scrollView.node.on("scrolling", this.onScroll, this);
//     }

//     private addItem(): void {
//         const newItem = instantiate(this.itemPrefab);
//         this.scrollView.content.addChild(newItem);

//         // Set item position (adjust based on your item layout)
//         newItem.setPosition(new Vec3(newItem.width / 2, this.loadedItems * newItem.height, 0));

//         this.loadedItems++;
//         this.updateContentSize();
//     }

//     private onScroll(scrollView: ScrollView): void {
//         const isNearBottom = scrollView.getScrollPercentVertical() >= 0.9;
//         if (isNearBottom && this.loadedItems < this.totalItems) {
//             for (let i = 0; i < this.additionalItemCount && this.loadedItems < this.totalItems; i++) {
//                 this.addItem();
//             }
//         }
//     }

//     private updateContentSize(): void {
//         const contentHeight = this.loadedItems * (this.scrollView.content.children[0] as Node).height;
//         this.scrollView.content.setContentSize(new Vec3(this.scrollView.node.width, contentHeight, 0));
//     }
// }
