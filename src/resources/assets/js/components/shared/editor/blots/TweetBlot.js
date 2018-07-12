import {Quill} from "react-quill";
let BlockEmbed = Quill.import("blots/block/embed");

export default class TweetBlot extends BlockEmbed {
    static create(id) {
        let node = super.create();
        node.dataset.id = id;
        twttr.widgets.createTweet(id, node);
        return node;
    }

    static value(domNode) {
        return domNode.dataset.id;
    }
}
TweetBlot.blotName = "tweet";
TweetBlot.tagName = "div";
TweetBlot.className = "tweet";