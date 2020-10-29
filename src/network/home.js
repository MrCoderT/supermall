import { request } from './request'

//获取轮播图数据
export function getMultiData(){
  return request({
    url: '/home/multidata'
  })
}

// 获取商品列表数据
export function getGoodsData(type, page){
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}