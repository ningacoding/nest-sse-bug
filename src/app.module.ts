import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {EventsService} from './events.service';
import {ServeStaticModule} from "@nestjs/serve-static";
import {join} from 'path';

@Module({
    imports: [
        ServeStaticModule.forRoot({
            rootPath: join(__dirname, '..', 'client'),
        }),
    ],
    controllers: [AppController],
    providers: [EventsService],
})
export class AppModule {
}
