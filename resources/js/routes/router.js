import log from '../middlewares/logged.js';

export default [
    { name: 'homePage', path: '/', component: require('../components/Home.vue').default },
    { name: 'second', path: '/second', component: require('../components/SecondPage.vue').default, meta: { middleware: log } },
]
