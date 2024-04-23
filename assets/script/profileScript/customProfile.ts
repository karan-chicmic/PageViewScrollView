import { _decorator, Component, instantiate, Node, PageView, Prefab } from "cc";
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

    start() {
        for (let i = 0; i < 5; i++) {
            const profile = instantiate(this.singleProfile);
            console.log(profile);
            console.log("component", profile.getComponent(CreateCustomProfileContent) ? "null" : "karan");
            profile
                .getComponent(CreateCustomProfileContent)
                .setCustomContent(this.profileArray[i][0].toString(), this.profileArray[i][1].toString());
            this.pageView.addPage(profile);
            // this.pageView.content.addChild(profile);
        }
    }

    update(deltaTime: number) {}
}
