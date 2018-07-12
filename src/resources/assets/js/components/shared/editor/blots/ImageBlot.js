import {Quill} from "react-quill";
import Parchment from 'parchment';
let BlockEmbed = Quill.import("blots/block/embed");


export default class ImageBlot extends BlockEmbed {
    static create(value) {
        let Width = new Parchment.Attributor.Style('Width', 'width', {});
       Quill.register(Width, true);
        let node = super.create();
        node.setAttribute("alt", value.alt);
        node.setAttribute("src", value.url);
        console.log(value.width);
        Width.add(node, `${value.width}px`);
        console.log(node);
        return node;
    }

    static value(node) {
        return {
            alt: node.getAttribute("alt"),
            url: node.getAttribute("src")
        };
    }
}

ImageBlot.blotName = "image";
ImageBlot.tagName = "img";