import { _decorator, Component, EditBoxComponent, instantiate, Label, Node, PageView, Prefab } from "cc";
import { CreateCustomProfileContent } from "./CreateCustomProfileContent";
const { ccclass, property } = _decorator;

@ccclass("customProfile")
export class customProfile extends Component {
    profileArray = [
        ["Karan", 5],
        ["Prabh", 5],
        ["Harjot", 4],
        ["Hemant", 3],
        ["Santa", 2],
    ];

    @property({ type: Prefab })
    singleProfile: Prefab = null;

    @property({ type: PageView })
    pageView: PageView = null;

    @property({ type: EditBoxComponent })
    editBox: EditBoxComponent = null;

    @property({ type: Node })
    editBoxTextLabel: Node = null;

    start() {
        for (let i = 0; i < 5; i++) {
            const profile = instantiate(this.singleProfile);

            profile
                .getComponent(CreateCustomProfileContent)
                .setCustomContent(this.profileArray[i][0].toString(), this.profileArray[i][1].toString());
            this.pageView.addPage(profile);
            // this.pageView.content.addChild(profile);
        }
        // this.editBox.node.on(EditBoxComponent.EventType.EDITING_DID_BEGAN, () => console.log("edit began", this));
        // this.editBox.node.on(EditBoxComponent.EventType.TEXT_CHANGED, () => console.log("text changed"), this);
        this.editBox.node.on(
            EditBoxComponent.EventType.EDITING_DID_ENDED,
            () => {
                const num = Number(this.editBoxTextLabel.getComponent(Label).string);

                if (num > 4) {
                    console.error("Enter between range 0 to 4");
                } else this.pageView.scrollToPage(num);

                if (num == this.pageView.getCurrentPageIndex()) {
                    console.log(`you are already on the page index ${num}`);
                }
            },
            this
        );
    }

    update(deltaTime: number) {}
}
