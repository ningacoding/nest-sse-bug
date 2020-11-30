import {Controller, Post, Request, Sse} from '@nestjs/common';
import {EventsService} from "./events.service";

@Controller()
export class AppController {

    constructor(private readonly eventsService: EventsService) {
    }

    @Sse('events')
    events(
        @Request() req,
    ) {
        return this.eventsService.subscribe();
    }

    @Post('emit')
    async emit() {
        this.eventsService.emit({emitting: new Date().toISOString()});
        return {ok: true};
    }

}
