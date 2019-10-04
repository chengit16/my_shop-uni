<template>
	<view class="content">
		<view class="banTo"><ban /></view>
		<view class="chooseTo"><choose /></view>
	</view>
</template>

<script>
import ban from '../components/ban.vue';
import choose from '../components/choose.vue';
export default {
	data() {
		return {};
	},
	components: {
		ban,
		choose
	},
	methods: {}
};
</script>

<style scoped>
.banTo {
	height: 5%;
	width: 100%;
}
.chooseTo {
	height: 95%;
	width: 100%;
}
.content {
	margin: 0;
	height: 100%;
	width: 100%;
}
</style>
