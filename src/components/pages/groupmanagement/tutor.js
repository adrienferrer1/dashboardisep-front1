import React from 'react';

class Tutor extends React.Component {
    constructor() {
        super();
    }

    render () {
        let tutors = this.props.state.tutors;
        let optionItems = tutors.map((tutor) =>
                <option key={tutor.name}>{tutor.name}</option>
            );

        return (
         <div className="dropdown" id="tutor-search">
             <select className="btn btn-light">
                {optionItems}
             </select>
         </div>
        )
    }
}

export default Tutor;
