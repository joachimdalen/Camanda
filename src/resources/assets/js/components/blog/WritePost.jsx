import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import MetaSection from "./write-post-section/MetaSection";
import ImagesSection from "./write-post-section/ImagesSection";

export default class WritePost extends Component {
    constructor() {
        super();
        this.state = {
            section: 0
        };
        this.setSection = this.setSection.bind(this);
        this.getSection = this.getSection.bind(this);
        this.isActive = this.isActive.bind(this);
    }

    isActive(selected) {
        return this.state.section === selected;
    }

    setSection(active) {
        this.setState({
            section: active
        });
    }

    getSection() {
        let section = null;
        switch (this.state.section) {
            case 0:
                section = (<MetaSection/>);
                break;
            case  2:
                section = (<ImagesSection/>);
                break;
        }
        return section;
    }

    componentWillReceiveProps(nextProps) {

    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 col-md-9 col-lg-10 mb-4">
                        {this.getSection()}
                    </div>
                    <div className="col-sm-12 col-md-3 col-lg-2 order-lg-2 order-lg-0 mb-4">
                        <div className="list-group list-group-transparent mb-0">
                            <a href="#"
                               className={`list-group-item list-group-item-action ${this.isActive(0) ? 'active' : ''}`}
                               onClick={() => this.setSection(0)}>
                                <span className="icon mr-3"><i className="fe fe-flag"></i></span>Meta & Content
                            </a>
                            <a href="#"
                               className={`list-group-item list-group-item-action ${this.isActive(1) ? 'active' : ''}`}
                               onClick={() => this.setSection(1)}>
                                <span className="icon mr-3"><i className="fe fe-layout"></i></span> Layout
                            </a>
                            <a href="#"
                               className={`list-group-item list-group-item-action ${this.isActive(2) ? 'active' : ''}`}
                               onClick={() => this.setSection(2)}>
                                <span className="icon mr-3"><i className="fe fe-image"></i></span>Images
                            </a>
                            <a href="#"
                               className={`list-group-item list-group-item-action ${this.isActive(3) ? 'active' : ''}`}
                               onClick={() => this.setSection(3)}>
                                <span className="icon mr-3"><i className="fe fe-file"></i></span>Attachments
                            </a>
                            <a href="#"
                               className={`list-group-item list-group-item-action ${this.isActive(4) ? 'active' : ''}`}
                               onClick={() => this.setSection(4)}>
                                <span className="icon mr-3"><i className="fe fe-git-branch"></i></span> Git Repositories
                            </a>
                            <a href="#"
                               className={`list-group-item list-group-item-action ${this.isActive(5) ? 'active' : ''}`}
                               onClick={() => this.setSection(5)}>
                                <span className="icon mr-3"><i className="fe fe-feather"></i></span> References
                            </a>
                        </div>
                        <div className="d-none d-lg-block mt-6">
                            <a href="https://github.com/tabler/tabler/edit/dev/src/_docs/cards.md"
                               className="text-muted">Edit this
                                page</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
WritePost.propTypes = {
    name: PropTypes.string
};
WritePost.defaultProps = {
    name: 'Stranger'
};
if (document.getElementById('write-post')) {
    ReactDOM.render(<WritePost/>, document.getElementById('write-post'));
}