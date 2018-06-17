import React, {Component} from 'react';
import {connect} from "react-redux"
import {NavLink, Route, Switch} from "react-router-dom";
import GeneralSettings from "./pages/GeneralSettings";


class Settings extends Component {
    constructor(props) {
        super(props);
    }

    getSaveStatus() {
        if (this.props.saving) {
            return (
                <button className="btn btn-success btn-block disabled">
                    <i className="fe fe-save"></i>
                    Saving...
                </button>
            );
        }
        return (
            <button className="btn btn-success btn-block"
                    onClick={() => console.log('d')}>
                <i className="fe fe-save"></i>
                Save
            </button>
        );
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 col-md-3 col-lg-2 mb-4">
                        <div className="list-group list-group-transparent mb-0">
                            <NavLink to={`/settings/general`}
                                     className={`list-group-item list-group-item-action`} activeClassName={'active'}>
                                <span className="icon mr-3"><i className="fe fe-layers"></i></span>General
                            </NavLink>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-9 col-lg-10 mb-4">
                        <Switch>
                            <Route path="/settings/general" exact component={GeneralSettings}/>
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        post: state.newPost.post,
        tags: state.newPost.tags,
        saving: state.newPost.saving,
    }
};
export default connect(
    mapStateToProps,
)(Settings)