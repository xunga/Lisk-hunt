import React, { Component } from 'react';

import Column from './Column';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Description extends Component {
  renderColumns() {
    const {
      main_wallet,
      voting_wallet,
      affiliate,
      share_rewards,
      marketing_events,
      forging,
      snapshot_server_url,
      ambassador,
      moderator,
      block_explorer_url,
      github_commits
    } = this.props;

    const section1 = [
      { label: 'MAIN WALLET', text: main_wallet },
      { label: 'VOTING WALLET', text: voting_wallet },
      { label: 'SHARING REWARDS', text: share_rewards, extra_text : '%' },
    ];
    const section2 = [{ label: 'AFFILIATION', text: affiliate }];
    const section3 = [
      { label: 'FORGING', text: forging },
      { label: 'AMBASSADOR', text: ambassador },
    ];
    let section4 = [
      { label: 'MODERATOR', text: moderator },
      { label: 'MARKETING EVENTS', text: marketing_events },
    ];
    const section5 = [
      { label: 'COMMITS TO LiskHQ', text: github_commits || 0 },
    ];

    if(block_explorer_url) section4.push({ label: 'PUBLIC ADDRESS', text: block_explorer_url });
    if(snapshot_server_url) section4.push({ label: 'SNAPSHOT SERVER', text: snapshot_server_url });

    return (
      <div className="description">
        <Column fields={section1} />
        <Column fields={section2} />
        <Column fields={section3} />
        <Column fields={section4} />
        <Column fields={section5} />
      </div>
    );
  }

  render() {
    return <div>{this.renderColumns()}</div>;
  }
}

const mapStateToProps = state => ({
  main_wallet: state.delegates.delegate.main_wallet,
  voting_wallet: state.delegates.delegate.voting_wallet,
  affiliate: state.delegates.delegate.affiliate,
  share_rewards: state.delegates.delegate.share_rewards,
  marketing_events: state.delegates.delegate.marketing_events,
  forging: state.delegates.delegate.forging,
  snapshot_server_url: state.delegates.delegate.snapshot_server_url,
  ambassador: state.delegates.delegate.ambassador,
  moderator: state.delegates.delegate.moderator,
  block_explorer_url: state.delegates.delegate.block_explorer_url,
  github_commits: state.delegates.delegate.github_commits,
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Description);
