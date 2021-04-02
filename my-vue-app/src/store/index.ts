import { createStore } from "vuex";
let files = import.meta.glob('./module/*.ts')

console.log('files', files)

export default createStore({
    mixins: Object.values(files).map((v) => v.default),
})