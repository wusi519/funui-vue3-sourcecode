import {createRouter, createWebHashHistory} from 'vue-router';
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import SwitchDemo from './views/SwitchDemo.vue';
import ButtonDemo from './views/ButtonDemo.vue';
import DialogDemo from './views/DialogDemo.vue';
import TabsDemo from './views/TabsDemo.vue';
import intro from './markdown/intro.md';
import getStarted from './markdown/get-started.md';
import install from './markdown/install.md';

import {h} from 'vue';
import Markdown from './components/Markdown.vue';


const history = createWebHashHistory();
const md = string => h(Markdown, { content: string, key: string })
export const router = createRouter({
  history: history,
  routes: [
    {path: '/', component: Home},
    {
      path: '/doc', component: Doc,
      children: [
        {path: '', redirect:'/doc/intro'},
        {path: "intro", component: md(intro) },
        {path: "get-started", component: md(getStarted) },
        {path: "install", component: md(install) },
        {path: 'button', component: ButtonDemo},
        {path: 'switch', component: SwitchDemo},
        {path: 'dialog', component: DialogDemo},
        {path: 'tabs', component: TabsDemo},

      ]
    }
  ]
});
router.afterEach(() => {
});