'use strict';

const Controller = require('egg').Controller;

class ShengziController extends Controller {

    async list() {
        await this.ctx.render('cms/shengzi/list.njk')
    }

}

module.exports = ShengziController;
