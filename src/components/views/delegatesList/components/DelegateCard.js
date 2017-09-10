import React, { Component } from 'react';
import { Tooltip } from 'react-lightweight-tooltip';

class DelegateCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const tooltip = {
      content: {
        backgroundColor: '#303030',
        color: '#ffffff',
        background: '#303030',
      },
      tooltip: {
        color: '#303030',
        borderRadius: '10px',
        background: '#303030',
      },
    };

    return (
      <div
        className="column is-6 is-offset-3"
        key={this.props.delegate.delegate_name}
      >
        <div className="box">
          <article className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img
                  src={this.props.delegate.delegate_img_url}
                  alt="Image"
                />
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{this.props.delegate.delegate_name}</strong> <br />
                  <Tooltip
                    content={[
                      ' The coolness score is calculated by the amount of Apps the delegate developed,',
                      <br />,
                      'the ammount of received likes and the amount of donations made. In this case:',
                      <br />,
                      <br />,
                      `Apps: ${this.props.delegate.app_count} || Likes: ${this
                        .props.delegate.likes}`,
                      <br />,
                      `Donations: ${this.props.delegate.total_donations}`,
                      <br />,
                    ]}
                    styles={tooltip}
                  >
                    <strong
                      data-tip
                      data-for="score-explain"
                      className="tooltip"
                      data-tooltip="Tooltip Text"
                    >
                      Coolness score:
                    </strong>{' '}
                    <small>{this.props.delegate.ranking}</small>
                  </Tooltip>
                </p>
              </div>
              <nav className="level is-mobile">
                <div className="level-left">
                  <a
                    className="level-item"
                    href={'https://lisk.chat/direct/' + this.props.delegate.delegate_contact}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className="icon is-small">
                      <i className="fa  fa-commenting-o" />
                    </span>
                  </a>
                  <a
                    className="level-item"
                    href={this.props.delegate.delegate_github}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className="icon is-small">
                      <i className="fa fa-github" />
                    </span>
                  </a>
                </div>
              </nav>
            </div>
            <div className="media-right">
              {this.props.index}.
            </div>
          </article>
        </div>
      </div>
    );
  }
}

export default DelegateCard;