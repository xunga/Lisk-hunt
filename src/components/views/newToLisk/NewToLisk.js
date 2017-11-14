import React, { Component } from 'react';
import AnimationsWrapper from '../../animations-wrapper/AnimationsWrapper';

import { goResourcesList, goNewToLisk } from '../../router/routes';

import './css/newtolisk.css';

import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { setActivePage } from '../../../actions';
import Container from "./components/Container";

class NewToLisk extends Component {
  componentWillMount() {
    this.props.setActivePage(goNewToLisk);
  }

  render() {
    return (
      <AnimationsWrapper>
        <div className="newtolisk">

            <div className="newtolisk--wrap">

              <Container
                  title="So you are new to lisk?"
                  text={`Lisk is a blockchain platform that provides decentralized
                    blockchain apps. It&apos;s developed in Javascript and enables developers to create
                    their own dApp (decentralized application) and run them on the
                    Lisk sidechains. Lisk uses a system known as Delegated Proof of
                    Stake as it&apos;s consensus model.`}
                  url={ { url: "https://blog.lisk.io/what-is-lisk-and-what-it-isnt-e7b6b6188211", name : "What is Lisk? And what it isnt." } }
              />

              <Container
                  title="Where can I purchase Lisk?"
                  text={`At the moment Lisk tokens can purchased on Poloniex, Bittrex,
                    Jubi, BitBay, Yobit, Livecoin, HitBTC and some other minor
                    exchanges. To see which exchanges are trading Lisk, refer this page on
                    `}
                  url={ { url: "https://coinmarketcap.com/currencies/lisk/#markets", name : "Coinmarketcap" } }
              />

              <Container
                  title="What is delegated proof of stake?"
                  text={`Lisk uses the Delegated Proof of Stake (DPoS) consensus
                      algorithms. The network is secured and/or protected by 101
                      active delegates. Each delegate is elected by the stakeholders
                      of LSK. Once voted into the list of active delegates they are
                      given the authority to generate blocks. Every Lisk stakeholder
                      can be a part of the electoral process, by placing votes for
                      delegates in their favour, or by becoming a candidate
                      themselves. The duty of the 101 active delegates is to secure
                      the Lisk main blockchain (sidechains have their own
                      delegates). In order to provide an incentive to secure the
                      network, transaction fees on the network are distributed
                      equally amongst the 101 active delegates. In addition, an
                      inflationary block reward (aka forging reward) is distributed
                      to each block generator.`} />

              <Container
                  title="What&apos;s an active or standby delegate?"
                  text={`To become a delegate you just need to register a delegate
                      username within the client. After the registration your
                      account ID appears in the list of all delegates. The
                      registration fee is currently 25 LSK.`} />

              <Container
                  title="How do I become a delegate?"
                  text={`Every delegate is placed at a specific position on the
                  delegate ranking list. The number of votes determines that
                  position. All delegates with a rank between 1 and 101 are
                  active delegates. All other delegates with a rank over 101
                  (102-∞) are classified as standby delegates. Only the 101
                  active delegates will actually forge and earn rewards. The
                  standby delegates are there only to replace an active delegate
                  if they lose enough votes to get bumped out.`} />

              <Container
                  title="What is forging?"
                  text={`Forging is another word for block generation, at Bitcoin this
                  process is called mining. Lisk utilizes an inflationary
                  forging rewards system which creates new LSK for every
                  successful block. More information about this below.`}
                  url={ { url : "https://github.com/LiskArchive/lisk-wiki/wiki/Delegates-Forging", name: "Delegates Forging" } }
              />


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
