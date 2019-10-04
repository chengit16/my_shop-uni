<style scoped>
.alert {
	text-align: center;
	font-weight: bold;
}
.text1 {
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}
.line {
	display: inline;
}
.onfixed {
	position: fixed;
	bottom: 0;
	width: 100%;
}
.bodyCount {
	background-color: #ffffff;
	width: 90%;
	margin-bottom: 15%;
}
.carCount {
	padding: 40upx;
	height: 100%;
	width: 100%;
}
.banTo {
	height: 5%;
	width: 100%;
}
.content {
	margin: 0;
	height: 100%;
	width: 100%;
	background-color: #e3dada;
}
.tobtn {
	width: 40upx;
	height: 40upx;
	margin: 5upx;
	display: flex;
	justify-content: center;
	align-items: center;
}
.right {
	display: flex;
	flex-direction: row;
}
.leftright {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}
.aimage {
	border-right: #6d6d72 solid;
}
</style>

<template>
	<view class="content">
		<view class="banTo"><ban /></view>
		<view class="carCount">
			<view class="bodyCount">
				<view class="uni-list">
					<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(item, index) in ones" :key="item.id" @tap.stop="nav(item.id)">
						<view class="uni-media-list one">
							<image class="uni-media-list-logo" :src="item.image"></image>
							<view class="uni-media-list-body">
								<view class="text1 uni-media-list-text-top">{{ item.name }}</view>
								<view class="uni-media-list-text-bottom uni-ellipsis">
									<view class="leftright">
										<view class="left">{{ item.cost }} * {{ item.count }}</view>
										<view class="right">
											<button @tap.stop="add(index)" class="tobtn">+</button>
											{{ item.count }}
											<button @tap.stop="red(index)" class="tobtn">-</button>
										</view>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
				<view class="alert" v-show="alert">暂时没有添加商品</view>
			</view>
		</view>
		<view class="onfixed">
			<view class="uni-list">
				<view class="uni-list-cell">
					<view class="uni-media-list uni-pull-right">
						<view class="uni-media-list-logo"><image class="uni-media-list-logo" @tap="resolve" src="../../static/pay.png"></image></view>
						<view class="uni-media-list-body aimage">
							<view class="uni-media-list-text-top">{{ countPrice }} 元</view>
							<view class="uni-media-list-text-bottom uni-ellipsis">{{ countNum }} 件</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import ban from '../components/ban.vue';
export default {
	data() {
		return {
			alert: true
		};
	},
	onShow() {
		this.$store.state.filterone.length !== 0 ? (this.alert = false) : (this.alert = true);
	},
	computed: {
		ones() {
			return this.$store.state.filterone;
		},
		countPrice() {
			return this.$store.state.countPrice;
		},
		countNum() {
			return this.$store.state.cars.length;
		}
	},
	components: {
		ban
	},
	methods: {
		add(index) {
			this.$store.dispatch('addones', index);
		},
		red(index) {
			this.$store.dispatch('redones', index);
		},
		resolve() {
			if (this.$store.state.filterone.length !== 0) {
				uni.showModal({
					title: '提示',
					content: '是否确认支付',
					success: res => {
						if (res.confirm) {
							this.$store.dispatch('resolves');
							this.alert = true;
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			} else {
				uni.showToast({
					title: '请添加商品',
					icon: 'none',
					duration: 2000
				});
			}
		},
		nav(id) {
			uni.navigateTo({
				url: '../item/item?i=' + id
			});
		}
	}
};
</script>
