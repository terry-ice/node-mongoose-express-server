/*
 * @Author: terry
 * @Date: 2019-05-12 20:41:58
 * @Last Modified by: https://github.com/terry-ice
 * @Last Modified time: 2019-05-12 21:38:34
 */

/*
*
* 分类数据模型
*
*/

import mongoose from "mongoose";
import autoIncrement from 'mongoose-auto-increment';
import mongoosePaginate from 'mongoose-paginate';

// 自增ID初始化
autoIncrement.initialize(mongoose.connection);

// 分类集合模型
const categorySchema = new mongoose.Schema({

	// 分类名称
	name: { type: String, required: true, validate: /\S+/ },

	// 别名
	slug: { type: String, required: true, validate: /\S+/ },

	// 分类描述
	description: String,

	// 父分类ID
	pid: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', default: null },

	// 创建时间
	create_at: { type: Date, default: Date.now },

	// 最后修改日期
	update_at: { type: Date },

	// 自定义扩展
	extends: [{
		name: { type: String, validate: /\S+/ },
		value: { type: String, validate: /\S+/ }
	}]
});

categorySchema.set('toObject', { getters: true });

// 翻页 + 自增ID插件配置
categorySchema.plugin(mongoosePaginate);
categorySchema.plugin(autoIncrement.plugin, {
	model: 'Category',
	field: 'id',
	startAt: 1,
	incrementBy: 1
});

// 时间更新
categorySchema.pre('findOneAndUpdate', function(next) {
	this.findOneAndUpdate({}, { update_at: Date.now() });
	next();
});

// 分类模型
const Category = mongoose.model('Category', categorySchema);

// export
module.exports = Category;


