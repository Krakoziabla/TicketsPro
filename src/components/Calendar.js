import {React} from "react";
import Calendar from 'react-calendar/dist/entry.nostyle';

class CalendarMain extends React.Component {
    state = {
        date: new Date(),
    }

    onChange = date => this.setState({ date })

    render() {
        return (
            <div>
                <h2 class='text-center event_h2_txt'>Calendar</h2>
                <Calendar
                onChange={this.onChange}
                value={this.state.date}
            />
                <h2 className='text-center event_h2_txt'>Upcoming Events</h2>
            </div>
        );
    }
}

export default CalendarMain;