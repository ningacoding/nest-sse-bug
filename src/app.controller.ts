import {Controller, Get, Post, Sse} from '@nestjs/common';
import {EventsService} from './events.service';

@Controller()
export class AppController {

    constructor(private readonly eventsService: EventsService) {
    }

    @Sse('events')
    events() {
        return this.eventsService.subscribe();
    }

    @Post('emit')
    emit() {
        return this.eventsService.emit('event emit!! at ' + new Date().toISOString());
    }

}
