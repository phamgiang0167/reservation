import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Calendar from '../../components/Calendar/Calendar'
import Quote from '../../components/Quote/Quote'
import SectionTitle from '../../components/Section_title/SectionTitle'
import Slots from '../../components/Slots/Slots'
import Time from '../Time/Time'
class SlotAndDate extends Component {
    render() {
        const { courseReducer } = this.props
        return (
            <section className='slot-date'>
                <SectionTitle>
                    <span>Please </span>
                    select the
                    <span> number of visitors and the expected date </span>
                    of visit
                </SectionTitle>
                {courseReducer.status ?
                    (<Fragment>
                        <div className='slot-date__wrapper'>
                            <div className="wrapper__slots">
                                <Slots />
                            </div>
                            <div className="wrapper__calendar">
                                <Calendar />
                            </div>
                        </div>
                        <div style={{marginBottom: "10px"}}></div>
                        <SectionTitle>
                            <span>Please </span>
                            select
                            <span> your visit time</span>
                        </SectionTitle>
                        <Time />
                    </Fragment>


                    ) :
                    (<Quote>If you select a course, you can select the number of people who can make a reservation, the date and the time</Quote>)
                }


            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        courseReducer: state.courseReducer
    }
}

export default connect(mapStateToProps)(SlotAndDate)