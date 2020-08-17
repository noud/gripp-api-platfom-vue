import TagList from '../components/tag/List'
import TagCreate from '../components/tag/Create'
import TagUpdate from '../components/tag/Update'
import TagShow from '../components/tag/Show'

export default [
  { name: 'TagList', path: '/tags/', component: TagList },
  { name: 'TagCreate', path: '/tags/create', component: TagCreate },
  { name: 'TagUpdate', path: '/tags/edit/:id', component: TagUpdate },
  { name: 'TagShow', path: '/tags/show/:id', component: TagShow }
]