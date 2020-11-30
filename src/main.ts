import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {json} from 'body-parser';
import moment from 'moment-timezone';
import i18n from 'i18n-js';

declare const module: any;

async function bootstrap() {
    moment.tz.setDefault('America/Mexico_City');
    i18n.fallbacks = true;
    // i18n.translations = {es, en};
    i18n.defaultLocale = 'en';
    i18n.locale = 'es';
    const app = await NestFactory.create(AppModule);
    app.setGlobalPrefix("api");
    app.enableCors();
    app.use(json({parameterLimit: 100000, limit: '50mb', extended: true} as any));
    const listener = await app.listen(3000);
    console.log(`Running`, 3000, listener.address());

    if (module.hot) {
        module.hot.accept();
        module.hot.dispose(() => app.close());
    }
}

bootstrap();
