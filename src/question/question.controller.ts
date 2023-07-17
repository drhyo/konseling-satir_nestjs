import { Controller, Get, Res } from '@nestjs/common';
import { QuestionService } from './question.service';
import { BaseResponseApi } from 'src/response/response';
import { Response } from 'express';

@Controller('question')
export class QuestionController {
    constructor(private questionService: QuestionService) 
    { }

    @Get()
    async findAllData(@Res() res: Response) {
        try {
        const data = await this.questionService.findAllData()
        const response = new BaseResponseApi<any>(true,'success',data,res)
        return response.responseSucces()
            
        } catch (error) {
            console.log(error);
            const response = new BaseResponseApi<any>(false,'failed',error,res)
            return response.responDataNotFound()
            
        }
    }
}
