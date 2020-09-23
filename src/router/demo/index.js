import Axios from '../../views/demo/Axios.vue'
import Vant from '../../views/demo/Vant.vue'
import Area from '../../views/demo/Area.vue'

const demoAxios =
    {
        path: '/demo/axios',
        name: 'Axios',
        component: Axios,
    }

const demoVant =
    {
        path: '/demo/vant',
        name: 'Vant',
        component: Vant,
    }

const demoArea =
    {
        path: '/demo/area',
        name: 'Area',
        component: Area,
    }

export {
    demoAxios,
    demoVant,
    demoArea,
}
