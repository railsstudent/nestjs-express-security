import { ThrottlerModule } from '@nestjs/throttler';

export const throttlerConfig = ThrottlerModule.forRoot({
    ttl: 60,
    limit: 10,
})