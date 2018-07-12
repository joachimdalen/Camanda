import {Quill} from "react-quill";
let BlockEmbed = Quill.import("blots/block/embed");
export default class DividerBlot extends BlockEmbed {
}

DividerBlot.blotName = "divider";
DividerBlot.tagName = "hr";