import { UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';

import { Strategy } from 'passport-http-bearer';

import * as admin from 'firebase-admin';
import { firebaseAdminConfig } from '../../../config/firebase-admin.config';
admin.initializeApp(firebaseAdminConfig);

export class HttpBearerStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super();
    }

    async validate(token: string): Promise<any> {
        try {
            const user = await admin.auth().verifyIdToken(token);
            return user;
        } catch (error) {
            console.log(error)
            throw new UnauthorizedException();
        }
    }
}
