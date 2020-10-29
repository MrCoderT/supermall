import { request } from './request'

//获取详情数据
export function getDetail(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}

//商品信息
export class Goods{
  constructor(itemInfo, columns, services) {
   this.title = itemInfo.title
   this.columns = columns
   this.oldPrice = itemInfo.oldPrice
   this.newPrice = itemInfo.price
   this.discount = itemInfo.discountDesc
   this.lowNowPrice = itemInfo.lowNowPrice
    this.desc = itemInfo.desc
   this.services = services
   this.realPrice = itemInfo.lowNowPrice
  }
}
//商家信息
export class Shop{
  constructor(shopInfo) {
    this.name = shopInfo.name
    this.logo = shopInfo.shopLogo
    this.fans = shopInfo.cFans
    this.sells = shopInfo.cSells
    this.score = shopInfo.score
    this.goodsCount = shopInfo.cGoods
  }
}
//商品参数
export class GoodsParam {
	constructor(info, rule) {
		// 注: images可能没有值(某些商品有值, 某些没有值)
		this.image = info.images ? info.images[0] : '';
		this.infos = info.set;
		this.sizes = rule.tables;
	}
}

//获取推荐数据
export function getRecommend() {
  return request({
    url: '/recommend'
  })
}