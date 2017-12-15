import Bang from 'components/bang'
import CounterExample from 'components/counter-example'
import FetchData from 'components/fetch-data'
import HomePage from 'components/home-page'

export const routes = [
    { path: '/', component: HomePage, display: 'Home', style: 'glyphicon glyphicon-home' },
    { path: '/bang', component: Bang, display: 'Bang', style: 'glyphicon glyphicon-education' },
    { path: '/counter', component: CounterExample, display: 'Counter', style: 'glyphicon glyphicon-education' },
    { path: '/fetch-data', component: FetchData, display: 'Fetch data', style: 'glyphicon glyphicon-th-list' }
]