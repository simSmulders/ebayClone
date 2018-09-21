import { JsonController, Get, Post, HttpCode, Body } from 'routing-controllers'
import Ad from './entity'


@JsonController()
export default class AdController {

    @Get('/ads')
    async allAds() {
        const ads = await Ad.find()
        return { ads }
    }

    @Post('/ads')
    @HttpCode(201)
    createPage(
        @Body() ad: Ad
    ) {
  return ad.save()
}

}