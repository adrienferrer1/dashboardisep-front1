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
         <div className="col-5" id="tutor-search">
             <select>
                {optionItems}
             </select>
         </div>
        )
    }
}

export default Tutor;
