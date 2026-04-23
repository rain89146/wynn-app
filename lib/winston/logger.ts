// Winston logger

import winston, { format } from "winston";


const logger = winston.createLogger({
    level: process.env.LOG_LEVEL || 'info',
    format: format.combine(
        format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        format.json()
    ),
    transports: [
        new winston.transports.Console(),
    ],
});

export default logger;