import React from 'react';

class Notes extends React.Component {
    render() {
        return (
            <div className="notes col-sm-6">
                <textarea style={{"width": "100%"}} value={this.props.activeNote} onChange={this.props.onChangeNote} />
                <button onClick={this.props.onAppendNote}>Сделать заметку</button>
            </div>
        );
    }
}

export default Notes;