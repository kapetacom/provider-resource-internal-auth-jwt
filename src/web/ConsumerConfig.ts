/**
 * Copyright 2023 Kapeta Inc.
 * SPDX-License-Identifier: MIT
 */

import {
    KIND_PROVIDER,
    KIND_CONSUMER,
} from './types';

import {
    IResourceTypeProvider,
    ResourceRole,
    ResourceProviderType,
} from '@kapeta/ui-web-types';

import { Metadata, Resource } from '@kapeta/schemas';

const packageJson = require('../../package.json');

const ConsumerConfig: IResourceTypeProvider<Metadata> = {
    kind: KIND_CONSUMER,
    version: packageJson.version,
    title: 'JWT Authentication',
    role: ResourceRole.CONSUMES,
    type: ResourceProviderType.INTERNAL,
    converters: [
        {
            fromKind: KIND_PROVIDER,
            createFrom: (data: Resource) => {
                return {...data}
            }
        }
    ],

    definition: {
        kind: 'core/resource-type-internal',
        metadata: {
            name: KIND_CONSUMER,
            title: 'JWT Authentication',
            description: 'Authenticate your APIs using JWT',
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

export default ConsumerConfig;
