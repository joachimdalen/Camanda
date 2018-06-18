import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactQuill, {Quill} from 'react-quill';
import 'react-quill/dist/quill.snow.css';

let Inline = Quill.import("blots/inline");
let Block = Quill.import("blots/block");
let BlockEmbed = Quill.import("blots/block/embed");
const Parchment = Quill.import('parchment');

/* Create and register blots*/
class DividerBlot extends BlockEmbed {
}

DividerBlot.blotName = "divider";
DividerBlot.tagName = "hr";
Quill.register(DividerBlot);

class VideoBlot extends BlockEmbed {
    static create(url) {
        let node = super.create();
        node.setAttribute("src", url);
        node.setAttribute("frameborder", "0");
        node.setAttribute("allowfullscreen", true);
        return node;
    }

    static formats(node) {
        let format = {};
        if (node.hasAttribute("height")) {
            format.height = node.getAttribute("height");
        }
        if (node.hasAttribute("width")) {
            format.width = node.getAttribute("width");
        }
        return format;
    }

    static value(node) {
        return node.getAttribute("src");
    }

    format(name, value) {
        if (name === "height" || name === "width") {
            if (value) {
                this.domNode.setAttribute(name, value);
            } else {
                this.domNode.removeAttribute(name, value);
            }
        } else {
            super.format(name, value);
        }
    }
}

VideoBlot.blotName = "video";
VideoBlot.tagName = "iframe";
Quill.register(VideoBlot);

class TweetBlot extends BlockEmbed {
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
Quill.register(TweetBlot);

class ImageBlot extends BlockEmbed {
    static create(value) {
        let node = super.create();
        node.setAttribute("alt", value.alt);
        node.setAttribute("src", value.url);
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
Quill.register(ImageBlot);

//Define our toolbar
const CustomToolbar = () => (
        <div id="toolbar">
        <span className="ql-formats">
            <Header/>
            <Size/>
            <Bold/>
            <Italic/>
            <Color/>
            <Underline/>
            <Alignment/>
        </span>
            <span className="ql-formats">
                <OrderedList/>
                <BulletList/>
                <Indent/>
                <Outdent/>
            </span>
            <span className="ql-formats">
                <TweetEmbed/>
                <VideoEmbed/>
                <ImageEmbed/>
            </span>
            <span className="ql-formats">
                <Divider/>
                <Code/>
            </span>
        </div>
    )
;
const Header = () => (
    <select className="ql-header" defaultValue={""} onChange={e => e.persist()}>
        <option value="1"></option>
        <option value="2"></option>
        <option defaultValue></option>
    </select>
);
const Size = () => (
    <select className="ql-size" defaultValue={""} onChange={e => e.persist()}>
        <option value="small"></option>
        <option defaultValue></option>
        <option value="large"></option>
        <option value="huge"></option>
    </select>
);
const Bold = () => (
    <button className="ql-bold"></button>
);
const Italic = () => (
    <button className="ql-italic"></button>
);
const Color = () => (<select className="ql-color"></select>);
const Underline = () => (<button className="ql-underline"></button>);
const TweetEmbed = () => (<button className="ql-twitterEmbed"><span className="fe fe-twitter"/></button>);
const VideoEmbed = () => (<button className="ql-videoEmbed"><span className="fe fe-video"/></button>);
const ImageEmbed = () => (<button className="ql-imageEmbed"><span className="fe fe-image"/></button>);
const OrderedList = () => (<button className="ql-list" value="ordered"></button>);
const BulletList = () => (<button className="ql-list" value="bullet"></button>);
const Indent = () => (<button className="ql-indent" value="+1"></button>);
const Outdent = () => (<button className="ql-indent" value="-1"></button>);
const Alignment = () => (<select className="ql-align"></select>);
const Divider = () => (<button className="ql-divider"><i className="fe fe-more-horizontal"></i></button>);
const Code = () => (<button className="ql-code"></button>);
export default class Editor extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.onChange = this.onChange.bind(this);
        this.modules = {
            toolbar: {
                container: "#toolbar",
                handlers: {
                    "twitterEmbed": this.twitterEmbed,
                    "divider": this.divider,
                    "videoEmbed": this.videoEmbed,
                    "imageEmbed": this.imageEmbed
                }
            }
        };
        this.formats = [];
        /* this.quill.addEventListener('click', (ev) => {
             let embed = Parchment.find(ev.target);

             if (embed instanceof TweetBlot) {
                 this.quill.setSelection(embed.offset(this.quill.scroll), 1, 'user');
             }
         });*/
    }

    onChange(value) {
        this.props.onChange(value);
    }

    render() {
        return (
            <div className="text-editor">
                <CustomToolbar/>
                <ReactQuill
                    value={this.props.text}
                    onChange={this.onChange}
                    placeholder={this.props.placeholder}
                    modules={this.modules}
                    className={this.props.className}
                />
            </div>
        );
    }


    //Define our handlers
    divider() {
        let range = this.quill.getSelection(true);
        this.quill.insertEmbed(range.index, "divider", true, Quill.sources.USER);
        this.quill.setSelection(range.index + 1, Quill.sources.SILENT);
    }

    videoEmbed() {
        let range = this.quill.getSelection(true);
        let url = "https://www.youtube.com/embed/QHH3iSeDBLo?showinfo=0";
        this.quill.insertEmbed(range.index, "video", url, Quill.sources.USER);
        this.quill.formatText(range.index + 1, 1, {height: "170", width: "400"});
        this.quill.setSelection(range.index + 1, Quill.sources.SILENT);
    }

    twitterEmbed() {
        let range = this.quill.getSelection(true);
        let id = "464454167226904576";
        this.quill.insertEmbed(range.index, "tweet", id, Quill.sources.USER);
        this.quill.setSelection(range.index + 1, Quill.sources.SILENT);
    }
    imageEmbed(){
        let range = this.quill.getSelection(true);
        this.quill.insertEmbed(
            range.index,
            "image",
            {
                alt: "Quill Cloud",
                url: "https://static-cdn.jtvnw.net/jtv_user_pictures/brahemic-profile_image-8bb8af35b7da3313-70x70.jpeg"
            },
            Quill.sources.USER
        );
        this.quill.setSelection(range.index + 1, Quill.sources.SILENT);
    }

}

/*Editor.formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'color',
];*/
Editor.propTypes = {
    text: PropTypes.string,
    className: PropTypes.string,
    onChange: PropTypes.func.isRequired

};
Editor.defaultProps = {
    text: '',
    className: ''
};