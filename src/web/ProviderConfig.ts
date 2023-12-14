/**
 * Copyright 2023 Kapeta Inc.
 * SPDX-License-Identifier: MIT
 */

import { KIND_PROVIDER, KIND_CONSUMER } from './types';
import { IResourceTypeProvider, ResourceRole, ResourceProviderType } from '@kapeta/ui-web-types';
import { Metadata } from '@kapeta/schemas';

const packageJson = require('../../package.json');

export const ProviderConfig: IResourceTypeProvider<Metadata> = {
    kind: KIND_PROVIDER,
    version: packageJson.version,
    title: 'JWT Authentication Provider',
    role: ResourceRole.PROVIDES,
    type: ResourceProviderType.INTERNAL,
    consumableKind: KIND_CONSUMER,
    definition: {
        kind: 'core/resource-type-internal',
        metadata: {
            name: KIND_PROVIDER,
            title: 'REST API',
            description: 'Provide JWT authentication to your services',
        },
        spec: {
            ports: [
                {
                    name: 'http',
                    type: 'http',
                },
            ],
        },
    },
};

export default ProviderConfig;
