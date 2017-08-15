import React from 'react';
import ReactDOM from 'react-dom';
import ShareableDriversList from './components/ShareableDriversList.jsx';

class FamilyViewCreate extends React.Component {
    render() {
        return <div><ShareableDriversList /></div>;
    }
}

ReactDOM.render(<FamilyViewCreate />, document.getElementById('test-container'));
