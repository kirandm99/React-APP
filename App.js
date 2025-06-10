const heading = React.createElement('div', { id: 'root1' },
    React.createElement('div', { id: 'root2' },
        [React.createElement('h1', { id: 'head1' }, "This is Heading1"), React.createElement('h2', { id: 'head2' }, "This is Heading2")]
    ));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);