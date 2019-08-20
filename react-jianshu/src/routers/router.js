import React from 'react'
import {HashRouter, Route, Switch} from 'react-router-dom'
import Home from './../pages/home/home'
import Detail from './../pages/detail/detail'
import Club from './../pages/mobile/club/club'
import Books from './../pages/mobile/books/books'
import Publication from './../pages/mobile/publication/publication'
import School from './../pages/mobile/school/school'
import DownloadApp from './../pages/download-app/downloadApp'

const  basicRouter = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/detail" component={Detail}/>
            <Route exact path="/mobile/club" component={ Club }/>
            <Route exact path="/mobile/books" component={ Books }/>
            <Route exact path="/mobile/publications" component={ Publication }/>
            <Route exact path="/mobile/school" component={ School }/>
            <Route exact path="/pages/downloadapp" component={ DownloadApp }/>
        </Switch>
    </HashRouter>
);

// export const boardRouter = () => {
//     <HashRouter>
//         <Switch>
//             <Route path="/mobile/club" component={ Club }/>
//             <Route path="/mobile/books" component={ Books }/>
//             <Route path="/mobile/publications" component={ Publication }/>
//             <Route path="/mobile/school" component={ School }/>
//         </Switch>
//     </HashRouter>
// }
export default basicRouter