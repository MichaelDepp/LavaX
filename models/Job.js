import { destroy, types } from "mobx-state-tree"

export const Country = types.model({
    name: types.optional(types.string, ""),
    isoCode: types.optional(types.string, ""),
})

export const City = types.model({
    name: types.optional(types.string, ""),
    country: types.optional(Country, {})
})

export const Cities = types.model({
    cities: types.optional(types.array(City), [])
})

export const Tag = types.model({
    name: types.optional(types.string, ""),
})

export const Commitment = types.model({
    title: types.optional(types.string, "")
})

export const Company = types.model({
    name: types.optional(types.string, ""),
    slug: types.optional(types.string, ""),
    logoUrl: types.optional(types.string, ""),
    websiteUrl: types.optional(types.string, ""),
})

export const Job = types.model({
    title: types.optional(types.string, ""),
    id: types.optional(types.string, ""),
    slug: types.optional(types.string, ""),
    company: types.optional(Company, {}),
    tags: types.optional(types.array(Tag), []),
    cities: types.optional(types.array(City), []),
    commitment: types.optional(Commitment, {}),
    description: types.optional(types.string, ""),
    applyUrl: types.optional(types.string, ""),
    postedAt: types.optional(types.string, ""),
    star : false,
})


export const FavJob = types.model({
    jobs: types.optional(types.array(Job), [])
}).views(self=> ({
    printlogo() {
        return self.jobs.map(job => job.title)
    },
})).actions(self => ({
    add(job) {
        self.jobs.push(job)
    },
    remove(job) {
        console.log(job)
        self.jobs.splice(job, 1)
    }
}))
