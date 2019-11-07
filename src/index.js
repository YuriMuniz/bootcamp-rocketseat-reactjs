import React from 'react';
import { render } from 'react-dom';
import App from './App';
import Header from './components/Header';
import PostList from  './components/PostList';

render(<Header />, document.getElementById('header'));
render(<PostList />, document.getElementById('postlist'));