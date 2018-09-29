'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
      const sliderList = await this.ctx.service.slider.list(6);
      const newList = await this.ctx.service.new.positionList(8);
      const houseList = await this.ctx.service.house.positionList(14);
      const immigrationList = await this.ctx.service.immigration.positionList(10);
      await this.ctx.render('cms/home/home.njk',{
          sliderList:sliderList,
          newList:newList,
          houseList:houseList,
          immigrationList:immigrationList
      })
  }
}

module.exports = HomeController;
