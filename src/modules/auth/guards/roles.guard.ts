import { CanActivate, Injectable, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

import { UserRole } from './../enums';

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(
        private _reflector: Reflector
    ) {}

    canActivate(context: ExecutionContext): boolean {
        const roles =
            this._reflector.get<UserRole[]>('roles', context.getHandler()) ||
            this._reflector.get<UserRole[]>('roles', context.getClass());

        if (!roles || !roles.length) {
            return true;
        }

        const request = context.switchToHttp().getRequest();
        const { user } = request;

        const hasRole = roles.includes(user.role);

        return user && hasRole;
    }
}
