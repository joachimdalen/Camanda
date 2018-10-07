import React, {Component} from 'react';
import Card from "../../../shared/card/Card";
import CardHeader from "../../../shared/card/CardHeader";
import CardTitle from "../../../shared/card/CardTitle";
import CardBody from "../../../shared/card/CardBody";
import {fetchGeneral, saveSetting, setSetting} from '../../../../actions/settingActions';
import {connect} from "react-redux"

class GeneralSettings extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.load();
    }

    render() {
        const {set} = this.props;
        const {cache_settings, cache_blog_posts, slug_type, slug_size} = this.props.settings || '';
        return (
            <div className="row">
                <div className="col-12">
                    <Card>
                        <CardHeader>
                            <CardTitle title={"General"}/>
                        </CardHeader>
                        <CardBody>
                            <div className="row">
                                <div className="col-4">
                                    <div className="form-group">
                                        <div className="form-label">Caching</div>
                                        <div className="custom-switches-stacked">
                                            <label className="custom-switch">
                                                <input type="checkbox" name="cache_settings"
                                                       className="custom-switch-input" checked={cache_settings} onChange={(e) => set('cache_settings', e.target.checked)}/>
                                                <span className="custom-switch-indicator"></span>
                                                <span className="custom-switch-description">Cache settings</span>
                                            </label>
                                            <label className="custom-switch">
                                                <input type="checkbox" name="cache_blog_posts"
                                                       className="custom-switch-input" checked={cache_blog_posts} onChange={(e) => set('cache_blog_posts', e.target.checked)}/>
                                                <span className="custom-switch-indicator"></span>
                                                <span className="custom-switch-description">Cache blog posts</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                        <label className="form-label">Slug type</label>
                                        <div className="row gutters-sm">
                                            <div className="col">
                                                <select className="form-control custom-select" name="slug_type" value={slug_type || ''} onChange={(e) => set('slug_type', e.target.value)}>
                                                    <option value="title">Title</option>
                                                    <option value="random">Random</option>
                                                </select>
                                            </div>
                                            <span className="col-auto align-self-center">
                                                <span className="form-help" data-toggle="popover" data-placement="top"
                                                      data-content="<p>Sets what kind of slug to use for a blog post.<br><strong>Title: </strong>Use parts of the post tile when generating the slug. Will make link invalid if title is changed.<br> <strong>Random: </strong>Use a set of random chars as slug. Is not affected when title is changed.</p>">?</span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Slug Size</label>
                                        <div className="row align-items-center">
                                            <div className="col">
                                                <input id="rng" type="range" className="form-control custom-range" step="1" min="5" max="20" name="slug_size" value={slug_size || ''} onChange={(e) => set('slug_size', e.target.value)}/>
                                            </div>
                                            <div className="col-auto">
                                                <input id="rngval" type="number" className="form-control w-8" readOnly value={slug_size || ''}/>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 text-right">
                                    <button className="btn btn-sm btn-success" onClick={() => this.props.save(this.props.settings)}><i className="fe fe-save mr-2"></i>Save</button>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        settings: state.settings.groups.general,
        loading: state.settings.loading
    }
};
const mapDispatchToProps = dispatch => {
    return {
        load: () => {
            dispatch(fetchGeneral())
        },
        set: (key, value) => {
            dispatch(setSetting(key, value, 'general'))
        },
        save: (settings) => {
            dispatch(saveSetting(settings));
        }
    }
};
export default connect(
    mapStateToProps, mapDispatchToProps
)(GeneralSettings)
