import React, { Component } from 'react';
import AnimationsWrapper from '../../animations-wrapper/AnimationsWrapper';

import { goResourcesList, goNewToLisk } from '../../router/routes';

import './css/newtolisk.css';

import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { setActivePage } from '../../../actions';

import Subjects from "./components/Subjects";
import Menu from "./components/Menu";

class NewToLisk extends Component {
  componentWillMount() {
    this.props.setActivePage(goNewToLisk);
  }

  render() {
    return (
      <AnimationsWrapper>
        <div className="newtolisk">
            <div className="newtolisk--wrap">
                <Menu />
                <Subjects />
            </div>
          </div>
      </AnimationsWrapper>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      goResourcesList: () => push(goResourcesList),
      setActivePage: page => setActivePage(page),
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(NewToLisk);
