import React, { Component } from 'react';
import { connect } from 'react-redux';

import Banner from '../../components/Banner/Banner';
import HomeStep from '../../components/HomeSteps/HomeStep';
import SectionGap from '../../components/SectionGap/SectionGap';

import Step1 from '../../Views/Step1/Step1';
import Step2 from '../../Views/Step2/Step2';
import Step3 from '../../Views/Step3/Step3';

class Home extends Component {
    state = {
        view: 1,
        name: {
          status: false,
          value: ""
        },
        phone: {
          status: false,
          value: ""
        },
        email: {
          status: false,
          value: ""
        },
        isFirstVisit: true
      }
      setField = (type, value) => {
        this.setState({
          [type]: value
        })
      }
    renderView = () => {
        if(this.state.view === 1){
            return <Step1 handleChangeView={this.handleChangeView}/>
        }else if(this.state.view === 2){
            return <Step2 handleChangeView={this.handleChangeView} state={this.state} setField={this.setField}/>
        }else{
            return <Step3 secondData={this.state} firstData={this.props}/>
        }
    }
    handleChangeView = (view) => {
        this.setState({view})
    }
    render() {
        return (
            <section section className='home__wrapper' >
                <Banner>
                    Private room dining Rakuzo-RAKUZO-Sapporo station sqaure store
                </Banner>
                <SectionGap />
                <HomeStep step={this.state.view}/>
                {this.renderView()}
            </section >
        );
    }
}

const mapStateToProps = state => {
    return {
        course: state.courseReducer.coursePicked,
        time: state.timeReducer.time,
        date: state.dateReducer.date,
        slots: state.slotsReducer.slots,
        seat: state.seatReducer.seat
    }
}

export default connect(mapStateToProps)(Home);