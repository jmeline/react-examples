Down the rabbit hole

![down we go](https://hacked.com/wp-content/uploads/2017/06/Rabbit-hole-680x454.jpg)

In this project, I rewrote the following pieces of redux functionality. Cleanup is still needed but it is a good start:
- [createStore](https://github.com/jmeline/react-examples/blob/master/redux-down-the-rabbit-hole/src/reducers/myRedux.js)
- [combineReducers](https://github.com/jmeline/react-examples/blob/master/redux-down-the-rabbit-hole/src/reducers/myCombineReducers.js)

I also wrote these helper functions that would reduce the traditional redux boiler plate:
- [actionCreator](https://github.com/jmeline/react-examples/blob/master/redux-down-the-rabbit-hole/src/reducers/myActionCreator.js)
- [reducerCreator](https://github.com/jmeline/react-examples/blob/master/redux-down-the-rabbit-hole/src/reducers/myReducerCreator.js)

Still need to deep dive into the following:
- middleware
- async action creator helper functions

I have been quite impressed with these resources that have helped in my personal understanding. 
- [egghead.io](https://egghead.io/courses/getting-started-with-redux)
  - [egghead.io-course-notes](https://github.com/tayiorbeii/egghead.io_redux_course_notes)
- [full stack redux](http://teropa.info/blog/2015/09/10/full-stack-redux-tutorial.html)
- [mark's dev blog](http://blog.isquaredsoftware.com/tags/redux/)
- [redux source code](https://github.com/reactjs/redux)
