export const useUser = definePiniaStore({
    id: 'User',
    state: () => {
        return {
            filtersList: ['youtube', 'twitch'],
        }
    },
    actions: {},
    getters: {
        filtersList: state => state.filtersList,
    },
})
