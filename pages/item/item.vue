<template>
	<view class="content">
		<view class="banTo"><ban /></view>

		<view class="ibody">
			<text class="text1">{{ ones.name }}</text>
			<view class="img1"><image :src="ones.image" class="img2" /></view>
		</view>

		<view class="tap">
			<view class="use"><image src="../../static/use.png" class="img"></image></view>
			<button type="primary" class="car" @tap="add">加入购物车</button>
		</view>
	</view>
</template>

<script>
import ban from '../components/ban.vue';
import jsons from '../../static/json/items.json';
export default {
	data() {
		return {
			ones: ''
		};
	},
	methods: {
		add() {
			this.$store.dispatch('joinstates', this.ones);
		}
	},
	components: {
		ban
	},
	onLoad(res) {
		this.ones = jsons.item.filter(item => {
			return item.id == res.i;
		})[0];
		console.log(this.ones);
	}
};
</script>

<style scoped>
.text1 {
}
.ibody {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
}
.img1 {
	width: 70%;
	height: 70%;
}
.img2 {
	width: 100%;
	height: 100%;
}
.tap {
	position: fixed;
	bottom: 0;
	width: 100%;
	display: flex;
}
.car {
	flex: 4;
}
.use {
	flex: 1;
}
.img {
	width: 80upx;
	height: 80upx;
	margin-left: 30upx;
}
.banTo {
	height: 5%;
	width: 100%;
}
.content {
	margin: 0;
	height: 100%;
	width: 100%;
}
</style>
