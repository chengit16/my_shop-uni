import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		cars: [],
		filterone: [],
		countPrice: 0
	},
	mutations: {
		resolve(state) {
			state.filterone = []
			state.cars = []
			state.countPrice = 0
			uni.setTabBarBadge({
				index: 1,
				text: '0'
			})
		},
		addone(state, other) {
			state.filterone[other].count++
			console.log(state.filterone[other].count)
		},
		redone(state, other) {
			state.filterone[other].count--
			state.filterone[other].count = state.filterone[other].count < 0 ? 0 : state.filterone[other].count
		console.log(state.filterone[other].count) 
		},
		joinstate(state, other) {
			other.count ? other.count += 1 : other.count = 1,
				state.cars.push(other)
			uni.setTabBarBadge({
				index: 1,
				text: state.cars.length + ''
			});
			state.filterone = [...new Set(state.cars)]
			let reult = state.filterone.map(item => {
				return item.cost * item.count
			})
			for (let i = 0; i < reult.length; i++) {
				state.countPrice += reult[i];
			}
		}
	},
	actions: {
		joinstates(ctx, other) {
			ctx.commit('joinstate', other)
		},
		resolves(ctx) {
			ctx.commit('resolve')
		},
		addones(ctx, other) {
			ctx.commit('addone', other)
		},
		redones(ctx, other) {
			ctx.commit('redone', other)
		}
	}
})

export default store
