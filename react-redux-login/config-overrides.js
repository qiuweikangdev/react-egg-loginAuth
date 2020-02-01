/*
 * @Descripttion: 
 * @version: 
 * @Author: qqqiu
 * @Date: 2020-01-28 19:48:27
 * @LastEditors: qqqiu
 * @LastEditTime: 2020-01-28 19:49:09
 */
const { override, addWebpackAlias } = require('customize-cra')
const path = require('path')
const resolve = dir => path.join(__dirname, '.', dir)

module.exports = override(
  addWebpackAlias({
    ['@']: resolve('src')
  })
)
