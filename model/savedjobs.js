import {types} from "mobx-state-tree"

const Savedjobs = types.model("Savedjobs", {
    saved: types.array
})

export default Savedjobs