<style scoped>
.a0 {
	width: 100%;
	height: 100%;
	margin: 0;
}
.content {
	width: 100%;
	height: 100%;
	background-color: #f8f8f9;
}
.all {
	display: flex;
	flex-direction: column;
	padding: 10upx;
	align-items: flex-start;
}
.name {
	display: flex;
	margin-top: 20upx;
}
.btntext {
	margin-left: 5upx;
}
.btn {
	border-radius: 30upx;
	margin-right: 10upx;
	display: flex;
	justify-content: center;
	align-items: center;
	box-shadow: 1px 1px 1px #333333;
}
.content0 {
	width: 100%;
	height: 100%;
	background-color: #e3dada;
	padding: 10upx;
	display: flex;
	flex-wrap: wrap;
}
.content1 {
	border-radius: 20upx;
	padding: 10upx 20upx 20upx 20upx;
	height: 330upx;
	margin: 20upx;
	width: 38%;
	background-color: #f5ebeb;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-content: center;
	align-items: center;
	box-shadow: 0px 0px 10px #333333;
}
.img1 {
	height: 77%;
	width: 93%;
}
.img2 {
	height: 100%;
	width: 100%;
	border-radius: 20upx;
}
.text1 {
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	width: 10em;
	padding-bottom: 40upx;
}
.text2 {
	font-size: 80%;
	color: #dd524d;
}
.alerttext {
	align-self: flex-end;
	position: relative;
	right: 3%;
	top: 3%;
	background-color: #007aff;
	color: #e3dada;
	font-size: 60%;
	border-radius: 8upx;
	padding: 1upx;
}
</style>
<template>
	<view class="a0">
		<view class="content">
			<view class="all">
				<view class="name">
					<view class="btntext">品牌：</view>
					<button type="default" class="btn" size="mini" @tap="apple">Apple</button>
					<button type="default" class="btn" size="mini" @tap="Beats">Beats</button>
					<button type="default" class="btn" size="mini" @tap="Bose">Bose</button>
					<button type="default" class="btn" size="mini" @tap="dell">dell</button>
				</view>
				<view class="name">
					<view class="btntext">颜色：</view>
					<button type="default" class="btn" size="mini" @tap="white">白色</button>
					<button type="default" class="btn" size="mini" @tap="red">红色</button>
					<button type="default" class="btn" size="mini" @tap="black">黑色</button>
				</view>
				<view class="name">
					<view class="btntext">排序：</view>
					<button type="default" class="btn" size="mini" @tap="sell">销量 </button>
					<button type="default" class="btn" size="mini" @tap="pirce" v-if="apirce">价格 ↓</button>
					<button type="default" class="btn" size="mini" @tap="repirce" v-else="apirce">价格 ↑</button>
				</view>
			</view>
		</view>
		<view class="content0">
			<view class="content1" v-for="one in arr" :key="one.id" @tap.stop="toitem(one.id)">
				<view class="alerttext" @tap.stop="joincar(one)">加入购物车</view>
				<view class="img1"><image :src="one.image" class="img2"></image></view>
				<text class="text1">{{ one.name }}</text>
				<text class="text2">{{ one.cost }} ¥</text>
			</view>
		</view>
	</view>
</template>

<script>
import jsons from '../../static/json/items.json';
export default {
	data() { 
		return {
			arr: [],
			apirce:true
		};
	},
	onReady() {
		this.arr = jsons.item;
	 },
	methods: {
		pirce(){
			this.arr = jsons.item.sort((a, b) =>
				  b.cost-a.cost 
			);
			this.apirce=false
		},
		repirce(){
			this.arr = jsons.item.sort((a, b) =>
				  a.cost-b.cost 
			);
			this.apirce=true
		},
		sell() {
			this.arr = jsons.item.sort((a, b) =>
				  b.sales-a.sales 
			);
		},
		filterbrand(other) {
			this.arr = jsons.item.filter(one => {
				return one.brand.match(other);
			});
		},
		filtercolor(other) {
			this.arr = jsons.item.filter(one => {
				return one.color.match(other);
			});
		},
		apple() {
			this.filterbrand('Apple');
		},
		Beats() {
			this.filterbrand('Beats');
		},
		Bose() {
			this.filterbrand('Bose');
		},
		Bose() {
			this.filterbrand('Bose');
		},
		dell() {
			this.filterbrand('dell');
		},
		white() {
			this.filtercolor('白色');
		},
		red() {
			this.filtercolor('红色');
		},
		black() {
			this.filtercolor('黑色');
		},
		joincar(id) {
			this.$store.dispatch('joinstates', id);
		},

		toitem(id) {
			console.log(id);
			uni.navigateTo({
				url: '../item/item?i=' + id
			});
		}
	}
};
</script>
