import { ThrottlerModule } from '@nestjs/throttler'

export const throttlerConfig = ThrottlerModule.forRoot({
    ttl: <%= ttl %>,
    limit: <%= limit %>,
})
