import { INestApplication, ValidationPipe } from '@nestjs/common'
import * as express from 'express'
import * as compression from 'compression'
import helmet from 'helmet'

export function addSecurity(app: INestApplication): void {
    app.enableCors()
    app.use(compression())
    app.use(helmet())
    app.use(express.json({ limit: '1mb' }))
    app.use(express.urlencoded({ extended: true }))
}

export function addValidationConfig(app: INestApplication) {
    app.useGlobalPipes(
        new ValidationPipe({
          whitelist: true,
        }),
    )
}