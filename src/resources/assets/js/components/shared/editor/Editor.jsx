import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactQuill, {Quill, Toolbar} from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ImageBlot from './blots/ImageBlot';
import DividerBlot from "./blots/DividerBlot";
import VideoBlot from "./blots/VideoBlot";
import TweetBlot from "./blots/TweetBlot";
import ImageBlotUI from "./blots-ui/ImageBlotUI";

/* Register blots*/
Quill.register(DividerBlot);
Quill.register(VideoBlot);
Quill.register(TweetBlot);
Quill.register(ImageBlot);

//Define our toolbar
const CustomToolbar = () => (
    <div id="toolbar">
        <span className="ql-formats">
            <HeaderOne/>
            <HeaderTwo/>
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
);
const Size = () => (
    <select className="ql-size" defaultValue={""} onChange={e => e.persist()}>
        <option value="small"></option>
        <option defaultValue></option>
    </select>
);
const HeaderOne = () => (<button className="ql-header" value="1"></button>);
const HeaderTwo = () => (<button className="ql-header" value="2"></button>);
const Bold = () => (<button className="ql-bold"></button>);
const Italic = () => (<button className="ql-italic"></button>);
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
        this.state = {
            imageSelectionOpen: false,
        };
        this.editorRef = React.createRef();
        this.onChange = this.onChange.bind(this);
        this.modules = {
            toolbar: {
                container: "#toolbar",
                handlers: {
                    "divider": this.divider,
                    /*  "twitterEmbed": this.twitterEmbed,
                      "videoEmbed": this.videoEmbed,
                      "imageEmbed": this.imageEmbed*/
                    imageEmbed: () => {
                        console.log('clicked');
                        console.log(this.editorRef);
                        this.setState({imageSelectionOpen: true});
                    }
                }
            }
        };
        this.formats = [];

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
                    ref={(el) => { this.editorRef = el; }}
                />
                <ImageBlotUI open={this.state.imageSelectionOpen} onClose={(imageProps) => this.closeImageEmbed(imageProps)} addImage={(details) => this.addImage(details)}/>
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

    imageEmbed() {
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

    addImage(details) {
        this.setState({
            imageSelectionOpen: false,
        });
        console.log(this.editorRef);
        const editor = this.editorRef.getEditor();
        const selection = editor.getSelection();
        console.log(selection);
        let index = 0;
        if (selection !== null) index = selection.index;
        editor.insertEmbed(index, "image", {
            alt: "Image",
            url: details.url,
            width: details.width,
            height: details.height
        });
        editor.setSelection(index + 1, Quill.sources.SILENT);
    }

    closeImageEmbed(imageProps) {
        this.setState({
            imageSelectionOpen: false,
        });
    }

}

Editor.propTypes = {
    text: PropTypes.string,
    className: PropTypes.string,
    onChange: PropTypes.func.isRequired

};
Editor.defaultProps = {
    text: '',
    className: ''
};