/**
 * 描述
 * @author zyp
 * @version 1.0
 * @data 2018/1/24
 */

'use strict';

const Controller = require('egg').Controller;

class NewController extends Controller {

    async list() {
        const pageNo = this.ctx.query.pageNo;
        const pageSize = 20;
        const newList = await this.ctx.service.new.list({pageSize:pageSize,pageNo:pageNo});
        await this.ctx.render('cms/new/list.njk',{newList:newList})
    }

    async detail() {
        const id = this.ctx.query.id;
        const newModel = await this.ctx.service.new.detail(id)
        await this.ctx.render('cms/new/detail.njk',{newModel:newModel})
    }

}

module.exports = NewController;
