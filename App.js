import React from 'react';
import ReactDOM from 'react-dom';

const parent = React.createElement('div', { id: 'parent' }, [
  React.createElement('div', { id: 'child' }, [
    React.createElement('h1', {}, 'I am Child 1 H1'),
    React.createElement('h2', { id: 'heading' }, 'I am Child 1 H2'),
  ]),
  React.createElement('div', { id: 'child2' }, [
    React.createElement('h1', null, 'I am h1 from child2 '),
    React.createElement('h2', { id: 'heading' }, 'I am h2 from child2'),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(parent);
root.render(parent);
